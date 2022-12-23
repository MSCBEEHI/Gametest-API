/**
 * @param typeid
 * @returns id to name
 */
export function setName(typeid: string) {
    const n = typeid.replace(typeid.slice(0, typeid.split(':')[0].length + 1), '')
    const nf = n.charAt(0).toUpperCase() + n.replace(n.charAt(0), '')
    return nf.includes('_') ? nf.replaceAll('_', ' ') : nf
}