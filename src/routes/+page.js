import { get_users } from './get_users.js';

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
	const { users } = await get_users(event);
	return { users };
}