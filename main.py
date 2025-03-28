basic.show_number(0)
OLED.init(128, 64)
basic.show_icon(IconNames.YES)
OLED.write_string_new_line("Ready!")

def on_forever():
    distance = 0
    OLED.clear()
    OLED.write_string_new_line("Distance" + ": " + ("" + str(distance)))
    if distance < 5:
        pins.digital_write_pin(DigitalPin.P1, 1)
        basic.pause(5000)
    else:
        pins.digital_write_pin(DigitalPin.P1, 0)
    basic.pause(1000)
basic.forever(on_forever)
