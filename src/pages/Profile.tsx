import React from 'react';
import { Bell, ChevronRight, Heart, Lock, Settings, Shield, User } from 'lucide-react';

const Profile: React.FC = () => {
  const userInfo = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150',
    joinDate: 'March 2024',
    stats: {
      workouts: 48,
      calories: '12,450',
      hours: '32.5',
    },
  };

  const menuItems = [
    {
      icon: User,
      title: 'Personal Information',
      description: 'Update your personal details',
    },
    {
      icon: Heart,
      title: 'Health Data',
      description: 'Manage your health information',
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Configure notification settings',
    },
    {
      icon: Lock,
      title: 'Privacy',
      description: 'Manage your privacy settings',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Update security preferences',
    },
    {
      icon: Settings,
      title: 'App Settings',
      description: 'Configure app preferences',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-center space-x-4">
          <img
            src={userInfo.avatar}
            alt={userInfo.name}
            className="w-20 h-20 rounded-full border-4 border-indigo-600"
          />
          <div>
            <h2 className="text-2xl font-bold">{userInfo.name}</h2>
            <p className="text-gray-600">{userInfo.email}</p>
            <p className="text-sm text-gray-500">Member since {userInfo.joinDate}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl font-bold">{userInfo.stats.workouts}</p>
            <p className="text-sm text-gray-600">Workouts</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">{userInfo.stats.calories}</p>
            <p className="text-sm text-gray-600">Calories</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">{userInfo.stats.hours}</p>
            <p className="text-sm text-gray-600">Hours</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm divide-y">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-gray-100 rounded-xl">
                <item.icon size={20} className="text-gray-600" />
              </div>
              <div className="text-left">
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </button>
        ))}
      </div>

      <button className="w-full py-3 text-red-600 font-medium hover:bg-red-50 rounded-lg transition-colors">
        Sign Out
      </button>
    </div>
  );
};

export default Profile;