import * as mc from '@minecraft/server'

/**
 * @param {mc.Player} player 
 * @returns {boolean} true or false
 */
export function isHost(player: mc.Player): boolean {
    const host = player.id === '-4294967295' || console.warn(player.id)
    return 
}