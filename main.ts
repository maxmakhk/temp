input.onSound(DetectedSound.Loud, function () {
    start = input.runningTime()
    basic.showIcon(IconNames.Target)
})
input.onSound(DetectedSound.Quiet, function () {
    if (start > 0) {
        time = input.runningTime() - start
        basic.clearScreen()
        basic.pause(100)
        ff = randint(1, 3)
        if (ff == 1) {
            basic.showIcon(IconNames.Surprised)
            soundExpression.sad.playUntilDone()
            basic.pause(500)
            start = 0
        } else if (ff == 2) {
            basic.showIcon(IconNames.Confused)
            soundExpression.hello.playUntilDone()
            basic.pause(500)
            start = 0
        } else {
            basic.showIcon(IconNames.Angry)
            soundExpression.yawn.playUntilDone()
            basic.pause(500)
            start = 0
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    start = 0
    music.stopAllSounds()
    basic.showString("" + (input.temperature()))
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        . . . . .
        `)
})
let ff = 0
let time = 0
let start = 0
start = 0
basic.forever(function () {
    if (start == 0) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . . . . .
            . # # # .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            `)
        basic.pause(500)
    }
})
