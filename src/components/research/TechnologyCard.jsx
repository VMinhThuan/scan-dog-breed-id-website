import React from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

export const TechnologyCard = ({ title, tech, description, category, icon: Icon }) => {
  return (
    <Card hoverable padding="p-6">
      <div className="flex items-center justify-between mb-4">
        {Icon && (
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Icon className="w-6 h-6" />
          </div>
        )}
        {category && <Badge variant="violet">{category}</Badge>}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-1">{title}</h3>
      <p className="text-xs font-semibold text-blue-600 mb-3">{tech}</p>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </Card>
  );
};
