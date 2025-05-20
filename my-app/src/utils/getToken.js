const getToken = async code => {

    // stored in the previous step
    const codeVerifier = localStorage.getItem('code_verifier');
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const url = "https://accounts.spotify.com/api/token";
    const redirectUri = 'http://127.0.0.1:5173/callback';
    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: clientId,
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
        code_verifier: codeVerifier,
      }),
    }
  
    const body = await fetch(url, payload);
    const response = await body.json();
    const expiresAt = Date.now() + response.expires_in * 1000;
    localStorage.setItem('expires_at', expiresAt.toString());
    localStorage.setItem('access_token', response.access_token);
  }
  
export default getToken;