import * as mc from '@minecraft/server'

/**
 * @param target player
 * @param callback function
 * @returns use function
 */
export function doMove(target: mc.Player, callback: VoidFunction) {
    const tick = mc.world.events.tick
    const ui = tick.subscribe((eventData) => {
        if (eventData.currentTick % 10 === 0)
            if (target.velocity.length() > 0.1) {
                callback()
                tick.unsubscribe(ui)
            }
    })
}