import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ parent }) {
	const { user } = await parent();
	if (user) throw redirect(307, '/');
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();

		const user = {
			email: data.get('email'),
			first_name: data.get('first_name'),
			last_name: data.get('last_name'),
			password: data.get('password')
		};

		const body = await api.post('auth/register', user);
        console.log('===== response register', body);
        console.log('===== response register errors', body.errors);
		if (body.errors) {
			return fail(401, body);
		}

		throw redirect(307, '/');
	}
};
