import React from 'react';
import { Server, Shield, Zap } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="container mx-auto px-4 py-24 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Professional Hosting Solutions for Your Digital World
          </h1>
          <p className="text-xl mb-8 text-indigo-100">
            Experience lightning-fast servers, 99.9% uptime, and world-class support.
            Deploy your games, websites, and bots with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/pricing" className="btn-white">
              View Pricing
            </a>
            <a href="/game-hosting" className="btn-outline-white">
              Explore Services
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: <Server className="h-8 w-8" />,
                title: 'Game Servers',
                description: 'Low-latency hosting for popular games'
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: 'Web Hosting',
                description: 'Secure and scalable web solutions'
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: 'Bot Hosting',
                description: '24/7 reliable bot hosting'
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-lg bg-white/10 backdrop-blur-lg">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-indigo-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}