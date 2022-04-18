// Data for the "HTML Audio" Page

const audio = {
  controls: true,
  source: [
    {
      src: 'https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.mp3',
      type: 'audio/mpeg'
    },
    {
      src: 'https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.ogg',
      type: 'audio/ogg'
    }
  ]
};

window.onload = function() {
  let aud = document.createElement('audio');

  audio.controls ? (aud.controls = true) : (aud.controls = false);

  audio.source.forEach(function(item) {
    let source = document.createElement('source');
    source.src = item.src;
    source.type = item.type;
    aud.appendChild(source);
  });
  let myAudio = document.querySelector('#audio');
  myAudio.appendChild(aud);
};
