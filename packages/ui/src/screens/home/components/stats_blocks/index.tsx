import { FC } from 'react';
import useStyles from '@/screens/home/components/data_blocks/styles';
// import { useStatsBlocks } from '@/screens/home/components/stats_blocks/hooks';
import TotalFiles from './components/totalFiles';
import ActiveUsers from './components/activeUsers';
import TotalUsers from './components/totalUsers';
import SpacePurchased from './components/spacePurchased';
import SpaceAvailable from './components/spaceAvailable';
import SpaceUsed from './components/spaceUsed';
// import POL from './components/pol';

const StatsBlocks: FC<ComponentDefault> = ({ className }) => {
  const { classes, cx } = useStyles();
  // const {state} = useStatsBlocks();

  return (
    <div className={cx(classes.root, className)}>
      <TotalFiles />
      <ActiveUsers />
      <TotalUsers />
      <SpacePurchased />
      <SpaceAvailable />
      <SpaceUsed />
      {/* < POL price={state.price} /> */}
    </div>
  );
};

export default StatsBlocks;
