enum Soundtrackenum {
    //% block="Walking"
    Walking = 0,
}



namespace Music {
    /**
     * phoenix_quest
     * 1 loopable songs
     */
    //% block
    export function phoenix_quest_soundtrack(Soundtrack: Soundtrackenum): void {
        switch (Soundtrack) {
            case Soundtrackenum.Walking:
                timer.background(function () {
                    for (let index = 0; index < 3; index++) {
                        music.playMelody("C - C - C - C - ", 300)
                        music.playMelody("D - D - D - D - ", 300)
                    }
                })
                music.playMelody("B B - - B B - - ", 300)
                music.playMelody("B B - - B B - - ", 300)
                music.playMelody("B A C5 - B A C5 - ", 300)
                music.playMelody("B B A - A B B C5 ", 300)
                music.playMelody("B A C5 - C5 A B - ", 300)
                music.playMelody("B B C5 C5 B B C5 C5 ", 300)
                music.stopAllSounds()
                music.playMelody("- - - - - - - - ", 300)
                music.playMelody("C5 B G F D G A B ", 300)
                timer.background(function () {
                    for (let index = 0; index < 3; index++) {
                        music.playMelody("C - C - C - C - ", 300)
                        music.playMelody("D - D - D - D - ", 300)
                    }
                })
                music.playMelody("B B - - B B - - ", 300)
                music.playMelody("B B - - B B - - ", 300)
                music.playMelody("B A C5 - B A C5 - ", 300)
                music.playMelody("B A C5 - C5 A B - ", 300)
                music.playMelody("B B A - A B B C5 ", 300)
                music.playMelody("B B C5 C5 B B C5 C5 ", 300)
                music.stopAllSounds()
                music.playMelody("- - - - - - - - ", 300)
                music.playMelody("C5 A A E D A A B ", 300)
        }
    }
}
