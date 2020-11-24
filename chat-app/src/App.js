import React, {useState, useEffect} from 'react';
import './App.css';
import Login from './Login';
import Chat from './Chat';
import db, {auth} from './firebase'

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        setUser({
          uid: authUser?.uid,
          photo: authUser?.photoURL,
          email: authUser?.email,
          name: authUser?.displayName
        })
      }
      else{
        setUser(null)
        console.log(user)
      }
    })
  }, [setUser])
  return (
    <div className="app">
      { user ? 
        <>
          <Chat user={user}/>
        </> :
        <>
          <Login/>
        </>
      }
    </div>
  );
}

export default App;
