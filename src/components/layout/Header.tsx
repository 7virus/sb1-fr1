import React from 'react';
import { Menu, X, Server, Globe, Bot } from 'lucide-react';
import { Link } from './Link';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-indigo-600">
            <Server className="h-6 w-6" />
            <span className="font-bold text-xl">HostPro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/game-hosting">Game Servers</Link>
            <Link href="/web-hosting">Web Hosting</Link>
            <Link href="/bot-hosting">Bot Hosting</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/support">Support</Link>
            <Link href="/dashboard" className="btn-primary">Dashboard</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100">
            <div className="flex flex-col space-y-4 p-4">
              <Link href="/game-hosting">Game Servers</Link>
              <Link href="/web-hosting">Web Hosting</Link>
              <Link href="/bot-hosting">Bot Hosting</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/support">Support</Link>
              <Link href="/dashboard" className="btn-primary text-center">Dashboard</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}