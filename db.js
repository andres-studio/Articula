const DB_NAME='articula-audio-v1';
const DB_VERSION=1;
let dbPromise;
function database(){
 if(!('indexedDB' in window))return Promise.reject(new Error('Este navegador no permite almacenamiento local de audio.'));
 if(!dbPromise)dbPromise=new Promise((resolve,reject)=>{
  const req=indexedDB.open(DB_NAME,DB_VERSION);
  req.onupgradeneeded=()=>{let db=req.result;if(!db.objectStoreNames.contains('recordings'))db.createObjectStore('recordings',{keyPath:'id'});};
  req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);
 });
 return dbPromise;
}
export async function putRecording(rec){let db=await database();return new Promise((res,rej)=>{const tx=db.transaction('recordings','readwrite');tx.objectStore('recordings').put(rec);tx.oncomplete=()=>res(rec);tx.onerror=()=>rej(tx.error);});}
export async function getRecording(id){let db=await database();return new Promise((res,rej)=>{let q=db.transaction('recordings','readonly').objectStore('recordings').get(id);q.onsuccess=()=>res(q.result);q.onerror=()=>rej(q.error);});}
export async function listRecordings(){let db=await database();return new Promise((res,rej)=>{let q=db.transaction('recordings','readonly').objectStore('recordings').getAll();q.onsuccess=()=>res(q.result.sort((a,b)=>b.createdAt-a.createdAt));q.onerror=()=>rej(q.error);});}
export async function deleteRecording(id){let db=await database();return new Promise((res,rej)=>{let tx=db.transaction('recordings','readwrite');tx.objectStore('recordings').delete(id);tx.oncomplete=res;tx.onerror=()=>rej(tx.error);});}
export async function clearRecordings(){let db=await database();return new Promise((res,rej)=>{let tx=db.transaction('recordings','readwrite');tx.objectStore('recordings').clear();tx.oncomplete=res;tx.onerror=()=>rej(tx.error);});}
