import { writable } from 'svelte/store';


export const selectedTheme = writable('halloween');

export const searchQuery = writable('');