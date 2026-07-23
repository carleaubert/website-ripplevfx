import React from 'react';
import { Film, Building2 } from 'lucide-react';

const DepartmentSwitcher = ({ activeDepartment, onDepartmentChange }) => {
  return (
    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
      <div className="inline-flex bg-black/80 backdrop-blur-xl border border-white/10 rounded-full p-1 gap-1">
        <button
          onClick={() => onDepartmentChange('vfx')}
          className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-500 ${
            activeDepartment === 'vfx'
              ? 'bg-white text-black shadow-2xl shadow-white/20'
              : 'text-white hover:bg-white/10'
          }`}
        >
          <Film size={16} />
          <span>Ripple VFX</span>
        </button>
        <button
          onClick={() => onDepartmentChange('digital')}
          className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-500 ${
            activeDepartment === 'digital'
              ? 'bg-white text-black shadow-2xl shadow-white/20'
              : 'text-white hover:bg-white/10'
          }`}
        >
          <Building2 size={16} />
          <span>Ripple Digital</span>
        </button>
      </div>
    </div>
  );
};

export default DepartmentSwitcher;
