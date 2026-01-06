import React from 'react';
import EvidencePart from './EvidencePart';
import { ExternalLink, Calendar } from 'lucide-react';

const EvidenceDocument = ({ document, parishId }) => {  return (
    <div className="mb-8 last:mb-0">
      {/* Document Meta Header */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
          {document.heading ? (
            <>
              <Calendar className="h-4 w-4 text-church-red" />
              <span>{document.heading}</span>
            </>
          ) : (
            <span className="text-gray-400 italic">Dokument</span>
          )}
        </div>

        {document.link && (
          <a 
            href={document.link} 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center text-xs text-blue-600 hover:underline"
          >
            {document.link_title || 'Izvirna povezava'} <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        )}
      </div>

      {/* Render Parts */}
      <div className="space-y-4">
        {document.parts.map((part) => (
          <EvidencePart 
            key={part.id} 
            part={part} 
            parishId={parishId} // Pass it down
          />
        ))}
      </div>
    </div>
  );
};

export default EvidenceDocument;