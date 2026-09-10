import React from 'react';
import { Card } from '../common/Card';

export const StatCard = ({ value, label, subtext, icon: Icon, dark = false }) => {
  return (
    <Card
      padding="p-6"
      className={dark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200'}
    >
      <div className="flex items-center justify-between mb-3">
        {Icon && (
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              dark ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-50 text-blue-600'
            }`}
          >
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>
      <div className="text-3xl sm:text-4xl font-black tracking-tight mb-1">{value}</div>
      <div className={`text-sm font-bold ${dark ? 'text-slate-200' : 'text-slate-800'}`}>
        {label}
      </div>
      {subtext && (
        <div className={`text-xs mt-1 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
          {subtext}
        </div>
      )}
    </Card>
  );
};
