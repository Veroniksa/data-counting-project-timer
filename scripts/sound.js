import '../node_modules/howler/dist/howler.min.js';

export var sound = new Howl({
    src: ['./suono.mp3'],
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
    }
  });