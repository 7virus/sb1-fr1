import React from 'react';
import { Server, Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from './Link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 text-white mb-4">
              <Server className="h-6 w-6" />
              <span className="font-bold text-xl">HostPro</span>
            </div>
            <p className="text-sm">
              Professional hosting solutions for your digital world. Experience reliability,
              performance, and exceptional support.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/game-hosting">Game Servers</Link></li>
              <li><Link href="/web-hosting">Web Hosting</Link></li>
              <li><Link href="/bot-hosting">Bot Hosting</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/refund">Refund Policy</Link></li>
              <li><Link href="/gdpr">GDPR</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} HostPro. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://github.com" className="hover:text-white">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com" className="hover:text-white">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com" className="hover:text-white">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}