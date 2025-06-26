import React from 'react';
import { GlobalPresenceSection } from '@/components/GlobalPresenceSection';

export const GlobalPresence: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="pt-16"> {/* Account for fixed navigation */}
        <GlobalPresenceSection />
      </div>
    </div>
  );
};
