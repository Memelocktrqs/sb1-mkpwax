import React from 'react';

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-16 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-pink-600">Roadmap</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="relative pl-8 border-l-2 border-pink-300">
              <div className="absolute w-4 h-4 bg-pink-500 rounded-full -left-[9px] top-0"></div>
              <h3 className="text-xl font-semibold mb-2 text-pink-600">Phase 1: Launch</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Website Launch</li>
                <li>• Community Building</li>
                <li>• Token Launch on DEX</li>
                <li>• Marketing Campaign</li>
              </ul>
            </div>
            
            <div className="relative pl-8 border-l-2 border-pink-300">
              <div className="absolute w-4 h-4 bg-pink-500 rounded-full -left-[9px] top-0"></div>
              <h3 className="text-xl font-semibold mb-2 text-pink-600">Phase 2: Growth</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• CEX Listings</li>
                <li>• Partnership Announcements</li>
                <li>• Community Events</li>
                <li>• NFT Collection Launch</li>
              </ul>
            </div>
            
            <div className="relative pl-8 border-l-2 border-pink-300">
              <div className="absolute w-4 h-4 bg-pink-500 rounded-full -left-[9px] top-0"></div>
              <h3 className="text-xl font-semibold mb-2 text-pink-600">Phase 3: Expansion</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Mobile App Development</li>
                <li>• Cross-chain Integration</li>
                <li>• DAO Implementation</li>
                <li>• Global Marketing Push</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;