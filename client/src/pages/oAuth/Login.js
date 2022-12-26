import {GoogleLogin} from 'react-google-login'

const clientId = "14931489561-1qihpgqdu487oakbijiuu1rkch3hskdg.apps.googleusercontent.com"





function Login() {

    const onSuccess = (res) => {
        console.log("успешная авторизация" + res.profileObj)
    }

    const onFailure= (res) => {
        console.log("не успешная авторизация" + res)
    }


    return(
        <div id="signInButton">
            <GoogleLogin
                clientId = {clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            
            
            />



        </div>
    )


}

export default Login;