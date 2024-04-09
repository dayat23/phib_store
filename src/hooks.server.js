/** @type {import('@sveltejs/kit').Handle} */
export function handle({ event, resolve }) {
	const jwt = event.cookies.get('jwt');
	try {
		event.locals.user = jwt ? JSON.parse(atob(jwt)) : null;
	} catch (error) {
		event.locals.user = null;
	}

	return resolve(event);
}
