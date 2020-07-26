import { request } from './request';

const base = 'session';

async function login() {

    const session = await request({
        url: `http://localhost:1000/api/${base}`,
        method: 'GET'
    });

    localStorage.setItem('token', session.token);
}

export {
    login
}