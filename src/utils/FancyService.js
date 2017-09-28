function getFromService(key) {
    const item = localStorage.getItem(key);
    const result = JSON.parse(item);
    return result;
}

function saveToService(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
}

export { getFromService, saveToService }