'use client'

import { Ultra } from 'next/font/google'
import './styles/sheet.css';
import './globals.css';
import './styles/layout.css';
import { TypeAnimation } from 'react-type-animation';
const ultra = Ultra({weight: "400", subsets: ["latin"]})
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between text-left home-theme bg-background">
      <div className={ultra.className}>
        <div className= "panels">
          <div className="text-dark-maroon main-panel">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                'tim gan.',
                5000,
                'vball lover.',
                3000,
                'ice cream man.',
                3000,
                'napper.',
                3000,
                'jump addict.',
                3000,
              ]}
                speed={50}
                repeat={Infinity}
              />
          </div>
          <p className="text-dark-maroon panel">
            work in progress :{`)`}
          </p>
        </div>
      </div>
    </main>
  );
}
