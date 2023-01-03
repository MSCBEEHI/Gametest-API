/**
    * @param {string} typeid
    * @returns {string} id to name
    */
export function setName(typeid) {
    return typeid.split(":")[1].split("_").map(m => m[0].toUpperCase() + m.slice(1)).join(" ");
}
