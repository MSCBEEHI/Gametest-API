import * as mc from '@minecraft/server'

/**
 * 
 * @param { mc.Player } 
 * @returns { number }
 */
export function getLevel(player: mc.Player): number {
    let i = 0
    while (true) {
        if ([...mc.world.getPlayers({
            minLevel: i, maxLevel: i
        })].find(t => t.name === player.name))
            break
        i++
    }
    return i
}