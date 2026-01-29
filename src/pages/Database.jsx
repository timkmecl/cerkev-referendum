import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, AlertTriangle, Facebook, FileText } from 'lucide-react';
import parishData from '../data/parishes.json';

const Database = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // change document title
  React.useEffect(() => {
    document.title = "Seznam župnij | Arhiv referendumske kampanje 2025";
  }, []);

  const hasEvidence = (parish, type) => {
    return parish.types && parish.types[type] && parish.types[type].documents;
  };

  // // Helper to count total evidence pieces for a parish
  // const countEvidence = (parish) => {
  //   let count = 0;
  //   Object.values(parish.types).forEach(t => {
  //     if(t.documents) count += t.documents.length;
  //   });
  //   return count;
  // };
  // Helper to count total parts in all documents for a parish
  const countEvidence = (parish) => {
    let count = 0;
    Object.values(parish.types).forEach(type => {
      if (type.documents) {
        type.documents.forEach(doc => {
          if (doc.parts && Array.isArray(doc.parts)) {
            count += doc.parts.length;
          }
        });
      }
    });
    return count;
  };

  const filteredData = parishData.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.naslov.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mb-10 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Iskanje po bazi</h2>
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Vpiši ime župnije, kraj ali naslov..." 
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-red focus:border-transparent outline-none transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="mt-2 text-sm text-gray-500 text-right">
          Najdenih {filteredData.length} župnij
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredData.map((parish) => {
          const totalDocs = countEvidence(parish);
          const hasContent = totalDocs > 0;

          return (
            <Link 
              key={parish.id} 
              to={`/zupnija/${parish.id}`}
              className={`block bg-white border rounded-lg transition p-5 relative overflow-hidden group ${
                hasContent 
                  ? 'border-gray-200 hover:border-church-red hover:shadow-md' 
                  : 'border-gray-100 opacity-60 hover:opacity-100'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-church-red transition-colors">
                  {parish.name}
                </h3>
              </div>
              
              <p className="text-sm text-gray-500 truncate mb-4">{parish.naslov}</p>
              
              {hasContent ? (
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-50">
                   <div className="flex gap-1" title="Viri dokazov">
                    {hasEvidence(parish, 'facebook') && <Facebook className="h-4 w-4 text-blue-600" />}
                    {hasEvidence(parish, 'oznanila') && <AlertTriangle className="h-4 w-4 text-church-red" />}
                    {(hasEvidence(parish, 'novice') || hasEvidence(parish, 'glasila') || hasEvidence(parish, 'dogodki')) && <FileText className="h-4 w-4 text-gray-600" />}
                   </div>
                   <span className="text-xs font-semibold text-gray-400 ml-auto">
                     {totalDocs} zapisov
                   </span>
                </div>
              ) : (
                 <div className="mt-4 pt-4 border-t border-gray-50 text-xs text-gray-400 italic">
                   Ni digitalnih sledi
                 </div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Database;