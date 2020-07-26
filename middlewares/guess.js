import { request } from './request';

const base = 'guess';

function guess(guess) {

    return request({
        url: `/api/${base}`,
        method: 'POST',
        body: JSON.stringify({ guess })
    });
}

export {
    guess
}