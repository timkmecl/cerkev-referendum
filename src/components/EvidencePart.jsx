import React, { useState } from 'react';
import { Link as LinkIcon, Maximize2 } from 'lucide-react';
import Markdown from 'react-markdown';
import { Link } from 'react-router-dom';

const EvidencePart = ({ part, contextInfo = null, parishId = null }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const cleanContent = (text) => {
    if (!text) return "";
    return text.replace(/chrome-extension:\/\/[a-z]+\/(https?:\/\/)/gi, '$1');
  };

  const getImageUrl = (path) => {
    if (path.startsWith('http')) return path;
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${import.meta.env.BASE_URL}${cleanPath}`;
  };

  // Construct the URL
  // Format for HashRouter: #/zupnija/slug#id
  const slug = parishId || contextInfo?.parishId;
  const targetUrl = `#/zupnija/${slug}#${part.id}`;

  return (
    <div id={part.id} className="break-inside-avoid mb-6 group relative bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:border-gray-300 transition-all scroll-mt-24">
      
      {/* Actual Link Icon/Button */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <a 
          href={targetUrl}
          // If contextInfo exists, we are in the Feed -> Open in new tab
          target={contextInfo ? "_blank" : "_self"}
          rel="noreferrer"
          className="flex items-center gap-1.5 px-2 py-1 rounded-md border text-xs font-medium bg-white/90 backdrop-blur text-gray-400 hover:text-church-red border-gray-200 shadow-sm transition-all"
        >
          <LinkIcon className="h-3 w-3" />
          Povezava
        </a>
      </div>

      {/* Context Header */}
      {contextInfo && (
        <div className="mb-3 pb-2 border-b border-gray-100 text-[10px] text-gray-400 uppercase tracking-widest font-bold pr-6">
           <Link to={`/zupnija/${contextInfo.parishId}`} className="text-church-red/80 hover:text-church-red hover:underline">
             {contextInfo.parishName}
           </Link>
           <span className="mx-2 opacity-30">|</span>
           {contextInfo.type}
        </div>
      )}

      {/* Markdown Content */}
      {part.text && (
        <div className="mb-4">
          <div className="prose prose-sm prose-stone max-w-none break-words overflow-hidden">
            <Markdown>
              {cleanContent(part.text)}
            </Markdown>
          </div>
        </div>
      )}

      {/* Images */}
      {part.images && part.images.length > 0 && (
        <div className="flex flex-col gap-3 mt-3">
          {part.images.map((img, idx) => (
            <div key={idx} className="relative w-full rounded-lg overflow-hidden border border-gray-100 bg-gray-50">
              <img 
                src={getImageUrl(img)} 
                alt="Dokazno gradivo" 
                className={`w-full h-auto max-h-[600px] object-contain cursor-zoom-in transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                loading="lazy" 
                onLoad={() => setIsLoaded(true)}
                onClick={() => window.open(getImageUrl(img), '_blank')}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EvidencePart;