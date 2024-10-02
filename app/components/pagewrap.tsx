'use client';
import './../styles/animation.css'
import './../styles/layout.css';
import { usePathname } from 'next/navigation';
import Header from './header';
import Footer from './footer';

interface NavHandler {
  navHandler: ()=>void;
}

export default function PageWrap(
  {
    children,
    navHandler,
    menuVisible,
  }: {
    children: React.ReactNode,
    navHandler: Function,
    menuVisible: boolean,
}) {
  return (
    <div className={ `base-layer bg-background ` + getTheme()}>
        <div>
            <Header navHandler={navHandler} menuVisible={menuVisible}/>
            { children }
            <Footer />
          </div>
    </div>
  );
}



export function getTheme() {
    switch(usePathname()) {
        case "/contact":
        return 'contact-theme';
        case "/about":
        return 'contact-theme';
        case "/blog":
        return 'contact-theme';
        case "/projects":
        return 'contact-theme';
        default:
        return 'home-theme';
    }
}
