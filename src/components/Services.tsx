import React from 'react';
import { CreditCard, ShoppingBag, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-secondary overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            LADDU provides three core services designed to make your life easier and more affordable.
          </p>
        </div>
        
        <div className="flex space-x-6 overflow-x-auto pb-8 scrollbar-hide">
          <Link to="/micro-loans" className="flex-none w-[400px] bg-secondary-dark rounded-xl p-8 border border-gray-800 hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <CreditCard className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Micro Loans</h3>
            <p className="text-gray-400 mb-6">
              Quick access to small loans starting from ₹0. Get approved in minutes with minimal documentation.
            </p>
          </Link>
          
          <Link to="/grocery-delivery" className="flex-none w-[400px] bg-secondary-dark rounded-xl p-8 border border-gray-800 hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <ShoppingBag className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Grocery Delivery</h3>
            <p className="text-gray-400 mb-6">
              Fresh groceries delivered to your doorstep within hours. Quality products at great prices.
            </p>
          </Link>
          
          <Link to="/digital-subscriptions" className="flex-none w-[400px] bg-secondary-dark rounded-xl p-8 border border-gray-800 hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Music className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Digital Subscriptions</h3>
            <p className="text-gray-400 mb-6">
              Access premium digital services at discounted rates. Bundle your favorite platforms and save more.
            </p>
          </Link>
        </div>

        <div className="mt-16 bg-secondary-dark rounded-xl p-8 border border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-6">Latest Announcements</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <p className="text-primary font-semibold">New Feature Launch</p>
              <p className="text-gray-400">Zero minimum amount for micro loans now available!</p>
              <p className="text-sm text-gray-500">2 hours ago</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <p className="text-primary font-semibold">Special Offer</p>
              <p className="text-gray-400">Get 20% off on your first grocery delivery order</p>
              <p className="text-sm text-gray-500">1 day ago</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <p className="text-primary font-semibold">Service Update</p>
              <p className="text-gray-400">Extended delivery hours now available in select areas</p>
              <p className="text-sm text-gray-500">2 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;