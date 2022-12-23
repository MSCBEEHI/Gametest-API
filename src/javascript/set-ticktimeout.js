import * as mc from '@minecraft/server';
/**
 * @param {VoidFunction} callback function
 * @param {number} tick numbers
 * @returns {void} callback function
 */
export function setTickTimeout(callback, tick) {
    let ticks = 0;
    const TickCallBack = mc.world.events.tick.subscribe(() => {
        ticks += 1;
        if (ticks == tick) {
            callback();
            mc.world.events.tick.unsubscribe(TickCallBack);
        }
    });
}
