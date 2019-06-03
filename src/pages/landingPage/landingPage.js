import React, {useEffect, useState} from 'react'
import './landingPage.css'
import {loadScript} from '../../utils/imports'

function LandingPage() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    async function loadThirdPartyLibs() {
      await loadScript('/assets/js/jquery.min.js')
      await loadScript('/assets/js/browser.min.js')
      await loadScript('/assets/js/breakpoints.min.js')
      await require('./legacyCode')
      setIsReady(true)
    }

    loadThirdPartyLibs()
  }, [])

  if (!isReady) {
    return <div>Loading...</div>
  }

  return (
    <div id="wrapper">
      <header id="header">
        <div className="inner">
          <a href="index.html" className="logo">
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
            <article className="style1">
              <span className="image">
                <img src="/images/pic01.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Magna</h2>
                <div className="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
            <article className="style2">
              <span className="image">
                <img src="/images/pic02.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Lorem</h2>
                <div className="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
            <article className="style3">
              <span className="image">
                <img src="/images/pic03.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Feugiat</h2>
                <div className="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
            <article className="style4">
              <span className="image">
                <img src="/images/pic04.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Tempus</h2>
                <div className="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
            <article className="style5">
              <span className="image">
                <img src="/images/pic05.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Aliquam</h2>
                <div className="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
            <article className="style6">
              <span className="image">
                <img src="/images/pic06.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Veroeros</h2>
                <div className="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
            <article className="style2">
              <span className="image">
                <img src="/images/pic07.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Ipsum</h2>
                <div className="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
            <article className="style3">
              <span className="image">
                <img src="/images/pic08.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Dolor</h2>
                <div className="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
            <article className="style1">
              <span className="image">
                <img src="/images/pic09.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Nullam</h2>
                <div className="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
            <article className="style5">
              <span className="image">
                <img src="/images/pic10.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Ultricies</h2>
                <div className="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
            <article className="style6">
              <span className="image">
                <img src="/images/pic11.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Dictum</h2>
                <div className="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
            <article className="style4">
              <span className="image">
                <img src="/images/pic12.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Pretium</h2>
                <div className="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
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
