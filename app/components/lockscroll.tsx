'use client';
import { useState } from "react";
import PageWrap from "./pagewrap";
import Menu, { MenuItem } from "./menu";


export default function LockScroll({
  children, 
}: {
  children: React.ReactNode;
}) {
  const [menuVisible, setMenuVisible] = useState(false)
  const toggleMenuVisbility = () => {
    console.log(menuVisible)
    setMenuVisible(!menuVisible)
  }
  return (
    <html lang="en">
      <body className={menuVisible ? 'lock-scroll' : ''}>
        <PageWrap navHandler={toggleMenuVisbility} menuVisible={menuVisible}>
            <div className={"menu-flyout " + "bg-menuBackground " + (menuVisible ? 'is-open' : '')}>
                <div className={"main-menu-items"}>
                    <Menu>
                        <MenuItem>
                            <a href="/" className="letter-space">
                            HOME
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a href="/about" className="letter-space">
                            ABOUT ME
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a href="/blog" className="letter-space">
                            BLOG
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a href="/projects" className="letter-space">
                            PROJECTS
                            </a>
                        </MenuItem>
                    </Menu>
                </div>
            </div>
            { children }
        </PageWrap>
      </body>
    </html>
  );
}