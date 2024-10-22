import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Target, TrendingUp, Weight } from 'lucide-react';

const Progress: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState('weight');
  const [selectedRange, setSelectedRange] = useState('1M');

  const metrics = [
    { id: 'weight', name: 'Weight', icon: Weight },
    { id: 'measurements', name: 'Measurements', icon: Target },
    { id: 'performance', name: 'Performance', icon: TrendingUp },
  ];

  const ranges = ['1W', '1M', '3M', '6M', '1Y'];

  const chartData = {
    weight: [80, 79.5, 79.2, 78.8, 78.5, 78.2, 77.8, 77.5],
    dates: ['Mar 8', 'Mar 9', 'Mar 10', 'Mar 11', 'Mar 12', 'Mar 13', 'Mar 14', 'Mar 15'],
  };

  const stats = [
    { label: 'Starting Weight', value: '80 kg' },
    { label: 'Current Weight', value: '77.5 kg' },
    { label: 'Weight Lost', value: '2.5 kg' },
    { label: 'Body Fat %', value: '18%' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Progress</h1>
        <button className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700">
          <Calendar size={20} />
          <span>Add Entry</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm space-y-6">
        <div className="flex space-x-4">
          {metrics.map((metric) => (
            <button
              key={metric.id}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                selectedMetric === metric.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedMetric(metric.id)}
            >
              <metric.icon size={20} />
              <span>{metric.name}</span>
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <button className="p-2 text-gray-600 hover:text-indigo-600">
            <ChevronLeft size={24} />
          </button>
          <div className="flex space-x-2">
            {ranges.map((range) => (
              <button
                key={range}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedRange === range
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedRange(range)}
              >
                {range}
              </button>
            ))}
          </div>
          <button className="p-2 text-gray-600 hover:text-indigo-600">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="h-64 flex items-end space-x-2">
          {chartData.weight.map((value, index) => (
            <div key={index} className="flex-1 flex flex-col items-center space-y-2">
              <div className="w-full bg-gray-100 rounded-full relative" style={{ height: '90%' }}>
                <div
                  className="absolute bottom-0 w-full bg-indigo-600 rounded-full transition-all duration-500"
                  style={{ height: `${(value / 80) * 100}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-600">{chartData.dates[index]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="text-xl font-semibold mt-1">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;