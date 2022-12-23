/**
 * @param {mc.Player} player
 * @returns {boolean} true or false
 */
export function isHost(player) {
    const host = player.id === '-4294967295' || console.warn(player.id);
    return;
}
