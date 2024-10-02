import './../styles/animation.css'
import './../styles/layout.css'
import * as React from 'react'

interface NavHandler {
  navHandler: Function;
}
export default function Header({
  navHandler,
  menuVisible,
}:{
  navHandler: Function,
  menuVisible: boolean,
}) {
  return (
    <header className="header-box">
      <div className="nav-button">
        <Menu navHandler={navHandler} menuVisible={menuVisible}/>
      </div>
      <div className="nav-button letter-space">
        <Contact/>
      </div>
    </header>
  );
}

function Menu({
  navHandler,
  menuVisible,
}:{
  navHandler: Function,
  menuVisible: boolean,
}) {
  return (
    <div className={"menu-wrap"}>
      <button className={"font-medium main-nav-button menu-button letter-space " + (menuVisible ? 'menu-button-open' : '')} onClick={() => {navHandler()}}>
        MENU
      </button>
      <button className={"font-medium main-nav-button close-button letter-space " + (menuVisible ? 'close-button-open' : '')} onClick={() => {navHandler()}}>
        CLOSE
      </button>
    </div>
  );
}

function Contact() {
  return (
    <button className= "font-medium main-nav-button contact-button">
    <a href="/contact">
      CONTACT ME
    </a>
  </button>
  );
}
