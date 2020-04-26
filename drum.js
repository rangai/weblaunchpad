const kick = document.querySelector('#kick');
const kick_loop = document.querySelector('#kick_loop');
//const kick_loop2 = document.querySelector('#kick_loop2');

const snare = document.querySelector('#snare');
const snare_loop = document.querySelector('#snare_loop');

const hihat = document.querySelector('#hihat');

const test = document.querySelector('#test');
const init = document.querySelector('#init');

var chord1 = document.querySelector('#chord1');
var chord2 = document.querySelector('#chord2');
var chord3 = document.querySelector('#chord3');
var chord4 = document.querySelector('#chord4');

var Af_chord = ['G4#','C5', 'D5#'];
var G_chord = ['G4','B4', 'D5']; 
var Cm_chord = ['C4', 'D4#', 'G4'];
var Ef_chord = ['D4#', 'G4', 'A4#'];

var init_time=0;

kick.addEventListener('click', () => {
  const membrane = new Tone.MembraneSynth().toDestination();
  membrane.triggerAttackRelease('C0','8n');
},false);

var kloop = new Tone.Loop(function(time){
  const membrane = new Tone.MembraneSynth().toDestination();
	membrane.triggerAttackRelease("C1", "8n", time)
}, "4n").start();
kick_loop.addEventListener('click', () => Tone.Transport.toggle());

//kick_loop2.addEventListener('click', () => {
//  var kloop2 = new Tone.Loop(function(time){
//    const membrane = new Tone.MembraneSynth().toDestination();
//    membrane.triggerAttackRelease("C1", "8n", time)
//  }, "4n").start();
//  Tone.Transport.toggle()
//},false);

snare.addEventListener('click', () => {
  const noise = new Tone.NoiseSynth().toDestination();
  noise.triggerAttackRelease('8n');
}, false);

var sloop = new Tone.Loop(function(time){
  const noise = new Tone.NoiseSynth().toDestination();
	noise.triggerAttackRelease("8n", time)
}, "2n")
sloop.start(Tone.Time("2m")+Tone.Time("2n"))
snare_loop.addEventListener('click', () => Tone.Transport.toggle())

hihat.addEventListener('click', () => {
  const metal = new Tone.MetalSynth().toDestination();
  metal.triggerAttackRelease('32n'); 
}, false);

//test.addEventListener('click', () => {
//  let test = new Tone.Player("https://competent-boyd-71e011.netlify.app/assets/WLP_KickLoop001.mp3?dl=0").toDestination();
//  test.start();
//}, false);

init.addEventListener('click', () => {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease('C4', '8n') 
}, false);

chord1.addEventListener('click', () => {
  const polysynth = new Tone.PolySynth().toDestination();
  polysynth.triggerAttackRelease(Af_chord, '8n') 
}, false);

chord2.addEventListener('click', () => {
  const polysynth = new Tone.PolySynth().toDestination();
  polysynth.triggerAttackRelease(G_chord, '8n') 
}, false);

chord3.addEventListener('click', () => {
  const polysynth = new Tone.PolySynth().toDestination();
  polysynth.triggerAttackRelease(Cm_chord, '8n') 
}, false);

chord4.addEventListener('click', () => {
  const polysynth = new Tone.PolySynth().toDestination();
  polysynth.triggerAttackRelease(Ef_chord, '8n') 
}, false);