import { world } from '@minecraft/server';
//prefix command example: !spawn
const prefix = '*';
class custom {
    constructor(keyword, command = [], description) {
        this.k = prefix + keyword;
        this.c = command;
        this.d = `§7<${description}>§r`;
    }
}
/**
 * example:
 * new custom('apple', ['give @s apple'], 'use to get apple')
 * new custom('spawn', ['tp @s 0 10 0'], 'use go to spawn')
 */
const data = [
//new custom()
];
world.events.beforeChat.subscribe((eventData) => {
    const player = eventData.sender;
    const msg = eventData.message;
    if (msg.startsWith(prefix)) {
        eventData.cancel = true;
        for (const t of data) {
            if (msg.startsWith(t.k)) {
                t.c.map(r => player.runCommandAsync(r));
                break;
            }
            else if (msg.startsWith(`${prefix}help`)) {
                const list = [`All existing commands ${data.length}\n`];
                data.map(p => list.push(`${p.k} ${p.d}\n`));
                player.tell(list.join(''));
                break;
            }
        }
    }
});
