import React from 'react';

const CareerValues = ({ values }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
      {values.map((value) => (
        <div 
          key={value.id}
          className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
        >
          <div className="text-white mb-4">{value.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
          <p className="text-gray-400">{value.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CareerValues;
