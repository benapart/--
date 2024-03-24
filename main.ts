basic.forever(function () {
    music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 0, 2000, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    music.play(music.createSoundExpression(WaveShape.Sawtooth, 500, 500, 255, 0, 5000, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.play(music.createSoundExpression(WaveShape.Sawtooth, 500, 500, 255, 0, 50, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.play(music.createSoundExpression(WaveShape.Sawtooth, 500, 500, 255, 0, 50, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 B - C5 B - A G ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 A G F - - - - ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G F C E - - - - ", 100), music.PlaybackMode.UntilDone)
})
