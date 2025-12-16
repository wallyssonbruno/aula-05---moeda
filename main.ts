input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Happy)
        basic.showString("Cara")
    } else {
        basic.showIcon(IconNames.Skull)
        basic.showString("Coroa")
    }
})
