/*
  impulse responses from:
  https://github.com/cwilso/web-audio-samples/tree/master/samples/audio/impulse-responses
*/

const BPM_MAX = 360;
const BPM_MIN = 60;
const NOTE_1_4 = 60.0;
const NOTE_1_8 = 30.0;
const NOTE_1_16 = 15.0;
let selectedNote = NOTE_1_16;
const tracks = [];

/* kits */

const kit808 = [
  {
    id: 0,
    kit: "808",
    instr: "Kick",
    path: "res\\kit808\\808_kik.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 1,
    kit: "808",
    instr: "Snare",
    path: "res\\kit808\\808_sn.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 2,
    kit: "808",
    instr: "Side-stick",
    path: "res\\kit808\\808_sidestick.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 3,
    kit: "808",
    instr: "Clap",
    path: "res\\kit808\\808_clap.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 4,
    kit: "808",
    instr: "HH Closed",
    path: "res\\kit808\\808_hh.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 5,
    kit: "808",
    instr: "HH Open",
    path: "res\\kit808\\808_hhopen.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 6,
    kit: "808",
    instr: "Tom High",
    path: "res\\kit808\\808_tom1.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 7,
    kit: "808",
    instr: "Tom Low",
    path: "res\\kit808\\808_tom2.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 8,
    kit: "808",
    instr: "Cymbal",
    path: "res\\kit808\\808_crash.wav",
    playbackRate: 1,
    reverse: false,
  },
];

const kit909 = [
  {
    id: 0,
    kit: "909",
    instr: "Kick",
    path: "res\\kit909\\909_kik.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 1,
    kit: "909",
    instr: "Snare",
    path: "res\\kit909\\909_sn.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 2,
    kit: "909",
    instr: "Side-stick",
    path: "res\\kit909\\909_sidestick.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 3,
    kit: "909",
    instr: "Clap",
    path: "res\\kit909\\909_clap.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 4,
    kit: "909",
    instr: "HH Closed",
    path: "res\\kit909\\909_hh.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 5,
    kit: "909",
    instr: "HH Open",
    path: "res\\kit909\\909_hhopen.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 6,
    kit: "909",
    instr: "Tom High",
    path: "res\\kit909\\909_tom1.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 7,
    kit: "909",
    instr: "Tom Low",
    path: "res\\kit909\\909_tom2.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 8,
    kit: "909",
    instr: "Cymbal",
    path: "res\\kit909\\909_crash.wav",
    playbackRate: 1,
    reverse: false,
  },
];

const kitLinn = [
  {
    id: 0,
    kit: "Linn",
    instr: "Kick",
    path: "res\\kitLinn\\Linn_kik.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 1,
    kit: "Linn",
    instr: "Snare",
    path: "res\\kitLinn\\Linn_sn.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 2,
    kit: "Linn",
    instr: "Side-stick",
    path: "res\\kitLinn\\Linn_sidestick.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 3,
    kit: "Linn",
    instr: "Clap",
    path: "res\\kitLinn\\Linn_clap.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 4,
    kit: "Linn",
    instr: "HH Closed",
    path: "res\\kitLinn\\Linn_hh.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 5,
    kit: "Linn",
    instr: "HH Open",
    path: "res\\kitLinn\\Linn_hhopen.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 6,
    kit: "Linn",
    instr: "Tom High",
    path: "res\\kitLinn\\Linn_tom1.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 7,
    kit: "Linn",
    instr: "Tom Low",
    path: "res\\kitLinn\\Linn_tom2.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 8,
    kit: "Linn",
    instr: "Cymbal",
    path: "res\\kitLinn\\Linn_crash.wav",
    playbackRate: 1,
    reverse: false,
  },
];

const kitCR78 = [
  {
    id: 0,
    kit: "CR78",
    instr: "Kick",
    path: "res\\kitCR78\\CR78_kik.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 1,
    kit: "CR78",
    instr: "Snare",
    path: "res\\kitCR78\\CR78_sn.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 2,
    kit: "CR78",
    instr: "Side-stick",
    path: "res\\kitCR78\\CR78_sidestick.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 3,
    kit: "CR78",
    instr: "Clap",
    path: "res\\kitCR78\\CR78_clave.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 4,
    kit: "CR78",
    instr: "HH Closed",
    path: "res\\kitCR78\\CR78_hh.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 5,
    kit: "CR78",
    instr: "HH Open",
    path: "res\\kitCR78\\CR78_hhopen.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 6,
    kit: "CR78",
    instr: "Tom High",
    path: "res\\kitCR78\\CR78_tom1.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 7,
    kit: "CR78",
    instr: "Tom Low",
    path: "res\\kitCR78\\CR78_tom2.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 8,
    kit: "CR78",
    instr: "Cymbal",
    path: "res\\kitCR78\\CR78_crash.wav",
    playbackRate: 1,
    reverse: false,
  },
];

const kitLive = [
  {
    id: 0,
    kit: "Live",
    instr: "Kick",
    path: "res\\kitLive\\Live_kik.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 1,
    kit: "Live",
    instr: "Snare",
    path: "res\\kitLive\\Live_sn.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 2,
    kit: "Live",
    instr: "Side-stick",
    path: "res\\kitLive\\Live_sidestick.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 3,
    kit: "Live",
    instr: "Clap",
    path: "res\\kitLive\\Live_rimshot.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 4,
    kit: "Live",
    instr: "HH Closed",
    path: "res\\kitLive\\Live_hh.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 5,
    kit: "Live",
    instr: "HH Open",
    path: "res\\kitLive\\Live_hhopen.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 6,
    kit: "Live",
    instr: "Tom High",
    path: "res\\kitLive\\Live_tom1.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 7,
    kit: "Live",
    instr: "Tom Low",
    path: "res\\kitLive\\Live_tom2.wav",
    playbackRate: 1,
    reverse: false,
  },
  {
    id: 8,
    kit: "Live",
    instr: "Cymbal",
    path: "res\\kitLive\\Live_crash.wav",
    playbackRate: 1,
    reverse: false,
  },
];

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const pads = document.querySelectorAll(".pads");

// nodes and helpers
const nodesGain = [];
const gainValues = []; // for mute and solo in conjuction with nodesGain
const nodesPan = [];
const nodesReverb = [];
//const nodesReverbGain = [];
const nodesDelay = [];
const nodesDelayGain = [];
const nodesSwing = [];
const swingMaxValues = []; // used in conjuction with nodesSwing
const nodesHumanize = [];
const humanizeMaxValues = []; // used in conjuction with nodesHumanize

for (let i = 0; i < 9; i++) {
  nodesGain[i] = audioCtx.createGain();
  gainValues[i] = nodesGain[i].gain.value; // used to revert gain levels when muting and soloing
  nodesPan[i] = new StereoPannerNode(audioCtx, { pan: 0 });
  nodesReverb[i] = audioCtx.createConvolver();
  nodesSwing[i] = audioCtx.createDelay(0.1);
  swingMaxValues[i] = nodesSwing[i].delayTime.value;
  nodesHumanize[i] = audioCtx.createDelay(0.5);
  humanizeMaxValues[i] = nodesHumanize[i].delayTime.value;
}

let swingToggleVal = false;

/* reverse */

function reverseBuffer(id) {
  // update state property
  tracks[id].reverse = !tracks[id].reverse;

  // loop because samples can have one or more channels
  for (let i = 0; i < tracks[id].numberOfChannels; i++) {
    Array.prototype.reverse.call(tracks[id].getChannelData(i));
  }
}

// Create a buffer, plop in data, connect and play -> modify graph here if required
function playSample(audioContext, audioBuffer, time) {
  const sampleSource = new AudioBufferSourceNode(audioContext, {
    buffer: audioBuffer,
    playbackRate: audioBuffer.playbackRate,
  });

  const id = sampleSource.buffer.id;

  if (swingMaxValues[id]) {
    nodesSwing[id].delayTime.value = swingToggleVal ? swingMaxValues[id] : 0;
    swingToggleVal = !swingToggleVal;
  } else if (humanizeMaxValues[id]) {
    let val = Math.floor(Math.random() * humanizeMaxValues[id]) / 100;
    nodesHumanize[id].delayTime.value = val;
  }

  sampleSource
    .connect(nodesSwing[id])
    .connect(nodesHumanize[id])
    .connect(nodesGain[id])
    .connect(nodesPan[id])
    .connect(audioContext.destination);

  sampleSource.start(time);
  return sampleSource;
}

// Scheduling
let tempo = 60.0;
const bpmControl = document.getElementById("bpm");
const bpmValEl = document.getElementById("bpmval");

bpmControl.addEventListener(
  "input",
  (ev) => {
    tempo = parseInt(ev.target.value, 10);
    bpmValEl.value = tempo;
  },
  false
);

bpmValEl.addEventListener(
  "change",
  (ev) => {
    const inputTempo = parseInt(ev.target.value, 10);

    // validate
    if (inputTempo >= BPM_MIN && inputTempo <= BPM_MAX) {
      tempo = inputTempo;
      bpmControl.value = tempo;
      return;
    }

    if (inputTempo > BPM_MAX) {
      tempo = BPM_MAX;
    }

    if (inputTempo < BPM_MIN) {
      tempo = BPM_MIN;
    }

    ev.target.value = tempo;
    bpmControl.value = tempo;
  },
  false
);

const lookahead = 25.0; // How frequently to call scheduling function (in milliseconds)
const scheduleAheadTime = 0.1; // How far ahead to schedule audio (sec)

/* step-grid controller */

let gridLength = 8;

document
  .getElementById("step-dropdown-selector")
  .addEventListener("click", function () {
    document.querySelector(".step-dropdown--panel").classList.toggle("show");
  });

/* selecting steps length and updating ui */

const stepDropdownPanel = document.querySelector(".step-dropdown--panel");
stepDropdownPanel.addEventListener("click", function (e) {
  if (!e.target.classList.contains("step-dropdown--select")) return;
  resetBeatIndicatorCells();
  gridLength = e.target.dataset.gridValue;
  updateStepsUI();
  stepDropdownPanel.classList.remove("show");
  document.querySelector(".step-dropdown--value").textContent = gridLength;
});

stepDropdownPanel.addEventListener("mouseleave", function () {
  stepDropdownPanel.classList.remove("show");
});

function updateStepsUI() {
  // loop through each pads row
  for (let i = 0; i < tracks.length; i++) {
    const rowChildren = pads[i].children;
    // loop through each pads row children (32)
    for (let j = 0; j < rowChildren.length; j++) {
      // if even, it's the input and not a label element
      if (j % 2 === 0) {
        // gridlength is doubled to account for the label elements
        if (j < gridLength * 2) {
          rowChildren[j].style.border = "var(--stepsActiveBorder)";
        } else {
          rowChildren[j].style.border = "var(--stepsNotActiveBorder)";
        }
      }
    }
  }
}

const noteDropdownPanel = document.querySelector(".note-dropdown--panel");
document
  .getElementById("note-dropdown-selector")
  .addEventListener("click", function () {
    noteDropdownPanel.classList.toggle("show");
  });

noteDropdownPanel.addEventListener("click", function (e) {
  if (!e.target.classList.contains("note-dropdown--select")) return;
  const val = e.target.dataset.noteValue;

  if (val === "1/4") {
    selectedNote = NOTE_1_4;
  }
  if (val === "1/8") {
    selectedNote = NOTE_1_8;
  }
  if (val === "1/16") {
    selectedNote = NOTE_1_16;
  }

  document.querySelector(".note-dropdown--panel").classList.remove("show");
  document.querySelector(".note-dropdown--value").textContent = val;
});

noteDropdownPanel.addEventListener("mouseleave", function () {
  noteDropdownPanel.classList.remove("show");
});

let currentNote = 0; // The note we are currently playing
let nextNoteTime = 0.0; // when the next note is due.
function nextNote() {
  const secondsPerBeat = selectedNote / tempo;
  nextNoteTime += secondsPerBeat; // Add beat length to last beat time

  // Advance the beat number, wrap to zero when reaching 4
  currentNote = (currentNote + 1) % gridLength;
}

const levelMeters = document.querySelectorAll(".level-meter");
function startLevelMeters(index = -1) {
  if (index >= 0) {
    levelMeters[index].style.setProperty(
      "--meterTop",
      `${parseInt(nodesGain[index].gain.value * 100)}px`
    );
    levelMeters[index].classList.add("active-meter");
  }
}

function stopLevelMeters(index) {
  levelMeters[index].classList.remove("active-meter");
}

const indicators = document.querySelectorAll(".indicator-cell");

function beatIndicator(index) {
  const previous = index === 0 ? gridLength - 1 : index - 1;
  indicators[previous].style.backgroundColor = "var(--indicatorCellBG)"; //"#272727";
  indicators[index].style.backgroundColor = color;
}

// called when changing steps - loop length
function resetBeatIndicatorCells() {
  indicators.forEach((el) => {
    el.style.backgroundColor = "var(--indicatorCellBG)";
  });
}

// Create a queue for the notes that are to be played, with the current time that we want them to play:
const notesInQueue = [];

function scheduleNote(beatNumber, time) {
  // Push the note into the queue, even if we're not playing.
  notesInQueue.push({ note: beatNumber, time: time });

  if (pads[0].querySelectorAll("input")[beatNumber].checked) {
    playSample(audioCtx, tracks[0], time);
    startLevelMeters(0);
  } else {
    stopLevelMeters(0);
  }
  if (pads[1].querySelectorAll("input")[beatNumber].checked) {
    playSample(audioCtx, tracks[1], time);
    startLevelMeters(1);
  } else {
    stopLevelMeters(1);
  }
  if (pads[2].querySelectorAll("input")[beatNumber].checked) {
    playSample(audioCtx, tracks[2], time);
    startLevelMeters(2);
  } else {
    stopLevelMeters(2);
  }
  if (pads[3].querySelectorAll("input")[beatNumber].checked) {
    playSample(audioCtx, tracks[3], time);
    startLevelMeters(3);
  } else {
    stopLevelMeters(3);
  }
  if (pads[4].querySelectorAll("input")[beatNumber].checked) {
    playSample(audioCtx, tracks[4], time);
    startLevelMeters(4);
  } else {
    stopLevelMeters(4);
  }
  if (pads[5].querySelectorAll("input")[beatNumber].checked) {
    playSample(audioCtx, tracks[5], time);
    startLevelMeters(5);
  } else {
    stopLevelMeters(5);
  }
  if (pads[6].querySelectorAll("input")[beatNumber].checked) {
    playSample(audioCtx, tracks[6], time);
    startLevelMeters(6);
  } else {
    stopLevelMeters(6);
  }
  if (pads[7].querySelectorAll("input")[beatNumber].checked) {
    playSample(audioCtx, tracks[7], time);
    startLevelMeters(7);
  } else {
    stopLevelMeters(7);
  }
  if (pads[8].querySelectorAll("input")[beatNumber].checked) {
    playSample(audioCtx, tracks[8], time);
    startLevelMeters(8);
  } else {
    stopLevelMeters(8);
  }

  beatIndicator(beatNumber);
}

let timerID;
function scheduler() {
  // While there are notes that will need to play before the next interval,
  // schedule them and advance the pointer.
  while (nextNoteTime < audioCtx.currentTime + scheduleAheadTime) {
    scheduleNote(currentNote, nextNoteTime);
    nextNote();
  }
  timerID = setTimeout(scheduler, lookahead);
}

// Draw function to update the UI, so we can see when the beat progress.
// This is a loop: it reschudele itself to redraw at the end.
let lastNoteDrawn = 3;
function draw() {
  let drawNote = lastNoteDrawn;
  const currentTime = audioCtx.currentTime;
  while (notesInQueue.length && notesInQueue[0].time < currentTime) {
    drawNote = notesInQueue[0].note;
    notesInQueue.shift(); // Remove note from queue
  }
  // We only need to draw if the note has moved.
  if (lastNoteDrawn !== drawNote) {
    lastNoteDrawn = drawNote;
  }
  // Set up to draw again
  requestAnimationFrame(draw);
}

// When the sample has loaded, allow play
const loadingEl = document.querySelector(".loading");
const playButton = document.querySelector("#playBtn");
let isPlaying = false;

const init = function () {
  populateAllTracksInfo(); // display loaded track names
  updateStepsUI(); // highlight step cells to their default value

  document.querySelector(".loading").style.display = "none";

  playButton.addEventListener("click", (ev) => {
    isPlaying = !isPlaying;

    if (isPlaying) {
      resetBeatIndicatorCells();

      // Start playing

      // Check if context is in suspended state (autoplay policy)
      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }

      currentNote = 0;
      nextNoteTime = audioCtx.currentTime;
      scheduler(); // kick off scheduling
      requestAnimationFrame(draw); // start the drawing loop.
      ev.target.dataset.playing = "true";
    } else {
      window.clearTimeout(timerID);
      ev.target.dataset.playing = "false";
    }
  });
};

function populateAllTracksInfo() {
  tracks.sort((a, b) => {
    return a.id - b.id;
  });

  tracks.map((trx, i) => {
    trackNamesLinks[i].textContent = `${trx.kit} ${trx.instr}`;
    updateSampleNamesUI(i);
  });

  // close selector IF open
}

/* load default samples */

kit808.map((instr, i) => {
  setupSample(instr).then((sample) => {
    tracks.push(sample);
    if (tracks.length === 9) {
      init();
    }
  });
});

// Loading the file: fetch the audio file and decode the data
//async function getFile(audioContext, filepath) {
async function getFile(audioContext, audioObj) {
  const response = await fetch(audioObj.path);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  return audioBuffer;
}

//async function setupSample(file) {
async function setupSample(audioObj) {
  // Here we're waiting for the load of the file
  // To be able to use this keyword we need to be within an `async` function
  const sample = await getFile(audioCtx, audioObj);
  sample.id = audioObj.id;
  sample.kit = audioObj.kit;
  sample.instr = audioObj.instr;
  sample.path = audioObj.path;
  sample.playbackRate = audioObj.playbackRate;
  sample.reverse = audioObj.reverse;
  return sample;
}

/********************************************
  track row number and names
********************************************/

let currentTrackSelect = null;
const trackNumbers = document.querySelectorAll(".track-number");
const trackNamesLinks = document.querySelectorAll(".track-sample-name");

/* open sample panel or track settings */

function openPanel(selectedElement, panel, trackID, type) {
  const linkBlocker = document.getElementById("link-blocker-hack");

  // close panel when user selects the same number or name twice
  if (currentTrackSelect !== null && currentTrackSelect === trackID) {
    selectedElement.style.color = "var(--trackNameUnselectedColor)";
    panel.classList.toggle("show");
    currentTrackSelect = null;
    linkBlocker.style.display = "none";
    return;
  }

  // position link blocker
  if (type === "number") {
    linkBlocker.style.left = "45px";
    linkBlocker.style.width = "107px";
  } else {
    linkBlocker.style.left = "10px";
    linkBlocker.style.width = "26px";
  }
  linkBlocker.style.top = "0px";
  linkBlocker.style.height = "280px";
  linkBlocker.style.display = "block";

  // user is selecting different track numbers or names while its corrisponding panel is open
  if (currentTrackSelect !== null) {
    if (type === "name") {
      trackNamesLinks[currentTrackSelect].style.color =
        "var(--trackNameUnselectedColor)";
    } else if (type === "number") {
      trackNumbers[currentTrackSelect].style.color =
        "var(--trackNameUnselectedColor)";
    }
  } else {
    // currentTrackSelect is null. user selected a number or name, open it corrisponding panel
    panel.classList.toggle("show");
  }

  currentTrackSelect = trackID;
  selectedElement.style.color = color;

  if (type === "number") {
    loadTrackSettingValues();
  }
}

/* track number - settings panel */

function openTrackSettings(el) {
  const settingsContainer = document.querySelector(".track-settings-container");
  const selectedTrackID = parseInt(el.target.parentNode.dataset.trackNum);
  const element = el.target;
  // display track number and sample name
  document.getElementById("panel-header-num").textContent = selectedTrackID + 1;
  document.getElementById(
    "panel-header-instr"
  ).textContent = `${tracks[selectedTrackID].kit} ${tracks[selectedTrackID].instr}`;
  openPanel(element, settingsContainer, selectedTrackID, "number");
}

function closeTrackSettings() {
  trackNumbers[currentTrackSelect].style.color = "var(--textColor)";
  currentTrackSelect = null;
  document.querySelector(".track-settings-container").classList.toggle("show");
  const linkBlocker = document.getElementById("link-blocker-hack");
  linkBlocker.style.display = "none";
}

document
  .getElementById("track-settings-close-panel")
  .addEventListener("click", closeTrackSettings);

trackNumbers.forEach((el) => {
  el.addEventListener("click", function (e) {
    openTrackSettings(e);
  });
});

/* load track setting values */

function loadTrackSettingValues() {
  // playback rate
  const playbackRate = tracks[currentTrackSelect].playbackRate;
  rangePlaybackRate.value = playbackRate;
  updateRangeRateDisplay(playbackRate);

  // reverse
  checkboxReverse.checked = tracks[currentTrackSelect].reverse;

  // swing
  rangeSwing.value = swingMaxValues[currentTrackSelect];
  updateRangeSwingDisplay(rangeSwing.value);

  // humanize
  rangeHumanize.value = humanizeMaxValues[currentTrackSelect];
  updateRangeHumanizeDisplay(rangeHumanize.value);
}

/* track name - sample selector panel */

trackNamesLinks.forEach((el) => {
  el.addEventListener("click", function (e) {
    const selectContainer = document.querySelector(".instr-select-container");
    const selectedTrackID = parseInt(e.target.parentNode.dataset.trackNum);
    const element = e.target;

    openPanel(element, selectContainer, selectedTrackID, "name");
  });
});

/* handle selecting, loading samples and kits */

let selectingKit = false;

function loadSamples(obj) {
  setupSample(obj).then((sample) => {
    // update sample array
    tracks[currentTrackSelect] = sample;

    // we are loading
    if (selectingKit) {
      if (currentTrackSelect < tracks.length - 1) {
        currentTrackSelect++;
      } else {
        // last of the kit samples are loaded - sort and update ui and reset
        populateAllTracksInfo();
        currentTrackSelect = null;
        selectingKit = false;
      }
      return;
    }

    updateSampleNamesUI(currentTrackSelect);
    currentTrackSelect = null;
  });
}

function updateSampleNamesUI(index) {
  // update ui
  const trackNameEl = document.getElementById(`track-name${index}`);

  trackNameEl.textContent = `${tracks[index].kit} ${tracks[index].instr}`;
  trackNameEl.style.color = "var(--trackNameUnselectedColor)";
}

const allLibSampleLinks = document.querySelectorAll(".instr-select");
allLibSampleLinks.forEach((el) => {
  el.addEventListener("click", function (e) {
    const audioObj = {
      id: currentTrackSelect,
      kit: e.target.dataset.kit,
      instr: e.target.dataset.instr,
      path: e.target.dataset.path,
      playbackRate: e.target.dataset.playbackRate,
      reverse: false,
    };

    loadSamples(audioObj);
    closeSampleSelector();
  });
});

/**************************************** */
/* selecting and loading full drum kit    */
/* called from the sample selector pannel */
/* called when loading a beat preset      */
/**************************************** */

// load kits
function loadKit(kit) {
  selectingKit = true;
  currentTrackSelect = 0;
  let kitArray = [];
  kit = kit.toUpperCase();

  if (kit === "808") {
    kitArray = [...kit808];
  }
  if (kit === "909") {
    kitArray = [...kit909];
  }
  if (kit === "LINN") {
    kitArray = [...kitLinn];
  }
  if (kit === "CR78") {
    kitArray = [...kitCR78];
  }
  if (kit === "LIVE") {
    kitArray = [...kitLive];
  }

  kitArray.forEach((instr, i) => {
    loadSamples(instr);
  });
}

// kit links in sample selector
const allKitsLinks = document.querySelectorAll(".kit-select-header");
allKitsLinks.forEach((el) => {
  el.addEventListener("click", function (e) {
    loadKit(e.target.dataset.kit);
    closeSampleSelector();
  });
});

// close sample selector
function closeSampleSelector() {
  document.querySelector(".instr-select-container").classList.toggle("show");
  // hide link blocker div blocking track numbers
  document.getElementById("link-blocker-hack").style.display = "none";
}

/********************************************
  misc section   
********************************************/

const btnMisc = document.querySelector(".main-btn-misc");
btnMisc.addEventListener("click", function () {
  document.querySelector(".misc-container").classList.toggle("show");
});

/* misc - tabs */

const tabs = document.querySelectorAll(".tab");
const tabsContent = document.querySelectorAll(".tab-content");
const tabsPanel = document.querySelector(".tabs-panel");
tabsPanel.addEventListener("click", function (e) {
  if (!e.target.classList.contains("tab")) return;

  // get id
  const index = parseInt(e.target.dataset.tab) + 1;

  // hide all content panels
  tabsContent.forEach((content) => {
    content.style.display = "none";
  });

  // close all tab right borders
  tabs.forEach((tab) => {
    tab.style.borderRight = "var(--borderMain)";
  });
  // show the panel that corresponds to the selected tab
  e.target.style.borderRight = "none";
  tabsContent[index].style.display = "block";
});

/* misc - switch between dark and light themes */

const darkModeBtn = document.getElementById("dark-mode");

darkModeBtn.addEventListener("click", function (e) {
  const rootEl = document.documentElement;
  const theme = rootEl.dataset.theme;
  const newTheme = theme === "light" ? "dark" : "light";
  rootEl.dataset.theme = newTheme;
});

/* misc - colors */

let color = "#ff9900";
const colorBtns = document.querySelectorAll(".colors li");

colorBtns.forEach((el) => {
  el.addEventListener("click", function (e) {
    color = e.target.dataset.value;

    colorBtns.forEach((el) => {
      el.style.border = "var(--borderInner)";
    });
    e.target.style.border = `solid 4px ${color}`;
    updateColors();
  });
});

const updateColors = function () {
  resetBeatIndicatorCells(); // FIX : see notes

  darkModeBtn.style.setProperty("--highlightColor", color);
  playButton.style.setProperty("--highlightColor", color);
  checkboxReverse.style.setProperty("--highlightColor", color);

  const stepSelect = document.querySelectorAll(".step-dropdown--select");
  const allPadCells = document.querySelectorAll(".pads input");
  const mixerSampleNames = document.querySelectorAll(
    ".mix-channel-sample-name"
  );

  const allElements = [
    ...stepSelect,
    ...indicators,
    ...allPadCells,
    ...trackNamesLinks,
    ...trackNumbers,
    ...allKitsLinks,
    ...allLibSampleLinks,
    ...mixerSampleNames,
    ...levelMeters,
    ...delayLabelsLinks,
    ...reverbLabelsLinks,
    ...presetBeatLinks,
    ...muteBtns,
    ...soloBtns,
  ];
  allElements.forEach((el) => {
    el.style.setProperty("--highlightColor", color);
  });

  /*
     stepSelect: step dropdown options hover
     indicators: beat indicator cells
     allPadCells: step cells when checked
     trackNamesLinks: track names link hover state
     trackNumbers: track number link hover state
     allKitsLinks: full drumkit selector link hover state
     allLibSampleLinks: sample selector link hover state
     mixerSampleNames: sample names in mixer channels 
     levelMeters: mixer level meters
  */
};

/********************************************
  mixer section   
********************************************/

/* mixer - btn */

const btnMixer = document.querySelector(".btn-mixer");
btnMixer.addEventListener("click", function () {
  if (!tracks) return;

  // update sample names
  const sampleNames = document.querySelectorAll(".mix-channel-sample-name");
  sampleNames.forEach((el, i) => {
    el.textContent = `${tracks[i].kit} ${tracks[i].instr}`;
  });

  document.querySelector(".mixer-container").classList.toggle("show");
});

/* mixer chanel - solo btn */

const soloBtns = document.querySelectorAll(".solo-btn");

soloBtns.forEach((el) => {
  el.addEventListener("click", function (e) {
    soloChannel(e.target.dataset.id);
  });
});

function soloChannel(id) {
  id = parseInt(id);
  soloBtns[id].classList.toggle("active");
  const active = soloBtns[id].classList.contains("active") ? true : false;

  if (active) {
    // solo

    // mute every channel but the selected
    nodesGain.map((gainNode, i) => {
      if (i !== id) gainNode.gain.value = 0;
    });

    muteBtns.forEach((el, i) => {
      if (i !== id) el.classList.add("active");
    });

    soloBtns[id].classList.add("active");
  } else {
    // un-solo

    nodesGain.map((node, i) => {
      node.gain.value = gainValues[i];
    });

    soloBtns[id].classList.remove("active");

    muteBtns.forEach((el, i) => {
      el.classList.remove("active");
    });
  }
}

/* mixer chanel - mute btn */

const muteBtns = document.querySelectorAll(".mute-btn");

function muteChannel(id) {
  id = parseInt(id);
  muteBtns[id].classList.toggle("active");
  const active = muteBtns[id].classList.contains("active") ? true : false;

  if (active) {
    // mute
    gainValues[id] = nodesGain[id].gain.value;
    nodesGain[id].gain.value = 0;
  } else {
    // un-mute
    nodesGain[id].gain.value = gainValues[id];
  }
}

muteBtns.forEach((el) => {
  el.addEventListener("click", function (e) {
    muteChannel(e.target.dataset.id);
  });
});

/* mixer channel - level */

const mixerlevelSliders = document.querySelectorAll(".slider-level");
mixerlevelSliders.forEach((el, i) => {
  el.addEventListener("input", function () {
    nodesGain[i].gain.value = this.value;
    // update value. used for mute and solo
    gainValues[i] = this.value;
  });
});

/* mixer channel - pan */

const mixerPanSliders = document.querySelectorAll(".slider-pan");
mixerPanSliders.forEach((el, i) => {
  el.addEventListener("input", function () {
    nodesPan[i].pan.value = this.value;
  });
});

/* mixer channel - reverb and delay panel */

let currentMixerChannelSelected = null;

// open fx panel
function openFxPanel(el, fxType) {
  currentMixerChannelSelected = el.dataset.channelId;

  if (fxType === "reverb") {
    document.querySelector(".reverb-settings-content").classList.add("show");
  }
  if (fxType === "delay") {
    document.querySelector(".delay-settings-content").classList.add("show");
  }
  document.getElementById("fx-close-panel").dataset.fxType = fxType;
  document.querySelector(".fx-settings-container").classList.toggle("show");
}

// close fx panel
function closeFxPanel() {
  document.querySelector(".fx-settings-container").classList.toggle("show");
  document.querySelector(".reverb-settings-content").classList.remove("show");
  document.querySelector(".delay-settings-content").classList.remove("show");

  const fxType = document.getElementById("fx-close-panel").dataset.fxType;

  if (fxType === "reverb") {
    reverbLabelsLinks[currentMixerChannelSelected].style.color =
      "var(--textColor)";
  }

  if (fxType === "delay") {
    delayLabelsLinks[currentMixerChannelSelected].style.color =
      "var(--textColor)";
  }
}

// close fx panel btn
document
  .getElementById("fx-close-panel")
  .addEventListener("click", closeFxPanel);

/* mixer channel - reverb */

// open reverb panel for targeted channel
const reverbLabelsLinks = document.querySelectorAll(".trx-revb-lbl");
reverbLabelsLinks.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.target.style.color = "var(--highlightColor)";
    openFxPanel(el, "reverb");
  });
});

// const reverbDropdown = document.getElementById("reverb-dropdown");
// reverbDropdown.addEventListener("onchange", function (e) {
//   const path = e.target.dataset.verbPath;
//   if (path === "bypass") {
//     // disable reverb node
//   } else {
//     nodesReverb[id] = createReverb(path);
//   }
// });

function addReverbNodeToChain() {}

function removeReverbNodeToChain() {}

/* mixer - delay - gain slider */

/* mixer channel - delay */

// open delay panel for targeted channel
const delayLabelsLinks = document.querySelectorAll(".trx-dly-lbl");
delayLabelsLinks.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.target.style.color = "var(--highlightColor)";
    openFxPanel(el, "delay");
  });
});

const mixerDelayGainSliders = document.querySelectorAll(".slider-dly");
mixerDelayGainSliders.forEach((el, i) => {
  el.addEventListener("input", function () {
    //nodesGainDelay[i].gain.value = this.value;
  });
});

/* mixer - delay - durations slider */

// const mixerDelayDurationSlider = document.getElementById(
//   "range-delay-duration"
// );
// mixerDelayDurationSlider.addEventListener("input", function () {
//   //nodesDelay[currentMixerChannelSelected].gain.value = this.value;
// });

/* mixer - delay - feedback slider */

// const mixerDelayFeedbackSlider = document.querySelectorAll(
//   ".slider-delay-feedback"
// );
// mixerDelayFeedbackSlider.addEventListener("input", function () {
//   //nodesDelay[currentMixerChannelSelected].gain.value = this.value;
// });

/*************************************************************
  track settings - playback rate, reverse, swing and humanize
*************************************************************/

/* playback rate */

const rangePlaybackRate = document.getElementById("range-rate");
const rangeRateValueDisplay = document.getElementById("rate-value-display");

// updates the range rate's value displayed
function updateRangeRateDisplay(rate) {
  let rateStr = "1";
  if (rate > 1) rateStr = `+${rate}`;
  if (rate < 1) rateStr = `-${rate}`;
  rangeRateValueDisplay.textContent = rateStr;
}

rangePlaybackRate.addEventListener("input", function (e) {
  const rate = Math.round(e.target.value * 100) / 100;
  tracks[currentTrackSelect].playbackRate = rate;
  updateRangeRateDisplay(rate);
});

/* reverse */

const checkboxReverse = document.getElementById("reverse-mode");
checkboxReverse.addEventListener("click", function () {
  reverseBuffer(currentTrackSelect);
});

/* swing */

const rangeSwing = document.getElementById("range-swing");
const rangeSwingValueDisplay = document.getElementById("swing-value-display");

// updates the range rate's value displayed
function updateRangeSwingDisplay(val) {
  rangeSwingValueDisplay.textContent = `${val * 10}%`;
}

rangeSwing.addEventListener("input", function () {
  nodesSwing[currentTrackSelect].delayTime.value = +this.value;
  swingMaxValues[currentTrackSelect] = +this.value;

  rangeSwingValueDisplay.textContent = `${Math.floor(
    parseFloat(this.value) * 1000
  )}%`;
});

/* humanize */

const rangeHumanize = document.getElementById("range-humanize");
const rangeHumanizeValueDisplay = document.getElementById(
  "humanize-value-display"
);
// updates the range rate's value displayed
function updateRangeHumanizeDisplay(val) {
  rangeHumanizeValueDisplay.textContent = `${val * 10 * 2}%`;
}

rangeHumanize.addEventListener("input", function () {
  humanizeMaxValues[currentTrackSelect] = +this.value;
  updateRangeHumanizeDisplay(+this.value);
});

const addTrackBtn = document.querySelector(".header");
addTrackBtn.addEventListener("click", function () {
  let newTrackNum = tracks.length;

  // create an empty audio buffer and add to tracks array

  audioObj = {
    id: newTrackNum,
    kit: "user",
    instr: "empty",
    playbackRate: 1,
    reverse: false,
  };

  tracks.push(audioObj);

  // build number/name part of the row
  const trackContainer = document.querySelector(".track-container");

  let divTrackRow = document.createElement("div");
  divTrackRow.id = `track-row${newTrackNum}`;
  divTrackRow.className = "track-row";
  divTrackRow.dataset.trackNum = newTrackNum;

  let divTrackNum = document.createElement("div");
  divTrackNum.id = `track-number${newTrackNum}`;
  divTrackNum.className = "track-number";
  divTrackNum.textContent = newTrackNum + 1;

  let divTrackName = document.createElement("div");
  divTrackName.id = `track-name${newTrackNum}`;
  divTrackName.className = "track-sample-name";
  divTrackName.dataset.trackSelect = newTrackNum;
  divTrackName.textContent = "*Empty*";

  divTrackRow.append(divTrackNum);
  divTrackRow.append(divTrackName);

  // build the row of cells
  const cellContainer = document.querySelector(".cell-rows-container");

  // at this point we can get out of 0 base
  newTrackNum = newTrackNum + 1;

  let newCellRow = document.createElement("div");
  divTrackRow.className = "pads";
  for (i = 0; i < 32; i++) {
    let element;
    if (i % 2) {
      element = document.createElement("input");
      element.type = "checkbox";
      element.id = `v${newTrackNum}n${i + 1}`;
    } else {
      element = document.createElement("label");
      element.for = `v${newTrackNum}n${i + 1}`;
      element.textContent = `Voice ${newTrackNum}, Note ${i + 1}`;
    }
    newCellRow.append(element);
  }

  // add parts
  trackContainer.insertAdjacentHTML("beforeend", divTrackRow);
  cellContainer.insertAdjacentHTML("beforeend", newCellRow);

  // lightup new cells according to step loop value
  updateStepsUI();
});

/* preset beats */

function getPresetBeat(name) {
  const beat = presetBeats.filter((b) => b.name === name);
  if (beat.length) loadBeatPreset(beat[0]);
}

function loadBeatPreset(beat) {
  // update bpm
  tempo = beat.bpm;
  bpmControl.value = beat.bpm;
  bpmValEl.value = beat.bpm;

  // update steps
  gridLength = beat.step;
  document.querySelector(".step-dropdown--value").textContent = gridLength;
  updateStepsUI();

  // update notes
  if (beat.note === "1/4") {
    selectedNote = NOTE_1_4;
  }
  if (beat.note === "1/8") {
    selectedNote = NOTE_1_8;
  }
  if (beat.note === "1/16") {
    selectedNote = NOTE_1_16;
  }
  document.querySelector(".note-dropdown--value").textContent = beat.note;

  // load kit
  loadKit(beat.kit);

  // populate the cells
  for (let i = 0; i < tracks.length; i++) {
    const rowChildren = pads[i].children;
    // loop through each pads row children (32 includes label elements)
    for (let j = 0; j < rowChildren.length; j++) {
      // if even, it's an input, not a label element
      if (j % 2 === 0) {
        // if length is 0, there are no notes for the row. proceed to clear cells
        if (beat.cells[i].length) {
          // math calc on the j index to compensate for labels. if 1, it's a note. if 0, no note
          if (beat.cells[i][Math.floor(j / 2)]) {
            // we got a note
            rowChildren[j].checked = "checked";
          } else {
            // no note, clear cell
            rowChildren[j].checked = "";
          }
        } else {
          // clear cell
          rowChildren[j].checked = "";
        }
      }
    }
  }

  // close misc panel
  document.querySelector(".misc-container").classList.toggle("show");
}

const presetBeatLinks = document.querySelectorAll(".preset-beat");
presetBeatLinks.forEach((el) => {
  el.addEventListener("click", function (e) {
    getPresetBeat(e.target.dataset.presetBeat);
  });
});

const presetBeats = [
  {
    id: 0,
    name: "Hip Hop 1",
    bpm: 95,
    step: 16,
    note: "1/16",
    kit: "Linn",
    cells: [
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
      [],
      [],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [],
      [],
      [],
    ],
  },
  {
    id: 1,
    name: "Hip Hop 2",
    bpm: 90,
    step: 16,
    note: "1/16",
    kit: "Linn",
    cells: [
      [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [],
      [],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [],
      [],
      [],
    ],
  },
  {
    id: 2,
    name: "Rock",
    bpm: 112,
    step: 16,
    note: "1/16",
    kit: "Live",
    cells: [
      [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
      [],
      [],
      [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [],
      [],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  },
  {
    id: 3,
    name: "Punk",
    bpm: 120,
    step: 16,
    note: "1/16",
    kit: "Live",
    cells: [
      [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1],
      [],
      [],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [],
      [],
      [],
    ],
  },
  {
    id: 4,
    name: "Metal 1",
    bpm: 90,
    step: 16,
    note: "1/16",
    kit: "Live",
    cells: [
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [],
      [],
      [],
      [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    ],
  },
  {
    id: 5,
    name: "Metal 2",
    bpm: 125,
    step: 16,
    note: "1/16",
    kit: "Live",
    cells: [
      [1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1],
      [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
      [],
      [],
      [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [],
      [],
      [],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  },
  {
    id: 6,
    name: "Reggae 2",
    bpm: 90,
    step: 16,
    note: "1/16",
    kit: "Linn",
    cells: [
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [],
      [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
      [],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [],
      [],
    ],
  },
  {
    id: 7,
    name: "Reggae 1",
    bpm: 78,
    step: 16,
    note: "1/16",
    kit: "Linn",
    cells: [
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
      [],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [],
      [],
      [],
    ],
  },
  {
    id: 8,
    name: "Dancehall",
    bpm: 90,
    step: 16,
    note: "1/16",
    kit: "909",
    cells: [
      [1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [],
      [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
      [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [],
    ],
  },
  {
    id: 9,
    name: "Reggaeton",
    bpm: 96,
    step: 16,
    note: "1/16",
    kit: "CR78",
    cells: [
      [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [],
    ],
  },
  {
    id: 10,
    name: "House",
    bpm: 112,
    step: 16,
    note: "1/16",
    kit: "808",
    cells: [
      [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0],
      [],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [],
      [1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [],
    ],
  },
  {
    id: 11,
    name: "Techno",
    bpm: 125,
    step: 16,
    note: "1/16",
    kit: "909",
    cells: [
      [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [],
    ],
  },
  {
    id: 12,
    name: "R&B",
    bpm: 75,
    step: 16,
    note: "1/16",
    kit: "808",
    cells: [
      [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      [],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
      [],
      [0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [],
      [],
      [],
    ],
  },
  {
    id: 13,
    name: "Pop",
    bpm: 112,
    step: 16,
    note: "1/16",
    kit: "CR78",
    cells: [
      [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
      [],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [],
      [],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  },
];
