export const pillars=[
{id:'estructura',label:'Organización',short:'Estructura',icon:'layers',weight:25,detail:'Conclusión, secuencia y argumentos'},
{id:'improvisacion',label:'Improvisación',short:'Agilidad',icon:'zap',weight:25,detail:'Respuesta espontánea y pertinencia'},
{id:'diccion',label:'Dicción y fluidez',short:'Fluidez',icon:'audio',weight:20,detail:'Ritmo, inteligibilidad y pausas'},
{id:'persuasion',label:'Persuasión',short:'Persuasión',icon:'target',weight:15,detail:'Defensa de ideas y adaptación al público'},
{id:'concisión',label:'Concisión',short:'Concisión',icon:'minimize',weight:15,detail:'Síntesis y precisión'}
];
export const stagesDiagnostic={
 es:[
 {id:'story',title:'Narración espontánea',mins:2,tag:'Fluidez',prompt:'Cuéntame una situación reciente en la que tuviste que explicar algo complejo. ¿Cuál era el problema y cómo lo resolviste?',coach:'Explica la situación con naturalidad. No te preocupes por sonar perfecto.'},
 {id:'structure',title:'Estructura de ideas',mins:2,tag:'Organización',prompt:'¿Es mejor tomar decisiones con rapidez o analizar más alternativas? Presenta una conclusión y dos razones.',coach:'Comienza por tu postura. Después ofrece dos razones concretas.'},
 {id:'improv',title:'Respuesta imprevista',mins:2,tag:'Improvisación',prompt:'Una persona te interrumpe y te dice: «No estoy de acuerdo. ¿Por qué debería creer en tu propuesta?». Responde sin preparar un guion.',coach:'Puedes hacer una pausa breve antes de responder.'},
 {id:'voice',title:'Dicción y control vocal',mins:2,tag:'Dicción',prompt:'Lee en voz alta: «La claridad transforma una buena idea en una decisión compartida». Después explica con tus palabras qué significa.',coach:'Habla a tu ritmo; no fuerces un acento ni una velocidad.'},
 {id:'summary',title:'Síntesis final',mins:2,tag:'Concisión',prompt:'Resume tu postura de la segunda actividad en 30 segundos y vuelve a expresarla en 15 segundos.',coach:'Conserva la idea principal, aunque reduzcas los detalles.'}
 ],
 en:[
 {id:'story',title:'Natural storytelling',mins:2,tag:'Fluency',prompt:'Describe a situation where you had to explain something complex. What was the problem, and how did you handle it?',coach:'Speak naturally. Focus on your message, not perfection.'},
 {id:'structure',title:'Structure your thinking',mins:2,tag:'Structure',prompt:'Is it better to make decisions quickly or consider more options? State your position and give two reasons.',coach:'Lead with your conclusion and support it with two reasons.'},
 {id:'improv',title:'Think on your feet',mins:2,tag:'Improvisation',prompt:'A colleague interrupts: “I disagree with your recommendation. Why should we trust your approach?” Respond without a script.',coach:'A thoughtful pause is completely fine.'},
 {id:'voice',title:'Pronunciation and pace',mins:2,tag:'Speech',prompt:'Read aloud: “Clear communication turns good ideas into shared decisions.” Then explain the meaning in your own words.',coach:'Aim for intelligibility, not a particular accent.'},
 {id:'summary',title:'Make it concise',mins:2,tag:'Conciseness',prompt:'Summarize your answer to the second activity in 30 seconds, then in 15 seconds.',coach:'Keep the central message intact.'}
 ]
};
export const week=[
 {day:1,lang:'es',title:'Tu punto de partida',eyebrow:'Diagnóstico inicial',focus:'Descubre tu estilo al comunicar',desc:'Cinco ejercicios cortos para conocer cómo te expresas en español.',accent:'#7c94ee',isDiagnostic:true},
 {day:2,lang:'en',title:'Your starting point',eyebrow:'English baseline',focus:'Understand your speaking style',desc:'Five short exercises to establish an independent English baseline.',accent:'#76b6c0',isDiagnostic:true},
 {day:3,lang:'es',title:'La idea primero',eyebrow:'Organización de ideas',focus:'Conclusión → razones → cierre',desc:'Una respuesta precisa empieza con el mensaje central.',accent:'#7c94ee',stages:[
 {title:'Activa tu voz',mins:1,tag:'Preparación',prompt:'Pronuncia con calma: «Expreso una idea, presento dos razones y cierro con claridad».',coach:'Prepara la voz sin apurarte.'},
 {title:'Método PREP',mins:2,tag:'Estructura',prompt:'Explica si la educación debería priorizar la práctica o la teoría. Usa: punto, razón, ejemplo y punto final.',coach:'Primero di la conclusión.'},
 {title:'Responde y defiende',mins:4,tag:'Improvisación',prompt:'Un interlocutor pregunta: «¿No es demasiado simple tu argumento?». Responde defendiendo la idea con un ejemplo.',coach:'Reconoce la objeción antes de defender tu postura.'},
 {title:'Reformula',mins:2,tag:'Corrección',prompt:'Repite tu explicación en 40 segundos. Abre con tu conclusión y elimina lo secundario.',coach:'Una mejora concreta es mejor que intentar cambiar todo.'},
 {title:'Cierra la sesión',mins:1,tag:'Reflexión',prompt:'Di en una frase qué cambió entre tu primera y tu segunda respuesta.',coach:'Identifica el ajuste que utilizarás mañana.'}
 ]},
 {day:4,lang:'en',title:'Think on your feet',eyebrow:'Improvisation',focus:'Speak without a script',desc:'Improve your ability to respond to unexpected questions.',accent:'#76b6c0',stages:[
 {title:'Warm-up',mins:1,tag:'Voice',prompt:'Say aloud: “I can pause, structure my thoughts, and respond with confidence.”',coach:'Focus on a natural rhythm.'},
 {title:'Quick response',mins:2,tag:'Structure',prompt:'What makes a good team? Give one clear answer and two supporting points.',coach:'Aim for a simple framework.'},
 {title:'The objection',mins:4,tag:'Roleplay',prompt:'A colleague says: “Your proposal is too risky.” Explain why your recommendation is still worth considering.',coach:'Acknowledge the concern and provide a practical reason.'},
 {title:'Make it better',mins:2,tag:'Refine',prompt:'Deliver your strongest answer again, this time in 30 seconds.',coach:'Choose your best argument.'},
 {title:'Reflection',mins:1,tag:'Review',prompt:'What helped you respond more clearly?',coach:'Notice what became easier.'}
 ]},
 {day:5,lang:'es',title:'Precisión al hablar',eyebrow:'Dicción y fluidez',focus:'Ritmo y pausas intencionales',desc:'Habla con calma y gana claridad, sin perder naturalidad.',accent:'#7c94ee',stages:[
 {title:'Articulación',mins:1,tag:'Voz',prompt:'Lee: «Una explicación precisa transmite ideas complejas con palabras sencillas».',coach:'Prioriza claridad sobre velocidad.'},
 {title:'Pausa y énfasis',mins:2,tag:'Fluidez',prompt:'Explica una tecnología que utilizas cada día. Haz una pausa al terminar cada idea.',coach:'La pausa permite comprender.'},
 {title:'Explica sin jerga',mins:4,tag:'Claridad',prompt:'Explica a una persona no especialista cómo funciona una tecnología cotidiana en 60 segundos.',coach:'Evita tecnicismos innecesarios.'},
 {title:'Repite mejor',mins:2,tag:'Corrección',prompt:'Repite la explicación con frases más cortas y pausas después de cada idea.',coach:'Controla el ritmo de manera consciente.'},
 {title:'Reflexiona',mins:1,tag:'Cierre',prompt:'Describe qué hizo tu mensaje más fácil de entender.',coach:'Reconoce un hábito que quieras conservar.'}
 ]},
 {day:6,lang:'en',title:'Make it convincing',eyebrow:'Persuasion',focus:'Reason + evidence + recommendation',desc:'Defend your viewpoint with confidence and respect.',accent:'#76b6c0',stages:[
 {title:'Voice warm-up',mins:1,tag:'Voice',prompt:'Read: “A strong recommendation is clear, relevant, and supported by evidence.”',coach:'Use emphasis on the important words.'},
 {title:'Build an argument',mins:2,tag:'Persuasion',prompt:'Should a team invest in a new tool? Give a recommendation and one concrete benefit.',coach:'Explain the “why” before the details.'},
 {title:'Skeptical manager',mins:4,tag:'Roleplay',prompt:'A skeptical manager asks: “How do I know this will be worth the cost?” Respond persuasively.',coach:'Address the concern and make a specific proposal.'},
 {title:'One-minute pitch',mins:2,tag:'Refine',prompt:'Summarize your recommendation in 45 seconds with one supporting example.',coach:'Avoid repeating the same idea.'},
 {title:'Review',mins:1,tag:'Reflection',prompt:'Which part of your argument was the most convincing?',coach:'Notice your strongest supporting evidence.'}
 ]},
 {day:7,lang:'es',title:'Tu primera evolución',eyebrow:'Revisión semanal',focus:'Revisa y transfiere lo aprendido',desc:'Repite una tarea comparable y define el siguiente reto.',accent:'#7c94ee',stages:[
 {title:'Preparación',mins:1,tag:'Voz',prompt:'Habla durante unos segundos sobre un tema sencillo.',coach:'Conserva un ritmo cómodo.'},
 {title:'Tarea comparable',mins:2,tag:'Medición',prompt:'Describe una situación compleja que tuviste que resolver y cómo comunicaste tu decisión.',coach:'Compara con la narración del día 1.'},
 {title:'Interlocutor exigente',mins:4,tag:'Improvisación',prompt:'Alguien dice: «Sigo sin entender el beneficio de tu propuesta». Responde con claridad y concisión.',coach:'Presenta tu conclusión, una razón y un ejemplo.'},
 {title:'Segunda versión',mins:2,tag:'Corrección',prompt:'Repite tu respuesta anterior en 30 segundos, priorizando la idea principal.',coach:'Elimina lo redundante.'},
 {title:'Balance semanal',mins:1,tag:'Reflexión',prompt:'¿Qué habilidad quieres trabajar más la semana próxima?',coach:'Define un objetivo específico.'}
 ]}
];
export function sessionStages(day){return day.isDiagnostic?stagesDiagnostic[day.lang]:day.stages;}
export function getWeekDay(number){return week[Math.max(0,Math.min(6,number-1))];}
export function getAdvice(lang,focus){
 const adv={
 estructura:{es:'Empieza por tu conclusión. Después aporta dos razones y una frase de cierre.',en:'Lead with your conclusion. Add two supporting reasons and a short closing line.'},
 improvisacion:{es:'Respira, identifica la pregunta y elige una idea central antes de responder.',en:'Pause, identify the question, and choose one key message.'},
 diccion:{es:'Reduce la velocidad en las frases difíciles. Usa pausas naturales.',en:'Slow down on difficult phrases and use intentional pauses.'},
 persuasion:{es:'Reconoce la preocupación del interlocutor antes de presentar una evidencia.',en:'Acknowledge the listener’s concern, then give supporting evidence.'},
 'concisión':{es:'Si tuvieras solo 20 segundos, ¿qué conservarías de tu respuesta?',en:'If you had only 20 seconds, what would you keep?'}
 };return adv[focus]?.[lang]||adv.estructura[lang];
}
