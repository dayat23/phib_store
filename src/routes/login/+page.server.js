import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	if (locals.user) throw redirect(307, '/');
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();

		const form = {
			email: data.get('email'),
			password: data.get('password')
		}
		const body = await api.post('auth/login', form);
        console.log('===== response login', body);
        console.log('===== response login errors', body.errors);
		if (body.errors) {
			return fail(401, body);
		}

		const value = btoa(JSON.stringify(body));
		cookies.set('jwt', value, { path: '/' });

		throw redirect(307, '/');
	}
};
