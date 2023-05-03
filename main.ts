input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
basic.pause(100)
basic.showIcon(IconNames.EigthNote)
basic.showString("Push the button \"A\"")
