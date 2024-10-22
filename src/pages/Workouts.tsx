import React, { useState } from 'react';
import { Calendar, Clock, Dumbbell, Play } from 'lucide-react';

const Workouts: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Workouts' },
    { id: 'strength', name: 'Strength' },
    { id: 'cardio', name: 'Cardio' },
    { id: 'flexibility', name: 'Flexibility' },
    { id: 'hiit', name: 'HIIT' },
  ];

  const workouts = [
    {
      id: 1,
      name: 'Full Body Strength',
      category: 'strength',
      duration: '45 min',
      difficulty: 'Intermediate',
      exercises: 12,
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=300&h=200',
    },
    {
      id: 2,
      name: 'HIIT Cardio Blast',
      category: 'hiit',
      duration: '30 min',
      difficulty: 'Advanced',
      exercises: 8,
      image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&w=300&h=200',
    },
    {
      id: 3,
      name: 'Yoga Flow',
      category: 'flexibility',
      duration: '60 min',
      difficulty: 'Beginner',
      exercises: 15,
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=300&h=200',
    },
    {
      id: 4,
      name: 'Endurance Run',
      category: 'cardio',
      duration: '40 min',
      difficulty: 'Intermediate',
      exercises: 1,
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=300&h=200',
    },
  ];

  const filteredWorkouts = workouts.filter(
    workout => selectedCategory === 'all' || workout.category === selectedCategory
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Workouts</h1>

      <div className="flex space-x-4 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              selectedCategory === category.id
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredWorkouts.map((workout) => (
          <div key={workout.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="relative h-48">
              <img
                src={workout.image}
                alt={workout.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-xl font-semibold">{workout.name}</h3>
                <p className="text-gray-200 text-sm">{workout.difficulty}</p>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <span>{workout.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Dumbbell size={16} />
                  <span>{workout.exercises} exercises</span>
                </div>
              </div>
              <button className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                <Play size={20} />
                <span>Start Workout</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workouts;