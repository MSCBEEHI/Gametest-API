import * as mc from '@minecraft/server'

/**
 * @returns {mc.Player} player
 */
export function getHost(): mc.Player {
    return [...mc.world.getAllPlayers()].find(t => t.id === '-4294967295' || console.warn(t.id))
}