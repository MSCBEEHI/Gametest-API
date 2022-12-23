import * as mc from '@minecraft/server';
/**
 * @param {string} objective name
 * @param {mc.Player} player
 * @returns {number} player score of objective
 */
export function getScore(objective, player) {
    try {
        player.runCommandAsync(`scoreboard player add @s ${objective} 0`);
        return mc.world.scoreboard.getObjective(objective).getScore(player.scoreboard);
    }
    catch (_a) {
        console.warn(`The object named ${objective} was not found.`);
    }
}
