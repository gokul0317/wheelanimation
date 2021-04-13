
import { WheelItem } from './wheelTypes'

export default class Wheel {
    speed: number = 1000
    time: number = 1000
    items: WheelItem[] = []
    setItems(items: WheelItem[]) {
        this.items = items
        return this;
    }
    setSpeed(speed: number) {
        this.speed = speed;
        return this;
    }
    setTime(time: number) {
        this.time = time;
        return this;
    }
}