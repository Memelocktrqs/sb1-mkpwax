import React from 'react';
import { Menu, X, Twitter, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-pink-500/90 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">CatPOP</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-white hover:text-yellow-300 transition">About</a>
            <a href="#tokenomics" className="text-white hover:text-yellow-300 transition">Tokenomics</a>
            <a href="#roadmap" className="text-white hover:text-yellow-300 transition">Roadmap</a>
            <div className="flex space-x-4">
              <a href="https://twitter.com/catpoptoken" target="_blank" rel="noopener noreferrer" 
                 className="text-white hover:text-yellow-300 transition">
                <Twitter size={24} />
              </a>
              <a href="https://t.me/catpoptoken" target="_blank" rel="noopener noreferrer" 
                 className="text-white hover:text-yellow-300 transition">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#about" className="block text-white hover:text-yellow-300 transition">About</a>
            <a href="#tokenomics" className="block text-white hover:text-yellow-300 transition">Tokenomics</a>
            <a href="#roadmap" className="block text-white hover:text-yellow-300 transition">Roadmap</a>
            <div className="flex space-x-4 pt-4">
              <a href="https://twitter.com/catpoptoken" target="_blank" rel="noopener noreferrer" 
                 className="text-white hover:text-yellow-300 transition">
                <Twitter size={24} />
              </a>
              <a href="https://t.me/catpoptoken" target="_blank" rel="noopener noreferrer" 
                 className="text-white hover:text-yellow-300 transition">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;