import * as mc from '@minecraft/server';
mc.world.events.beforeChat.subscribe((eventData) => {
    const player = eventData.sender;
    const rank = player.getTags().filter(t => t.startsWith('rank:')).map(p => `[${p.split(':')[1]}§r]`).join('');
    const msg = eventData.message;
    eventData.cancel = true;
    if (rank[0])
        player.tell(`${rank}§7${player.name}:§r ${msg}`);
    else
        player.tell(`[§7MEMBER§r]§7${player.name}:§r ${msg}`);
});
