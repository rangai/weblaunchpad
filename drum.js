//DOM
const kick = document.querySelector('#kick');
const snare = document.querySelector('#snare');
const hihat = document.querySelector('#hihat');

//シンセ生成
const membrane = new Tone.MembraneSynth().toDestination();
const noise = new Tone.NoiseSynth().toDestination();
const metal = new Tone.MetalSynth().toDestination();

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