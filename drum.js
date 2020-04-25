//DOM
const kick = document.querySelector('#kick');
const kick_loop = document.querySelector('#kick_loop');
const snare = document.querySelector('#snare');

const hihat = document.querySelector('#hihat');

const test = document.querySelector('#test');

const init = document.querySelector('#init');

//シンセ生成
const membrane = new Tone.MembraneSynth().toDestination();
const noise = new Tone.NoiseSynth().toDestination();
const metal = new Tone.MetalSynth().toDestination();
const synth = new Tone.Synth().toDestination()

kick.addEventListener('click', () => {
  for(let i=0;i<16;i++){
    membrane.triggerAttackRelease('C0','8n',Tone.Time('4n')*i);
  }
},false);

snare.addEventListener('click', () => { 
  noise.triggerAttackRelease('8n');  
}, false);

hihat.addEventListener('click', () => { 
  metal.triggerAttackRelease('32n'); 
}, false);

var kloop = new Tone.Loop(function(time){
	membrane.triggerAttackRelease("C1", "8n", time)
}, "4n")
kloop.start(0)
kick_loop.addEventListener('click', e => Tone.Transport.toggle())

var sloop = new Tone.Loop(function(time){
	noise.triggerAttackRelease("8n", time)
}, "2n")
sloop.start(0)
snare_loop.addEventListener('click', e => Tone.Transport.toggle())

init.addEventListener('click', () => { 
  synth.triggerAttackRelease('C4', '8n') 
}, false);