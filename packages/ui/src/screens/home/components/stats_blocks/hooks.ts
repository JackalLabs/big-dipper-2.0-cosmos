import numeral from 'numeral';
import { useState } from 'react';
import chainConfig from '@/chainConfig';
import {
  TokenPriceListenerSubscription,
  useTokenPriceListenerSubscription,
} from '@/graphql/types/general_types';

const { primaryTokenUnit, tokenUnits } = chainConfig();

type StatsBlockState = {
  price: number | null;
};

const formatTokenPrice = (data: TokenPriceListenerSubscription, state: StatsBlockState) => {
  if (data?.tokenPrice[0]?.price) {
    return numeral(numeral(data?.tokenPrice[0]?.price).format('0.0000', Math.floor)).value();
  }
  return state.price;
};

export const useStatsBlocks = () => {
  const [state, setState] = useState<StatsBlockState>({
    price: null,
  });
  // ====================================
  // token price
  // ====================================
  useTokenPriceListenerSubscription({
    variables: {
      denom: tokenUnits?.[primaryTokenUnit]?.display,
    },
    onData: (data) => {
      setState((prevState) => ({
        ...prevState,
        price: data.data.data ? formatTokenPrice(data.data.data, state) : 0,
      }));
    },
  });

  return {
    state,
  };
};
