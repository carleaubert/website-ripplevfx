import React from 'react';

export const CardSkeleton = () => (
  <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 animate-pulse">
    <div className="h-12 w-12 bg-gray-800 rounded-lg mb-4" />
    <div className="h-6 bg-gray-800 rounded w-3/4 mb-3" />
    <div className="h-4 bg-gray-800 rounded w-full mb-2" />
    <div className="h-4 bg-gray-800 rounded w-5/6" />
  </div>
);

export const ProjectSkeleton = () => (
  <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden animate-pulse">
    <div className="h-48 bg-gray-800" />
    <div className="p-6">
      <div className="h-6 bg-gray-800 rounded w-3/4 mb-3" />
      <div className="h-4 bg-gray-800 rounded w-full mb-2" />
      <div className="h-4 bg-gray-800 rounded w-4/5" />
    </div>
  </div>
);

export const TeamMemberSkeleton = () => (
  <div className="text-center animate-pulse">
    <div className="w-32 h-32 mx-auto bg-gray-800 rounded-full mb-4" />
    <div className="h-5 bg-gray-800 rounded w-24 mx-auto mb-2" />
    <div className="h-4 bg-gray-800 rounded w-32 mx-auto" />
  </div>
);
