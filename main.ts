basic.forever(function () {
    music.play(music.createSoundExpression(WaveShape.Sine, 500, 500, 255, 0, 50, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 B - C5 B - A G ", 120), music.PlaybackMode.UntilDone)
})
