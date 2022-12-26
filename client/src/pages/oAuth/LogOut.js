import {GoogleLogin} from 'react-google-login'

const clientId = "14931489561-1qihpgqdu487oakbijiuu1rkch3hskdg.apps.googleusercontent.com"





function LogOut() {

    const onSuccess = (res) => {
        console.log("успешный выход")
    }



    return(
        <div id="signOutButton">
            <GoogleLogin
                clientId = {clientId}
                buttonText="LogOut"
                onLogoutSuccess={onSuccess}

            
            
            />



        </div>
    )


}

export default LogOut;