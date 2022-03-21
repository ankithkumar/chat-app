
const set = (key, value) => {
    localStorage.setItem(key, value);
}

const get = (key) => {
    return localStorage.getItem(key);
}

const store = {
    get,
    set,
}

export default store;