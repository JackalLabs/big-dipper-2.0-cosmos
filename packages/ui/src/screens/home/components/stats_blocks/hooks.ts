import numeral from 'numeral';
import { useEffect, useState } from 'react';
import chainConfig from '@/chainConfig';
import {
  TokenPriceListenerSubscription,
  useTokenPriceListenerSubscription,
} from '@/graphql/types/general_types';

const { primaryTokenUnit, tokenUnits } = chainConfig();

type StatsBlockState = {
  totalFiles: number;
  activeUsers: number;
  totalUsers: number;
  spacePurchased: number;
  spaceAvailable: number;
  spaceUsed: number;
  pol: number | null;
};

export const useStatsBlocks = () => {
  const [state, setState] = useState<StatsBlockState>({
    totalFiles: 0,
    activeUsers: 0,
    totalUsers: 0,
    spacePurchased: 0,
    spaceAvailable: 0,
    spaceUsed: 0,
    pol: null,
  });

  // Fetch Total Files
  useEffect(() => {
    fetchTotalFiles();
    fetchActiveUsers();
    fetchTotalUsers();
    fetchSpacePurchased();
    fetchSpaceAvailable();
    fetchSpaceUsed();
  }, []);

  async function fetchTotalFiles() {
    try {
      const response = await fetch('https://stats-api.jackallabs.io/total_files');
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      const latest = data.data[data.data.length - 1]?.value;
      setState((prev) => ({
        ...prev,
        totalFiles: latest,
      }));
    } catch (err: any) {
      console.warn(err);
    }
  }
  async function fetchActiveUsers() {
    try {
      const response = await fetch('https://stats-api.jackallabs.io/active_users');
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      const latest = data.data[data.data.length - 1]?.value;
      setState((prev) => ({
        ...prev,
        activeUsers: latest,
      }));
    } catch (err: any) {
      console.warn(err);
    }
  }
  async function fetchTotalUsers() {
    try {
      const response = await fetch('https://stats-api.jackallabs.io/total_users');
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      const latest = data.data[data.data.length - 1]?.value;
      setState((prev) => ({
        ...prev,
        totalUsers: latest,
      }));
    } catch (err: any) {
      console.warn(err);
    }
  }
  async function fetchSpacePurchased() {
    try {
      const response = await fetch('https://stats-api.jackallabs.io/purchased');
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      const latest = data.data[data.data.length - 1]?.value;
      setState((prev) => ({
        ...prev,
        spacePurchased: Math.round(100 * (latest * 0.00000000000033)) / 100 + ' TB',
      }));
    } catch (err: any) {
      console.warn(err);
    }
  }
  async function fetchSpaceAvailable() {
    try {
      const response = await fetch('https://stats-api.jackallabs.io/available_space');
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      const latest = data.data[data.data.length - 1]?.value;
      setState((prev) => ({
        ...prev,
        spaceAvailable: Math.round(100 * (latest * 0.00000000000033)) / 100 + ' TB',
      }));
    } catch (err: any) {
      console.warn(err);
    }
  }
  async function fetchSpaceUsed() {
    try {
      const response = await fetch('https://stats-api.jackallabs.io/used');
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      const latest = data.data[data.data.length - 1]?.value;
      setState((prev) => ({
        ...prev,
        spaceUsed: Math.round(100 * (latest * 0.00000000000033)) / 100 + ' TB',
      }));
    } catch (err: any) {
      console.warn(err);
    }
  }

  async function fetchPOL() {
    try {
      const response = await fetch('https://stats-api.jackallabs.io/protocol_balance');
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      const latest = data.data[data.data.length - 1]?.value;
      setState((prev) => ({
        ...prev,
        spaceUsed: Math.round(100 * (latest * 0.00000000000033)) / 100 + ' TB',
      }));
    } catch (err: any) {
      console.warn(err);
    }
  }
  return {
    state,
  };
};
