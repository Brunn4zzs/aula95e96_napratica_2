input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
let bptaonaopressionado = true
basic.forever(function () {
    while (bptaonaopressionado) {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showString("A")
            music.ringTone(262)
            bptaonaopressionado = false
        } else if (input.pinIsPressed(TouchPin.P2)) {
            basic.showString("B")
            music.ringTone(262)
            bptaonaopressionado = false
        }
    }
})
