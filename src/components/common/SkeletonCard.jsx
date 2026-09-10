import React from 'react';

export const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 animate-pulse">
      <div className="w-full h-48 bg-slate-200 rounded-xl mb-4" />
      <div className="h-5 bg-slate-200 rounded-md w-2/3 mb-2" />
      <div className="h-4 bg-slate-100 rounded-md w-1/2 mb-4" />
      <div className="flex gap-2">
        <div className="h-6 bg-slate-100 rounded-full w-16" />
        <div className="h-6 bg-slate-100 rounded-full w-20" />
      </div>
    </div>
  );
};
