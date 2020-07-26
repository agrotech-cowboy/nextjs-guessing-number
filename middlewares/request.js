export const request = (options) => {

    if (!options.headers) {

        options.headers = new Headers({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        });
    }

    options
        .headers
        .append('Authorization', `Bearer ${localStorage.getItem('token')}`);

    return new Promise((resolve, reject) => {

        fetch(options.url, options)
            .then(response => {

                if (response.ok) {

                    response
                        .json()
                        .then(data => resolve(data));
                } else {

                    response
                        .json()
                        .then(data => reject(data));
                }
            })
    })
};
