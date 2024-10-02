import { Ultra } from 'next/font/google';
import './../globals.css';
import './../styles/layout.css';
const ultra = Ultra({weight: "400", subsets: ["latin"]})
export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between text-left contact-theme bg-background">
      <div className={ultra.className}>
       <div className= "panels">
          <p className="text-cream main-panel">
            blog
          </p>
          <p className="text-cream  panel">
            coming soon (?)
          </p>
        </div>
      </div>
    </main>
  );
}
