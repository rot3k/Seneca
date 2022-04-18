// Data for the "HTML Video" Page

const video = {
  controls: true,
  width: 320,
  height: 240,
  source: [
    {
      src: 'https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.mp4',
      type: 'video/mp4'
    },
    {
      src: 'https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.ogg',
      type: 'video/ogg'
    }
  ]
};

window.onload = function() {
  myVideo();
  youTube();
};

function myVideo() {
  let vid = document.createElement('video');
  vid.width = video.width;
  vid.height = video.height;

  video.controls ? (vid.controls = true) : (vid.controls = false);

  video.source.forEach(function(item) {
    let source = document.createElement('source');
    source.src = item.src;
    source.type = item.type;
    vid.appendChild(source);
  });
  let myVideo = document.querySelector('#video');
  myVideo.appendChild(vid);
}

function youTube() {}
