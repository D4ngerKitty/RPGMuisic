


/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 
namespace CatQuestVo1 {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     <i class ="far fa-play-circle"></i>
     */
    //% block
    export function Play_song_Room () {
        
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
    export function Play_song_Tavern() {

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
}
