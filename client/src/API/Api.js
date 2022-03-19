
export const apiResponse = (body, url) => {
    const resOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }
    return fetch(url, resOptions).then((res) => res.json()).catch(err => err);
}
