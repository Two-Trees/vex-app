import * as Vex from 'vexflow';



const f = new Vex.Flow.Factory({
  renderer: { elementId: 'root', width: 500, height: 200 },
});

const score = f.EasyScore();
const system = f.System();

system
  .addStave({
    voices: [
      score.voice(score.notes('C#5/q, B4, A4, G#4', { stem: 'up' })),
      score.voice(score.notes('C#4/h, C#4', { stem: 'down' })),
    ],
  })
  .addClef('treble')
  .addTimeSignature('4/4');

f.draw();