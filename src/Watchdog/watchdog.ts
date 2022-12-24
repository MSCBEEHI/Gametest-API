import { system } from '@minecraft/server'
system.events.beforeWatchdogTerminate.subscribe(eventData => eventData.cancel = true)