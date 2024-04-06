import NewUser from './NewUser'
import { useState } from 'react'


const HomePage = () => {
  let loggedIn = false
  if (loggedIn) {
    return 'testing';
  } else {
    return (
      <NewUser />
    ); 
  }
  
};

export default HomePage;