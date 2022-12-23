import * as mc from '@minecraft/server';
/**
 * @param {mc.Player} player
 * @returns {number} player experience level
 */
export function getLevel(player) {
    let i = 0;
    while (true) {
        if ([...mc.world.getPlayers({
                minLevel: i, maxLevel: i
            })].find(t => t.name === player.name))
            break;
        i++;
    }
    return i;
}
