
import React, { useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import parishData from '../data/parishes.json';
import EvidenceType from '../components/EvidenceType';

const ParishDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const parish = parishData.find(p => p.id === id);

  useEffect(() => {
    // 1. Check if there is a hash in the URL (e.g., #a1b2c3d4e5f6)
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      
      // 2. We use a small timeout to ensure React has finished 
      // rendering all the Document and Part components
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Highlight the target element briefly
          element.classList.add('ring-2', 'ring-church-red', 'ring-offset-4');
          setTimeout(() => {
            element.classList.remove('ring-2', 'ring-church-red', 'ring-offset-4');
          }, 3000);
        }
      }, 500); // 500ms is usually enough for the DOM to be ready

      return () => clearTimeout(timer);
    }
  }, [location.hash, id]); // Re-run if hash or parish changes

  if (!parish) return <div className="p-8 text-center">Župnija ni najdena.</div>;

  const hasContent = Object.values(parish.types).some(t => t.documents && t.documents.length > 0);

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/baza" className="inline-flex items-center text-gray-500 hover:text-black mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4 mr-2" /> Nazaj na seznam župnij
      </Link>

      {/* Parish Header */}
      <div className="bg-slate-900 text-white p-8 rounded-xl shadow-lg mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{parish.name}</h1>
        <p className="text-slate-400 mb-6 text-lg">{parish.naslov}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-700 pt-4 text-sm">
          <div>
            <span className="block text-slate-500 uppercase text-xs font-bold tracking-wider mb-1">Župnik</span>
            <span className="font-mono">{parish.župnik || 'Neznano / Ni podatka'}</span>
          </div>
          <div className="flex gap-4 items-end">
            {parish.url && (
              <a href={parish.url} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">
                Uradna spletna stran
              </a>
            )}
            {parish.facebook_url && (
              <a href={parish.facebook_url} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">
                Facebook profil
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content Area */}
      {!hasContent ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300 text-gray-500">
          Za to župnijo v času preiskave nismo našli digitalnih dokazov ali pa arhivi niso bili dostopni.
        </div>
      ) : (
        <div>
          {Object.entries(parish.types).map(([key, data]) => (
            <EvidenceType 
            key={key} 
            typeKey={key} 
            data={data} 
            parishId={id} // Start passing the slug here
          />
          ))}
        </div>
      )}
    </div>
  );
};

export default ParishDetail;