import React from 'react';
import { Copy } from 'lucide-react';

const ContractAddress = () => {
  const [copied, setCopied] = React.useState(false);
  const address = "6Kr7fh3ftdvPG9ByqSzUuuNMMmkVXb8dtN5UF4Tfpump";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white w-full max-w-lg">
      <p className="text-sm mb-2">Contract Address:</p>
      <div className="flex items-center gap-2">
        <code className="bg-white/20 px-4 py-2 rounded text-sm break-all flex-1">
          {address}
        </code>
        <button
          onClick={copyToClipboard}
          className="bg-white/20 p-2 rounded hover:bg-white/30 transition"
          title="Copy to clipboard"
        >
          <Copy size={16} />
        </button>
      </div>
      {copied && (
        <p className="text-xs text-yellow-300 mt-1">Copied to clipboard!</p>
      )}
    </div>
  );
};

export default ContractAddress;