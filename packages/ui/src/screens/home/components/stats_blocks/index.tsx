import { FC } from 'react';
import useStyles from '@/screens/home/components/data_blocks/styles';
import { useStatsBlocks } from '@/screens/home/components/stats_blocks/hooks';
import { SingleBlock } from '../data_blocks/components';

const StatsBlocks: FC<ComponentDefault> = ({ className }) => {
  const { classes, cx } = useStyles();
  const { state } = useStatsBlocks();
  const data = [
    {
      key: 'Total Files',
      value: state.totalFiles,
    },
    {
      key: 'Active Users',
      value: state.activeUsers,
    },
    {
      key: 'Total Users',
      value: state.totalUsers,
    },
    {
      key: 'Space Purchased',
      value: state.spacePurchased,
    },
    {
      key: 'Space Available',
      value: state.spaceAvailable,
    },
    {
      key: 'Space Used',
      value: state.spaceUsed,
    },
  ];

  return (
    <div className={cx(classes.root, className)}>
      {data.map((x) => (
        <SingleBlock
          key={x.key}
          label={x.key}
          value={x.value}
          description={x.description}
          className={x.className}
          Icon={x.Icon}
        />
      ))}
    </div>
  );
};

export default StatsBlocks;
