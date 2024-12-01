import React from 'react';
import { Twitter, MessageCircle } from 'lucide-react';

const SocialButtons = () => {
  return (
    <div className="flex gap-4 mt-8">
      <a
        href="https://x.com/cpopsol?s=21&t=UiBsA8V7UcxrSeZOt30yTw"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/10 hover:bg-white/20 transition p-4 rounded-full"
      >
        <Twitter size={24} className="text-white" />
      </a>
      <a
        href="https://t.me/catpopportal"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/10 hover:bg-white/20 transition p-4 rounded-full"
      >
        <MessageCircle size={24} className="text-white" />
      </a>
    </div>
  );
};

export default SocialButtons;