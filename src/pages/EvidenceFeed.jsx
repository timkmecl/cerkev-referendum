import React, { useMemo } from 'react';
import Masonry from 'react-masonry-css';
import EvidencePart from '../components/EvidencePart';
import parishData from '../data/parishes.json';

const EvidenceFeed = () => {
  // Breakpoints for masonry
  const breakpointColumnsObj = {
    default: 4,
    1536: 3,
    1024: 2,
    640: 1
  };

  const allParts = useMemo(() => {
    let parts = [];
    parishData.forEach(parish => {
      Object.entries(parish.types).forEach(([typeKey, typeData]) => {
        if (typeData.note || !typeData.documents) return;
        typeData.documents.forEach(doc => {
          doc.parts.forEach(part => {
            parts.push({
              ...part,
              context: {
                parishName: parish.name,
                parishId: parish.id,
                type: typeData.type || typeKey,
                docHeading: doc.heading
              }
            });
          });
        });
      });
    });
    return parts;
  }, []);

  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h2 className="text-3xl font-bold mb-3 text-gray-900">Arhiv primerov</h2>
        <p className="text-gray-500 text-lg">
          Celoten arhiv <span className="font-bold text-church-red">{allParts.length}</span> zbranih relevantnih segmentov.
        </p>
      </div>

      {/* Render ALL parts at once */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto -ml-6"
        columnClassName="pl-6 bg-clip-padding"
      >
        {allParts.map((part) => (
          <EvidencePart 
            key={part.id || Math.random()} 
            part={part} 
            contextInfo={part.context} 
          />
        ))}
      </Masonry>
      
      <div className="py-20 text-center text-gray-400 text-sm">
        Konec arhiva.
      </div>
    </div>
  );
};

export default EvidenceFeed;