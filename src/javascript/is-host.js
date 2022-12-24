/**
 * @param {mc.Player} player
 * @returns {boolean} true or false
 */
export function isHost(player) {
    return player.id === '-4294967295';
}
