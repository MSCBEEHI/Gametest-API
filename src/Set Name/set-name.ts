/**
 * @param typeid
 * @returns id to name
 */
function setName(typeid: string) {
    const n = typeid.replace(typeid.slice(0, typeid.split(':')[0].length + 1), '')
    const nf = n.charAt(0).toUpperCase() + n.replace(n.charAt(0), '')
    const _nf = nf.split('_')[0] + nf.replace(nf.split('_')[0], '').split('_').map(c => c.charAt(0).toUpperCase() + c.replace(c.charAt(0), '')).join(' ')
    return nf.includes('_') ? _nf : nf
}