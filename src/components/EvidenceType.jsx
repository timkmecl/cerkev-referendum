import React from 'react';
import EvidenceDocument from './EvidenceDocument';

const EvidenceType = ({ typeKey, data, parishId }) => {
  if (data.note || !data.documents) return null;

  return (
    <div className="mb-12 border-l-2 border-gray-200 pl-4 md:pl-8">
      <h3 className="text-xl font-bold uppercase tracking-tight text-church-red mb-6">
        {data.type || typeKey}
      </h3>
      
      <div className="space-y-6">
        {data.documents.map((doc, idx) => (
          <EvidenceDocument 
            key={idx} 
            document={doc} 
            parishId={parishId} // Pass it down
          />
        ))}
      </div>
    </div>
  );
};

export default EvidenceType;