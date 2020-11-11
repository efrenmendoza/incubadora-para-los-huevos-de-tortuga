basic.forever(function () {
    if (input.temperature() > 34) {
        for (let index = 0; index < 4; index++) {
            basic.showArrow(ArrowNames.South)
            music.playMelody("D - D - D - D - ", 700)
        }
    } else if (input.temperature() < 24) {
        for (let index = 0; index < 4; index++) {
            basic.showArrow(ArrowNames.North)
            music.playMelody("C5 - C5 - C5 - C5 - ", 700)
        }
    } else {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Heart)
            basic.clearScreen()
        }
    }
})
