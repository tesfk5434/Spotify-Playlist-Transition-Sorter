export const isTokenExpired = () => {
    const expiresAt = localStorage.getItem('expires_at');
    if (!expiresAt) return true;
    return Date.now() > parseInt(expiresAt);
}
export default isTokenExpired;