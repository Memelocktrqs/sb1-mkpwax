import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Tokenomics />
        <Roadmap />
      </main>
      <footer className="bg-pink-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 CatPOP Token. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;