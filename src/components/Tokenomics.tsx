import React from 'react';
import { PieChart, Wallet, Zap } from 'lucide-react';

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-pink-600">Tokenomics</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-pink-50 p-6 rounded-lg text-center">
            <PieChart className="w-12 h-12 mx-auto mb-4 text-pink-600" />
            <h3 className="text-xl font-semibold mb-2">Total Supply</h3>
            <p className="text-gray-600">1,000,000,000 CATPOP</p>
          </div>
          
          <div className="bg-pink-50 p-6 rounded-lg text-center">
            <Wallet className="w-12 h-12 mx-auto mb-4 text-pink-600" />
            <h3 className="text-xl font-semibold mb-2">Buy Tax</h3>
            <p className="text-gray-600">0%</p>
          </div>
          
          <div className="bg-pink-50 p-6 rounded-lg text-center">
            <Zap className="w-12 h-12 mx-auto mb-4 text-pink-600" />
            <h3 className="text-xl font-semibold mb-2">Sell Tax</h3>
            <p className="text-gray-600">0%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;