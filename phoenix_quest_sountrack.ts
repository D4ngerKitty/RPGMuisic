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
                for (let index = 0; index < 2; index++) {
                    timer.background(function () {
                        music.playMelody("E F G A E F G A ", 120)
                    })
                    music.playMelody("C C5 C C5 C C5 C C5 ", 120)
                    timer.background(function () {
                        music.playMelody("C C5 C C5 C C5 C C5 ", 120)
                    })
                    music.playMelody("A G F E A G F E ", 120)
                }
                music.playMelody("E F G A F E F G ", 120)
            }
    
        }   
    
}
