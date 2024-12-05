import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { RoutineOrganizer } from './RoutineOrganizer';
import { ListTodo, CalendarClock } from 'lucide-react';

export function DailyRoutine() {
  const [activeTab, setActiveTab] = useState<'organizer' | 'todo'>('organizer');

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Daily Routine Planner</h1>
        <p className="text-gray-600 mb-6">
          Learn to organize your daily activities and keep track of your tasks.
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('organizer')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'organizer'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <CalendarClock className="w-5 h-5" />
            Routine Organizer
          </button>
          <button
            onClick={() => setActiveTab('todo')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'todo'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <ListTodo className="w-5 h-5" />
            Todo List
          </button>
        </div>
      </div>
      {activeTab === 'organizer' ? <RoutineOrganizer /> : <TodoList />}
    </div>
  );
}