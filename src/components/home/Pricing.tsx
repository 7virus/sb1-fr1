import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 9.99,
    features: [
      '2GB RAM',
      '10GB SSD Storage',
      'Basic DDoS Protection',
      'Email Support',
      '99.9% Uptime'
    ]
  },
  {
    name: 'Professional',
    price: 29.99,
    popular: true,
    features: [
      '8GB RAM',
      '50GB SSD Storage',
      'Advanced DDoS Protection',
      'Priority Support',
      '99.9% Uptime',
      'Free Domain'
    ]
  },
  {
    name: 'Enterprise',
    price: 79.99,
    features: [
      '32GB RAM',
      '200GB SSD Storage',
      'Enterprise DDoS Protection',
      '24/7 Phone Support',
      '99.99% Uptime',
      'Free Domain',
      'Dedicated IP'
    ]
  }
];

export function Pricing() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include our core features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg ${
                plan.popular
                  ? 'bg-indigo-600 text-white transform scale-105'
                  : 'bg-white'
              } p-8 shadow-lg relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-semibold px-3 py-1 rounded-tr-lg rounded-bl-lg">
                  POPULAR
                </div>
              )}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-sm">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2 px-4 rounded-lg transition-colors ${
                    plan.popular
                      ? 'bg-white text-indigo-600 hover:bg-gray-100'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}