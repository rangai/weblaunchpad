//DOM
const kick = document.querySelector('#kick');
const snare = document.querySelector('#snare');
const hihat = document.querySelector('#hihat');

//シンセ生成
const membrane = new Tone.MembraneSynth().toDestination();
const noise = new Tone.NoiseSynth().toDestination();
const metal = new Tone.MetalSynth().toDestination();

var kickloop = new Tone.Loop(function(time){
	membrane.triggerAttackRelease('C0','2n', time);
}, '4n')

kickloop.start(0).stop('2m')

kick.addEventListener('click', e => Tone.Transport.toggle());

snare.addEventListener('click', () => { 
 noise.triggerAttackRelease('8n');  
}, false);

hihat.addEventListener('click', () => { 
 metal.triggerAttackRelease('32n'); 
}, false);