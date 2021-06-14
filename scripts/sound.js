import './node_modules/howler/dist/howler.min.js';

var sound = new Howl({
    src: ['./suono.mp3'],
    autoplay: true,
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
    }
  });