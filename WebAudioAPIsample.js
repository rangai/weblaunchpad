// instigate our audio context

// for cross browser
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx;

// load some sound
const audioElement0 = document.querySelector('#audio0');
const audioElement1 = document.querySelector('#audio1');
const audioElement2 = document.querySelector('#audio2');
const audioElement3 = document.querySelector('#audio3');
let track;

const playButton0 = document.querySelector('.tape-controls-play0');
const playButton1 = document.querySelector('.tape-controls-play1');
const playButton2 = document.querySelector('.tape-controls-play2');
const playButton3 = document.querySelector('.tape-controls-play3');

// play pause audio
playButton0.addEventListener('click', function() {
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

playButton1.addEventListener('click', function() {
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

playButton2.addEventListener('click', function() {
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

playButton3.addEventListener('click', function() {
  if(!audioCtx) {
		init();
	}

	// check if context is in suspended state (autoplay policy)
	if (audioCtx.state === 'suspended') {
		audioCtx.resume();
	}

	if (this.dataset.playing === 'false') {
		audioElement3.play();
		this.dataset.playing = 'true';
	// if track is playing pause it
	} else if (this.dataset.playing === 'true') {
		audioElement3.pause();
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

	// volume
	const gainNode = audioCtx.createGain();

	const volumeControl = document.querySelector('[data-action="volume"]');
	volumeControl.addEventListener('input', function() {
		gainNode.gain.value = this.value;
	}, false);

	// panning
	const pannerOptions = { pan: 0 };
	const panner = new StereoPannerNode(audioCtx, pannerOptions);

	const pannerControl = document.querySelector('[data-action="panner"]');
	pannerControl.addEventListener('input', function() {
		panner.pan.value = this.value;
	}, false);

	// connect our graph
	track.connect(gainNode).connect(panner).connect(audioCtx.destination);
}