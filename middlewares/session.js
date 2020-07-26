import { request } from './request';

const base = 'session';

async function login() {

    const session = await request({
        url: `/api/${base}`,
        method: 'GET'
    });

    localStorage.setItem('token', session.token);
}

export {
    login
}