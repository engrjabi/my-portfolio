import React from 'react'
import './landingPage.css'
import useFetch from 'fetch-suspense'
import {useLoadThirdParty} from '../../utils/useLoadThirdParty'
import _get from 'lodash/get'
import _padStart from 'lodash/padStart'

const thirdPartyLibs = ['/assets/js/jquery.min.js', '/assets/js/browser.min.js', '/assets/js/breakpoints.min.js']
const mediumUsername = process.env.REACT_APP_MEDIUM_USERNAME

function LandingPage() {
  const [isReady] = useLoadThirdParty(thirdPartyLibs)
  const mediumFeed = useFetch(`https://medium-rss.engrjabi.win/feed/${mediumUsername}`, {method: 'GET'})
  const articles = _get(mediumFeed, 'response.items', []).filter(item => item['contentEncoded'])

  if (isReady) {
    require('./legacyCode')
  }

  return (
    <div id="wrapper">
      <header id="header">
        <div className="inner">
          <a href="/" className="logo">
            <span className="symbol"><img src="/images/logo.svg" alt="" /></span><span
            className="title">Phantom</span>
          </a>

          <nav>
            <ul>
              <li><a href="#menu">Menu</a></li>
            </ul>
          </nav>

        </div>
      </header>

      <nav id="menu">
        <h2>Menu</h2>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="generic.html">Ipsum veroeros</a></li>
          <li><a href="generic.html">Tempus etiam</a></li>
          <li><a href="generic.html">Consequat dolor</a></li>
          <li><a href="elements.html">Elements</a></li>
        </ul>
      </nav>

      <div id="main">
        <div className="inner">
          <header>
            <h1>This is Phantom, a free, fully responsive site<br />
              template designed by <a href="http://html5up.net">HTML5 UP</a>.</h1>
            <p>Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu
              elementum ipsum arcu vivamus quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem
              ipsum dolor sit amet nullam dolore.</p>
          </header>
          <section className="tiles">
            {articles.map((article, index) => {
              return (
                <article
                  key={index}
                  className={`style${(index % 6) + 1}`}
                >
                  <span className="image">
                    <img src={`/images/pic${_padStart((index % 12) + 1, 2, '0')}.jpg`} alt="" />
                  </span>
                  <a href="#">
                    <h2>{article.obj.title}</h2>
                    <div className="content">
                      <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                    </div>
                  </a>
                </article>
              )
            })}
          </section>
        </div>
      </div>

      <footer id="footer">
        <div className="inner">
          <section>
            <h2>Get in touch</h2>
            <form method="post" action="#">
              <div className="fields">
                <div className="field half">
                  <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div className="field half">
                  <input type="email" name="email" id="email" placeholder="Email" />
                </div>
                <div className="field">
                  <textarea name="message" id="message" placeholder="Message"></textarea>
                </div>
              </div>
              <ul className="actions">
                <li><input type="submit" value="Send" className="primary" /></li>
              </ul>
            </form>
          </section>
          <section>
            <h2>Follow</h2>
            <ul className="icons">
              <li><a href="#" className="icon style2 fa-twitter"><span className="label">Twitter</span></a></li>
              <li><a href="#" className="icon style2 fa-facebook"><span className="label">Facebook</span></a></li>
              <li><a href="#" className="icon style2 fa-instagram"><span className="label">Instagram</span></a></li>
              <li><a href="#" className="icon style2 fa-dribbble"><span className="label">Dribbble</span></a></li>
              <li><a href="#" className="icon style2 fa-github"><span className="label">GitHub</span></a></li>
              <li><a href="#" className="icon style2 fa-500px"><span className="label">500px</span></a></li>
              <li><a href="#" className="icon style2 fa-phone"><span className="label">Phone</span></a></li>
              <li><a href="#" className="icon style2 fa-envelope-o"><span className="label">Email</span></a></li>
            </ul>
          </section>
          <ul className="copyright">
            <li>&copy; Untitled. All rights reserved</li>
            <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
