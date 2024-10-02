import { Ultra } from 'next/font/google';
import './../globals.css';
import './../styles/layout.css';
const ultra = Ultra({weight: "400", subsets: ["latin"]})
export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between text-left contact-theme bg-background">
      <div className={ultra.className}>
       <div className= "panels">
          <p className="text-cream main-panel">
            about me.
          </p>
          <p className="text-cream  panel">
            currently funemployed
          </p>
        </div>
      </div>
    </main>
  );
}
