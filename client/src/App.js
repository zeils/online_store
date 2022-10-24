import React, { useContext, useEffect, useState } from 'react'
import { NavBar } from "./components/NavBar"
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { Context } from '.';
import { check } from './http/userApi';
import { observer } from 'mobx-react-lite';
import { Spinner } from 'react-bootstrap';



const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect( ()=> {


    
    check().then(data => {
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