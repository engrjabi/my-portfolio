import React from "react";

function Header() {
  return (
    <>
      <header id="header">
        <div className="inner">
          <a href="/" className="logo">
            <span className="symbol">
              <img src="/images/logo.svg" alt="" />
            </span>
            <span className="title">Phantom</span>
          </a>

          <nav>
            <ul>
              <li>
                <a href="#menu">Menu</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <nav id="menu">
        <h2>Menu</h2>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Ipsum veroeros</a>
          </li>
          <li>
            <a href="/">Tempus etiam</a>
          </li>
          <li>
            <a href="/">Consequat dolor</a>
          </li>
          <li>
            <a href="/">Elements</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
