/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
   *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
 * ------------------------------------------------------------------------
 * cores for the nab 2024 app
 */
import { readable, writable, type Writable } from 'svelte/store';
import type { MrxSelectedMediaSource, MrxReqRes, MrxEvent, MrxExploreTab } from '$lib/mrx-demo-defs'
import { nilSource } from '$lib/mrx-demo-defs'
import cfgSource from '$lib/cfg/mrx-demo-config'
import sponsorSource from '$lib/cfg/mrx-demo-sponsors'

// the most recent source that was clicked in the navigation panel
export const source: Writable<MrxSelectedMediaSource> = writable(nilSource);

// the (short) list of visible events in a rundown
export const rundownEvents: Writable<MrxEvent[]> = writable([])

// the source that the Control pane decides is the one to be viewed
export const rundownSource: Writable<MrxSelectedMediaSource> = writable(nilSource)

// the tabs that are displayed in the Explore pane
export const exploreTabs: Writable<MrxExploreTab[]> = writable([])
// 1 based active Tab e.g. last tab is index exploreTabs.length. 0 = no== tabs
export const activeExploreTabNumber: Writable<number> = writable(0)

//remember the req/res pairs produced during a demo
const nilReqRes: MrxReqRes[] = []
export const reqRes = writable(nilReqRes)

// time of day for use in real time / rundown demos
export const timeOfDay = writable(new Date())

// the demo configuration data
export const cfgData = readable(cfgSource)

// environment specific configs for dev / production
import { dev } from '$app/environment';
const envSource = (dev) ? cfgSource.environment.development : cfgSource.environment.production
export const cfgEnv = readable(envSource)

// the sponsor data
export const sponsors = readable(sponsorSource)
