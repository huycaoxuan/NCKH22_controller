gamerbit.onEvent(GamerBitPin.P12, GamerBitEvent.Down, function () {
    radio.sendNumber(12)
})
gamerbit.onEvent(GamerBitPin.P8, GamerBitEvent.Up, function () {
    radio.sendNumber(99)
})
gamerbit.onEvent(GamerBitPin.P16, GamerBitEvent.Up, function () {
    radio.sendNumber(99)
})
gamerbit.onEvent(GamerBitPin.P12, GamerBitEvent.Up, function () {
    radio.sendNumber(99)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(50)
})
gamerbit.onEvent(GamerBitPin.P16, GamerBitEvent.Down, function () {
    radio.sendNumber(16)
})
gamerbit.onEvent(GamerBitPin.P0, GamerBitEvent.Up, function () {
    radio.sendNumber(99)
})
gamerbit.onEvent(GamerBitPin.P1, GamerBitEvent.Down, function () {
    radio.sendNumber(21)
})
gamerbit.onEvent(GamerBitPin.P2, GamerBitEvent.Up, function () {
    radio.sendNumber(99)
})
input.onButtonPressed(Button.AB, function () {
    if (so > 10) {
        so = 10
        radio.sendNumber(so)
    } else {
        so = 11
        radio.sendNumber(so)
    }
})
gamerbit.onEvent(GamerBitPin.P1, GamerBitEvent.Up, function () {
    radio.sendNumber(99)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(51)
})
gamerbit.onEvent(GamerBitPin.P8, GamerBitEvent.Down, function () {
    radio.sendNumber(8)
})
gamerbit.onEvent(GamerBitPin.P2, GamerBitEvent.Down, function () {
    radio.sendNumber(22)
})
gamerbit.onEvent(GamerBitPin.P0, GamerBitEvent.Down, function () {
    radio.sendNumber(0)
})
let so = 0
radio.setGroup(1)
