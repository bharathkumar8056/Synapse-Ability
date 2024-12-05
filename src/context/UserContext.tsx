import React, { createContext, useContext, useState } from 'react';
import { UserProfile, UserProgress, GameReward } from '../types';

interface UserContextType {
  user: UserProfile;
  addProgress: (progress: UserProgress) => void;
  addReward: (reward: GameReward) => void;
  spendCoins: (amount: number) => boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile>({
    id: '1',
    balance: 100,
    money: 0,
    completedGames: [],
    currentLevel: {
      quiz: 1,
      puzzle: 1
    }
  });

  const addProgress = (progress: UserProgress) => {
    setUser(prev => ({
      ...prev,
      completedGames: [...prev.completedGames, progress],
      currentLevel: {
        ...prev.currentLevel,
        [progress.gameId.split('-')[0]]: Math.min(
          (prev.currentLevel as any)[progress.gameId.split('-')[0]] + 1,
          30
        )
      }
    }));
  };

  const addReward = (reward: GameReward) => {
    setUser(prev => ({
      ...prev,
      balance: prev.balance + reward.amount,
      money: prev.money + (reward.moneyReward || 0)
    }));
  };

  const spendCoins = (amount: number): boolean => {
    if (user.balance >= amount) {
      setUser(prev => ({
        ...prev,
        balance: prev.balance - amount,
      }));
      return true;
    }
    return false;
  };

  return (
    <UserContext.Provider value={{ user, addProgress, addReward, spendCoins }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}