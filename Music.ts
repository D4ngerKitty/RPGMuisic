

enum songs {
    //% block="Room" 
    Room = 0,
    //% block="Tavern" 
    Tavern,
    //% block="Seaside_town"
    Seaside_town,
    //% block="Ocean"
    Ocean,
    //% block="Town"
    Town,
}


namespace Music {
    /**
     * CatQuestVo1 
     * 5 loopable songs
     */
    //% block
    export function CatQuestVo1(song: songs): void {
        switch (song) {
            case songs.Room:
                for (let index = 0; index < 2; index++) {
                    music.playTone(440, music.beat(BeatFraction.Half))
                    music.rest(music.beat(BeatFraction.Half))
                    music.playTone(349, music.beat(BeatFraction.Half))
                    music.rest(music.beat(BeatFraction.Half))
                    music.playTone(494, music.beat(BeatFraction.Half))
                    music.rest(music.beat(BeatFraction.Half))
                    music.playTone(415, music.beat(BeatFraction.Half))
                    music.playTone(494, music.beat(BeatFraction.Half))
                    music.playTone(523, music.beat(BeatFraction.Half))
                    music.playTone(587, music.beat(BeatFraction.Half))
                    music.playTone(587, music.beat(BeatFraction.Half))
                    music.rest(music.beat(BeatFraction.Whole))
                }
                music.playTone(440, music.beat(BeatFraction.Half))
                music.rest(music.beat(BeatFraction.Half))
                music.playTone(392, music.beat(BeatFraction.Half))
                music.rest(music.beat(BeatFraction.Half))
                music.playTone(494, music.beat(BeatFraction.Half))
                music.rest(music.beat(BeatFraction.Half))
                music.playTone(440, music.beat(BeatFraction.Half))
                music.playTone(494, music.beat(BeatFraction.Half))
                music.playTone(587, music.beat(BeatFraction.Half))
                music.playTone(659, music.beat(BeatFraction.Half))
                music.playTone(659, music.beat(BeatFraction.Half))
                music.rest(music.beat(BeatFraction.Whole))
            }
                switch (song) {
                case songs.Tavern:
               for (let index = 0; index < 1; index++) {
                timer.background(function () {
                    music.playTone(262, music.beat(BeatFraction.Quarter))
                })
                music.playTone(330, music.beat(BeatFraction.Quarter))
                music.rest(music.beat(BeatFraction.Half))
                music.playTone(349, music.beat(BeatFraction.Quarter))
                music.playTone(330, music.beat(BeatFraction.Quarter))
                music.playTone(262, music.beat(BeatFraction.Quarter))
                music.playTone(294, music.beat(BeatFraction.Quarter))
                music.playTone(330, music.beat(BeatFraction.Quarter))
                music.playTone(262, music.beat(BeatFraction.Quarter))
                music.rest(music.beat(BeatFraction.Half))
                music.playTone(330, music.beat(BeatFraction.Quarter))
                music.playTone(262, music.beat(BeatFraction.Quarter))
                music.playTone(294, music.beat(BeatFraction.Quarter))
                timer.background(function () {
                    music.playTone(262, music.beat(BeatFraction.Quarter))
                })
                music.playTone(330, music.beat(BeatFraction.Quarter))
                music.playTone(349, music.beat(BeatFraction.Quarter))
                music.playTone(330, music.beat(BeatFraction.Quarter))
                music.playTone(262, music.beat(BeatFraction.Quarter))
                music.playTone(294, music.beat(BeatFraction.Quarter))
                music.playTone(330, music.beat(BeatFraction.Quarter))
                music.playTone(262, music.beat(BeatFraction.Quarter))
                music.rest(music.beat(BeatFraction.Half))
            }
            }
              switch (song) {
               case songs.Seaside_town:
                timer.background(function () {
                    music.playMelody("- C - C - C - C ", 120)
                })
                music.playMelody("E G B E G A E F ", 120)
                timer.background(function () {
                    music.playMelody("- D - D - D - D ", 120)
                })
                music.playMelody("F A C5 F B C5 F A ", 120)
                timer.background(function () {
                    music.playMelody("- C - C - C - C ", 120)
                })
                music.playMelody("E G B E G A E F ", 120)
                timer.background(function () {
                    music.playMelody("- D - D - D - D ", 120)
                })
                music.playMelody("D F A D F G D E ", 120)
            }
            switch (song) {
            case songs.Ocean:
                music.playMelody("E G E A E G E A ", 200)
                music.playMelody("D F D G D F D G ", 200)
                timer.background(function () {
                    music.playMelody("C - C - C - C - ", 200)
                })
                music.playMelody("E G E A E G E A ", 200)
                timer.background(function () {
                    music.playMelody("C - C - C - C - ", 200)
                })
                music.playMelody("D F D G D F D G ", 200)
            }
             switch (song) {
               case songs.Town:
                timer.background(function () {
                    music.playTone(247, music.beat(BeatFraction.Double))
                })
                music.playTone(494, music.beat(BeatFraction.Whole))
                music.playTone(523, music.beat(BeatFraction.Half))
                music.playTone(494, music.beat(BeatFraction.Half))
                timer.background(function () {
                    music.playTone(262, music.beat(BeatFraction.Double))
                })
                music.playTone(523, music.beat(BeatFraction.Whole))
                music.playTone(587, music.beat(BeatFraction.Half))
                music.playTone(523, music.beat(BeatFraction.Half))
                music.playTone(494, music.beat(BeatFraction.Half))
                music.playTone(440, music.beat(BeatFraction.Half))
                music.playTone(392, music.beat(BeatFraction.Half))
                timer.background(function () {
                    music.playTone(294, music.beat(BeatFraction.Double))
                })
                music.playTone(587, music.beat(BeatFraction.Whole))
                music.playTone(659, music.beat(BeatFraction.Half))
                music.playTone(698, music.beat(BeatFraction.Half))
                music.playTone(494, music.beat(BeatFraction.Half))
                music.playTone(440, music.beat(BeatFraction.Half))
                music.playTone(392, music.beat(BeatFraction.Half))
                music.playTone(440, music.beat(BeatFraction.Half))
                timer.background(function () {
                    music.playTone(220, music.beat(BeatFraction.Double))
                })
                music.playTone(494, music.beat(BeatFraction.Whole))
                music.playTone(523, music.beat(BeatFraction.Half))
                music.playTone(494, music.beat(BeatFraction.Half))
                timer.background(function () {
                    music.playTone(262, music.beat(BeatFraction.Double))
                })
                music.playTone(494, music.beat(BeatFraction.Whole))
                music.playTone(523, music.beat(BeatFraction.Half))
                music.playTone(494, music.beat(BeatFraction.Half))
                music.playTone(494, music.beat(BeatFraction.Half))
                music.playTone(440, music.beat(BeatFraction.Half))
                music.playTone(392, music.beat(BeatFraction.Half))
                music.playTone(440, music.beat(BeatFraction.Half))
            }
        }
    }
    


