import React from 'react';
import { Clock, Flame, MapPin } from 'lucide-react';

interface ActivityCardProps {
  type: string;
  duration: string;
  calories: number;
  distance?: string;
  time: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  type,
  duration,
  calories,
  distance,
  time,
}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
          <span className="text-indigo-600 text-xl font-semibold">
            {type.charAt(0)}
          </span>
        </div>
        <div>
          <h3 className="font-semibold">{type}</h3>
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              {duration}
            </div>
            <div className="flex items-center">
              <Flame size={14} className="mr-1" />
              {calories} kcal
            </div>
            {distance && (
              <div className="flex items-center">
                <MapPin size={14} className="mr-1" />
                {distance}
              </div>
            )}
          </div>
        </div>
      </div>
      <span className="text-sm text-gray-500">{time}</span>
    </div>
  );
};

export default ActivityCard;