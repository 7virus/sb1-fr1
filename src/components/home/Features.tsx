import React from 'react';
import { 
  Cpu, Shield, Gauge, Clock, HeartPulse, Users,
  Server, Globe, Bot, Settings, BarChart, MessageSquare
} from 'lucide-react';

const features = [
  {
    icon: <Cpu className="h-6 w-6" />,
    title: 'High Performance',
    description: 'Enterprise-grade hardware for optimal performance'
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'DDoS Protection',
    description: 'Advanced protection against cyber threats'
  },
  {
    icon: <Gauge className="h-6 w-6" />,
    title: 'Low Latency',
    description: 'Global network of data centers'
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: '99.9% Uptime',
    description: 'Reliable service you can count on'
  },
  {
    icon: <HeartPulse className="h-6 w-6" />,
    title: '24/7 Support',
    description: 'Expert assistance whenever you need it'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Active Community',
    description: 'Join our growing community of users'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose HostPro?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide enterprise-grade hosting solutions with unmatched performance,
            security, and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-indigo-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}