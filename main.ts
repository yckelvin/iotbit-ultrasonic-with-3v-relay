let distance = 0
basic.showNumber(0)
OLED.init(128, 64)
basic.showIcon(IconNames.Yes)
OLED.writeStringNewLine("Ready!")
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P14,
    PingUnit.Centimeters
    )
    OLED.clear()
    OLED.writeStringNewLine("Distance" + ": " + ("" + distance))
    if (distance < 5) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(5000)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    basic.pause(1000)
})
