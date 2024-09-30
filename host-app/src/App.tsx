
import React from 'react';
import './App.css'

// const RemoteButton = React.lazy(() => import('remoteApp/Button'));
const RemoteApp = React.lazy(() => import('remoteApp/App'));

function App()
{

  return (
    <>
      <h1>Host App</h1>
      {/* <RemoteButton /> */}
      <RemoteApp />
    </>
  )
}

export default App
