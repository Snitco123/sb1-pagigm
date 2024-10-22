import React from 'react';
import { Activity, Flame, Heart, Timer } from 'lucide-react';
import { useFitness } from '../context/FitnessContext';
import ActivityCard from './ActivityCard';
import ProgressChart from './ProgressChart';

const Dashboard: React.FC = () => {
  const { todayStats } = useFitness();

  return (
    <div className="space-y-8">
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          icon={<Flame className="text-orange-500" />}
          label="Calories"
          value={todayStats.calories}
          unit="kcal"
        />
        <StatCard
          icon={<Timer className="text-blue-500" />}
          label="Active Time"
          value={todayStats.activeMinutes}
          unit="min"
        />
        <StatCard
          icon={<Activity className="text-green-500" />}
          label="Steps"
          value={todayStats.steps.toLocaleString()}
          unit="steps"
        />
        <StatCard
          icon={<Heart className="text-red-500" />}
          label="Avg HR"
          value={todayStats.avgHeartRate}
          unit="bpm"
        />
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Today's Activities</h2>
          <div className="space-y-4">
            <ActivityCard
              type="Running"
              duration="30 min"
              calories={250}
              distance="3.2 km"
              time="08:30 AM"
            />
            <ActivityCard
              type="Strength Training"
              duration="45 min"
              calories={180}
              time="10:15 AM"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Weekly Progress</h2>
          <ProgressChart />
        </div>
      </section>
    </div>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: number | string;
  unit: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value, unit }) => (
  <div className="bg-white rounded-2xl p-4 shadow-sm">
    <div className="flex items-center space-x-3">
      <div className="p-2 bg-gray-50 rounded-xl">{icon}</div>
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <p className="text-xl font-semibold">
          {value} <span className="text-sm text-gray-500">{unit}</span>
        </p>
      </div>
    </div>
  </div>
);

export default Dashboard;