import { request } from './request';

const base = 'guess';

function guess(guess) {

    return request({
        url: `http://localhost:1000/api/${base}`,
        method: 'POST',
        body: JSON.stringify({ guess })
    });
}

export {
    guess
}