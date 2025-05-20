import { useEffect } from "react";
import getToken from "../utils/getToken";

function Callback(){
    useEffect(()=>{
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        console.log("Callback received code:", code);

        if (code){
            getToken(code).then(()=>{
                window.location.replace('/dashboard');
            })
        }
        else {
            console.log("No code found. Redirecting to login.");
            window.location.replace("/");
          }
    },[])
    return (<p>Logging You in...</p>)
}
export default Callback;