/**
 * @param {mc.Player} player
 * @param {string} typeid
 * @returns {number} number of items
 */
export function getCountItem(player, typeid) {
    const list = [];
    const inventory = player.getComponent('minecraft:inventory').container;
    for (let i = 0; i < inventory.size; i++) {
        const item = inventory.getItem(i);
        if (!item)
            continue;
        if (item.typeId === typeid)
            list.push(item.amount);
        else
            continue;
    }
    return list.reduce((a, b) => a + b, 0) || 0;
}
