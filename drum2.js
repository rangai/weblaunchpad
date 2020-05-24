// for cross browser
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx;

const kick0 = document.querySelector('#kick0');
const kick1 = document.querySelector('#kick1');
const kick2 = document.querySelector('#kick2');
const kick3 = document.querySelector('#kick3');

const snare0 = document.querySelector('#snare0');
const snare1 = document.querySelector('#snare1');
const snare2 = document.querySelector('#snare2');
const snare3 = document.querySelector('#snare3');

const hihat0 = document.querySelector('#hihat0');
const hihat1 = document.querySelector('#hihat1');
const hihat2 = document.querySelector('#hihat2');
const hihat3 = document.querySelector('#hihat3');

const test0 = document.querySelector('#test0');
const test1 = document.querySelector('#test1');
const test2 = document.querySelector('#test2');
const test3 = document.querySelector('#test3');

// load some sound
const audioElement0 = document.querySelector('#audio0');
const audioElement1 = document.querySelector('#audio1');
const audioElement2 = document.querySelector('#audio2');
const audioElement3 = document.querySelector('#audio3');
let track;

// play pause audio
kick0.addEventListener('click', function() {
  if(!audioCtx) {
		init();
	}

	// check if context is in suspended state (autoplay policy)
	if (audioCtx.state === 'suspended') {
		audioCtx.resume();
	}

	if (this.dataset.playing === 'false') {
		audioElement0.play();
		this.dataset.playing = 'true';
	// if track is playing pause it
	} else if (this.dataset.playing === 'true') {
		audioElement0.pause();
		this.dataset.playing = 'false';
	}

	let state = this.getAttribute('aria-checked') === "true" ? true : false;
	this.setAttribute( 'aria-checked', state ? "false" : "true" );

}, false);

snare0.addEventListener('click', function() {
  if(!audioCtx) {
		init();
	}

	// check if context is in suspended state (autoplay policy)
	if (audioCtx.state === 'suspended') {
		audioCtx.resume();
	}

	if (this.dataset.playing === 'false') {
		audioElement1.play();
		this.dataset.playing = 'true';
	// if track is playing pause it
	} else if (this.dataset.playing === 'true') {
		audioElement1.pause();
		this.dataset.playing = 'false';
	}

	let state = this.getAttribute('aria-checked') === "true" ? true : false;
	this.setAttribute( 'aria-checked', state ? "false" : "true" );

}, false);

hihat0.addEventListener('click', function() {
  if(!audioCtx) {
		init();
	}

	// check if context is in suspended state (autoplay policy)
	if (audioCtx.state === 'suspended') {
		audioCtx.resume();
	}

	if (this.dataset.playing === 'false') {
		audioElement2.play();
		this.dataset.playing = 'true';
	// if track is playing pause it
	} else if (this.dataset.playing === 'true') {
		audioElement2.pause();
		this.dataset.playing = 'false';
	}

	let state = this.getAttribute('aria-checked') === "true" ? true : false;
	this.setAttribute( 'aria-checked', state ? "false" : "true" );

}, false);


// if track ends
audioElement0.addEventListener('ended', () => {
	playButton0.dataset.playing = 'false';
	playButton0.setAttribute( "aria-checked", "false" );
}, false);

audioElement1.addEventListener('ended', () => {
	playButton1.dataset.playing = 'false';
	playButton1.setAttribute( "aria-checked", "false" );
}, false);

audioElement2.addEventListener('ended', () => {
	playButton2.dataset.playing = 'false';
	playButton2.setAttribute( "aria-checked", "false" );
}, false);

audioElement3.addEventListener('ended', () => {
	playButton3.dataset.playing = 'false';
	playButton3.setAttribute( "aria-checked", "false" );
}, false);

function init() {
	audioCtx = new AudioContext();
	track = audioCtx.createMediaElementSource(audioElement0);
}