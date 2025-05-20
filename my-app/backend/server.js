import express from "express";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
const PORT = 3000;
app.use(cors());
dotenv.config();
app.get('/api/user', async (req, res)=>{
    if (isTokenExpired()){
        generateToken();
    }
    let accessToken = localStorage.access_token('access_token');
    res = fetchProfile(accessToken);
});
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});






