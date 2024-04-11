import * as api from '$lib/api.js';

export async function get_users({ url, locals }, type) {
    const users = await api.get('user/list');
    return {users}
}
