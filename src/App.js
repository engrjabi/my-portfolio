import React, {Suspense} from 'react'
import LandingPage from './pages/landingPage/landingPage'

// FIXME: Temporary while we react-router is not yet inplace

function App() {
  return (
    <Suspense fallback="Loading...">
      <LandingPage />
    </Suspense>)
}

export default App
