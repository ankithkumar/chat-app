const url = 'http://localhost/';

export const apiResponse = (body, endpoint) => {
    const resOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }
    return fetch(endpoint, resOptions).then((res) => res.json()).catch(err => err);
}

export const userListApi = (search) => {
    let urlStr = `${url}userlist`;
    if (search) {
        urlStr = `${urlStr}?search=${search}`;
    }
    return fetch(urlStr).then((res) => res.json()).catch(err => err);
}