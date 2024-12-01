import React from 'react';
import { ExternalLink } from 'lucide-react';
import TokenDescription from './TokenDescription';
import SocialButtons from './SocialButtons';
import ContractAddress from './ContractAddress';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-b from-pink-500 to-purple-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-white/20 shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src="https://i.ibb.co/QK8thYr/IMG-20241201-WA0000.jpg"
              alt="CatPOP Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            CatPOP Token
          </h1>
          <h2 className="text-2xl text-yellow-300 font-semibold mb-6">
            The New Star of Solana is Shining!
          </h2>
          <TokenDescription />
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <a
              href="https://dexscreener.com/solana/3ycda7bavdjgn9tbfkgemwbuikptxvdrssygdaaxqa4n"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition flex items-center gap-2"
            >
              Chart <ExternalLink size={18} />
            </a>
            <a
              href="https://raydium.io/swap/?inputMint=6Kr7fh3ftdvPG9ByqSzUuuNMMmkVXb8dtN5UF4Tfpump&outputMint=sol"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-300 transition"
            >
              Buy Now
            </a>
          </div>
          <ContractAddress />
          <SocialButtons />
        </div>
      </div>
    </section>
  );
};

export default Hero;
