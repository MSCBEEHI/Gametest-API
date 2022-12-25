import * as mc from '@minecraft/server';
//tag @s add rank:<name>
mc.world.events.beforeChat.subscribe((eventData) => {
    const player = eventData.sender;
    const rank = player.getTags().filter(t => t.startsWith('rank:')).map(p => `[${p.split(':')[1]}§r]`).join('');
    const msg = eventData.message;
    eventData.cancel = true;
    if (rank[0])
        mc.world.say(`${rank}§7${player.name}:§r ${msg}`);
    else
        mc.world.say(`[§7MEMBER§r]§7${player.name}:§r ${msg}`);
});
