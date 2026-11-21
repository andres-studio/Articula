import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../backend/worker.js';
const env={OPENAI_API_KEY:'test-key',ACCESS_TOKEN:'test-access',ALLOWED_ORIGIN:'https://test.github.io',LLM_MODEL:'gpt-4.1-mini',TRANSCRIBE_MODEL:'gpt-transcribe'};
const headers={Origin:env.ALLOWED_ORIGIN,Authorization:'Bearer '+env.ACCESS_TOKEN};
const originalFetch=globalThis.fetch;
const evaluation={headline:'Good structure',summary:'You presented a clear idea.',scores:{estructura:3,improvisacion:null,diccion:4,persuasion:2,'concisión':3},nextAction:'Lead with the conclusion.',observations:['A clear opinion is included.','The closing is repetitive.']};
const mockFetch=async(url,options)=>{
 if(url.endsWith('/audio/transcriptions'))return new Response(JSON.stringify({text:'Presenté una idea central y una razón concreta para defenderla.'}),{headers:{'content-type':'application/json'}});
 if(url.endsWith('/responses'))return new Response(JSON.stringify({output:[{type:'message',content:[{type:'output_text',text:options.body.includes('articula_feedback')?JSON.stringify(evaluation):'Prueba comenzar con tu conclusión.'}]}]}),{headers:{'content-type':'application/json'}});
 throw new Error('Unexpected provider call '+url);
};
test('health requires personal access token',async()=>{
 let r=await worker.fetch(new Request('https://worker.test/health',{headers:{Origin:env.ALLOWED_ORIGIN}}),env);assert.equal(r.status,401);
 r=await worker.fetch(new Request('https://worker.test/health',{headers}),env);assert.equal(r.status,200);assert.equal((await r.json()).ok,true);
});
test('cross-origin requests refused',async()=>{
 let r=await worker.fetch(new Request('https://worker.test/health',{headers:{...headers,Origin:'https://evil.example'}}),env);assert.equal(r.status,403);
});
test('text analysis produces evidence-aware null diction',async()=>{
 globalThis.fetch=mockFetch;
 try{let r=await worker.fetch(new Request('https://worker.test/analyze-text',{method:'POST',headers:{...headers,'Content-Type':'application/json'},body:JSON.stringify({lang:'es',transcript:'Presenté una idea central y una razón concreta para defenderla.',duration:30,prompt:'Explica una decisión'})}),env);
 assert.equal(r.status,200);let data=await r.json();assert.equal(data.evaluation.scores.diccion,null);assert.equal(data.evaluation.scores.estructura,3);
 }finally{globalThis.fetch=originalFetch;}
});
test('audio is transcribed before model analysis',async()=>{
 globalThis.fetch=mockFetch;
 try{let f=new FormData();f.append('audio',new Blob(['hello'],{type:'audio/webm'}),'record.webm');f.append('lang','en');f.append('duration','30');f.append('prompt','Explain a decision');let r=await worker.fetch(new Request('https://worker.test/analyze-audio',{method:'POST',headers,body:f}),env);assert.equal(r.status,200);let result=await r.json();assert.ok(result.transcript.includes('idea central'));assert.equal(result.evaluation.scores.diccion,null);
 }finally{globalThis.fetch=originalFetch;}
});
test('rejects empty or invalid transcripts',async()=>{
 let r=await worker.fetch(new Request('https://worker.test/analyze-text',{method:'POST',headers:{...headers,'Content-Type':'application/json'},body:JSON.stringify({transcript:'hi'})}),env);assert.equal(r.status,400);
});
