
enum MyEnum {
    //% block="one"
    Room,
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 
namespace Catloops {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     <i class ="far fa-play-circle"></i>
     */
    //% block
    export function Play_song (e: MyEnum): void {
        
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

}
