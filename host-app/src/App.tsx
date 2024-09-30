
import React, { Suspense, useState } from 'react';
import Dashboard from './pages/dashboard';

import clsx from 'clsx';
const RemoteApp = React.lazy(() => import('remoteApp/App'));

type linksType = 'dashboard' | 'mico-app1' | 'micro-app2'

function App()
{
  const [currentMicroApp, setCurrentMicroApp] = useState<linksType>('dashboard')

  return (
    <div className='w-screen h-screen overflow-hidden'>

      <div className='flex'>
        <div className='w-2/12 h-screen bg-orange-300 flex flex-col py-10'>
          <h1 className='text-3xl text-blue-950 font-extrabold px-5 pb-10'>Host App</h1>
          <button className={clsx('text-blue-950 hover:bg-orange-400 font-semibold text-lg cursor-pointer py-3 text-start px-5', currentMicroApp === 'dashboard' && 'bg-orange-400')} onClick={() => setCurrentMicroApp('dashboard')}>Dashboard</button>
          <button className={clsx('text-blue-950 hover:bg-orange-400 font-semibold text-lg cursor-pointer py-3 text-start px-5', currentMicroApp === 'mico-app1' && 'bg-orange-400')} onClick={() => setCurrentMicroApp('mico-app1')}>Remote app 1</button>
          <button className={clsx('text-blue-950 hover:bg-orange-400 font-semibold text-lg cursor-pointer py-3 text-start px-5', currentMicroApp === 'micro-app2' && 'bg-orange-400')} onClick={() => setCurrentMicroApp('micro-app2')}>Remote app 2</button>
        </div>
        {currentMicroApp === 'mico-app1' && (

          <div className='w-11/12 h-screen'>
            <Suspense fallback={<div>Loading...</div>}>
              <RemoteApp />
            </Suspense>
          </div>
        )}
        {currentMicroApp === 'dashboard' && (

          <div className='w-11/12 h-screen'>
            <Dashboard />
          </div>
        )}
        {currentMicroApp === 'micro-app2' && (

          <div className='w-11/12 h-screen'>
            <h1>MICRO APP 2</h1>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
