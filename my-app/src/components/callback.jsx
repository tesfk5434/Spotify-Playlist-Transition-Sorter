import { useEffect } from "react";
import getToken from "../utils/getToken";

function Callback(){
    useEffect(()=>{
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        if (code){
            getToken(code).then(()=>{
                window.location.replace('../app.jsx')
            })
        }
    })
}
export default Callback;