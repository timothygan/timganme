import './globals.css';
import './styles/layout.css';
import type { Metadata } from 'next';
import LockScroll from './components/lockscroll';



export const metadata: Metadata = {
  title: "Tim Gan",
  description: "all things tim",
};

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
      <LockScroll>
          { children }
      </LockScroll>
  );
}
