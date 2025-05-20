import generateRandomString from './generateRandomString';
import sha256 from './sha256';
import base64encode from './base64encode';
async function generateToken(){
    const codeVerifier  = generateRandomString(64);
    const hashed = await sha256(codeVerifier)
    const codeChallenge = base64encode(hashed);
    const scope = 'user-read-private user-read-email';
    window.localStorage.setItem('code_verifier', codeVerifier);
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const redirectUri = 'http://127.0.0.1:5173/callback';
    const authUrl = new URL("https://accounts.spotify.com/authorize");
    const params = {
        response_type: 'code',
        client_id: clientId,
        scope,
        code_challenge_method: 'S256',
        code_challenge: codeChallenge,
        redirect_uri: redirectUri,
    }
    authUrl.search = new URLSearchParams(params).toString();
    window.location.href = authUrl.toString();
}
export default generateToken;