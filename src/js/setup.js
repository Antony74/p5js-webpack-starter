const P5 = require('p5');

new P5((p5) => {
 
    var x = 100; 
    var y = 100;

    p5.setup = () => {
      console.log('setup');
    };

    p5.draw = () => {
      p5.background(230);
      p5.fill(255, 0, 255);
      p5.ellipse(50, 50, 70, 70);
      p5.noLoop();
    };
});

