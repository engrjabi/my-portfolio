import React, {Suspense} from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'

function BaseLayout({children}) {
  return (
    <div id="wrapper">
      <Header />
      <div id="main">
        <div className="inner">
          <Suspense fallback="Loading...">
            {children}
          </Suspense>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BaseLayout
