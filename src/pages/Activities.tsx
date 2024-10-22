import React, { useState } from 'react';
import { Calendar, Filter, Plus, Search } from 'lucide-react';
import ActivityCard from '../components/ActivityCard';

const Activities: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const activities = [
    {
      id: 1,
      type: 'Running',
      duration: '45 min',
      calories: 380,
      distance: '5.2 km',
      time: '07:30 AM',
      date: '2024-03-15',
    },
    {
      id: 2,
      type: 'Cycling',
      duration: '60 min',
      calories: 450,
      distance: '15 km',
      time: '06:00 AM',
      date: '2024-03-15',
    },
    {
      id: 3,
      type: 'Swimming',
      duration: '30 min',
      calories: 250,
      distance: '1 km',
      time: '08:00 AM',
      date: '2024-03-14',
    },
    {
      id: 4,
      type: 'Strength Training',
      duration: '50 min',
      calories: 320,
      time: '05:30 PM',
      date: '2024-03-14',
    },
  ];

  const filteredActivities = activities.filter(activity => {
    const matchesSearch = activity.type.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || activity.type.toLowerCase() === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const groupedActivities = filteredActivities.reduce((groups, activity) => {
    const date = activity.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(activity);
    return groups;
  }, {} as Record<string, typeof activities>);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Activities</h1>
        <button className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          <Plus size={20} />
          <span>Add Activity</span>
        </button>
      </div>

      <div className="flex space-x-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search activities..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="relative">
          <select
            className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="running">Running</option>
            <option value="cycling">Cycling</option>
            <option value="swimming">Swimming</option>
            <option value="strength training">Strength Training</option>
          </select>
          <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
        </div>
      </div>

      <div className="space-y-6">
        {Object.entries(groupedActivities).map(([date, activities]) => (
          <div key={date} className="space-y-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <Calendar size={20} />
              <span className="font-medium">
                {new Date(date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            <div className="space-y-3">
              {activities.map((activity) => (
                <ActivityCard key={activity.id} {...activity} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;