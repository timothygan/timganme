import { Ultra } from 'next/font/google';
import './../globals.css';
import './../styles/layout.css';
const ultra = Ultra({weight: "400", subsets: ["latin"]})
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between text-left contact-theme bg-background">
      <div className={ultra.className}>
       <div className= "panels">
          <p className="text-cream main-panel">
            contact me.
          </p>
          <p className="text-cream  panel">
            email me at timothygan@utexas.edu
          </p>
        </div>
      </div>
    </main>
  );
}
