import React from 'react';
import { Coins } from 'lucide-react';
import { useUser } from '../context/UserContext';

export function CoinBalance() {
  const { user } = useUser();

  return (
    <div className="flex items-center gap-2 bg-yellow-100 px-3 py-1.5 rounded-full">
      <Coins className="h-4 w-4 text-yellow-600" />
      <span className="font-medium text-yellow-700">{user.balance}</span>
    </div>
  );
}