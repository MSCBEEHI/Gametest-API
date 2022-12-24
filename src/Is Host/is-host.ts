import * as mc from '@minecraft/server'

/**
 * @param {mc.Player} player 
 * @returns {boolean} true or false
 */
export function isHost(player: mc.Player): boolean {
    return player.id === '-4294967295'
}