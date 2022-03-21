const url = 'http://localhost/';

export const postApi = (endpoint, body) => {
    const resOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }
    return fetch(`${url}${endpoint}`, resOptions).then((res) => res.json()).catch(err => err);
}

export const userListApi = (search) => {
    let urlStr = `${url}userlist`;
    if (search) {
        urlStr = `${urlStr}?search=${search}`;
    }
    return fetch(urlStr).then((res) => res.json()).catch(err => err);
}

export const chatBetweenList = (sender, receiver) => {
    let urlStr = `${url}getchats?sender=${sender}&receiver=${receiver}`;
    // http://localhost/getchats?sender=ankith&receiver=jyothi
    return fetch(urlStr).then((res) => res.json()).catch(err => err);
}