import React, { useContext, useEffect, useState } from 'react'
import { NavBar } from "./components/NavBar"
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { Context } from '.';
import { check } from './http/userApi';
import { observer } from 'mobx-react-lite';
import { Spinner } from 'react-bootstrap';
import { GetSentOrganizationEmailsSortEnum } from 'mailslurp-client';




const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  function handleCallbackResponse(response){
    console.log("Encoded JWT" + response.credential)

  }

  useEffect( ()=> {
    /* global google */
    google.accounts.id.initialize({
      client_id: "14931489561-1qihpgqdu487oakbijiuu1rkch3hskdg.apps.googleusercontent.com",
      callback: handleCallbackResponse

    })
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}

    )


    
    check(user).then(data => {
      user.setUser(true)
      user.setIsAuth(true)
      console.log(user.setIsAuth)
    }).finally(()=> setLoading(false));



  }, [])

  if (loading) {
    return <Spinner animation={"grod"}/>
  }

  

  return (
    <BrowserRouter>

      
      <NavBar />
      <AppRouter />

      
    </BrowserRouter>

  );

});

export default App;

//npm start