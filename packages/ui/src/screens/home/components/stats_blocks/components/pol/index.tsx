import { FC, useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import useStyles from '@/screens/home/components/stats_blocks/components/pol/styles';

type PolBlockProps = {
  price: number | null;
};

const POL: FC<PolBlockProps> = ({ price }) => {
  const [totalFiles, setTotalFiles] = useState(0);

  useEffect(() => {
    async function fetchTotalFiles() {
      try {
        const response = await fetch('https://stats-api.jackallabs.io/protocol_balance');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        const latest: number = data.data[data.data.length - 1]?.value;

        // const p = state.price !== null ? `$${numeral(state.price).format('0.000')}` : 'N/A'

        if (latest && price) {
          console.warn(latest, price);

          setTotalFiles((latest / 1_000_000) * price);
        }
      } catch (err: any) {
        console.warn(err);
      }
    }

    fetchTotalFiles();
  }, []);

  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.root)}>
      <Typography variant="body2" className="label">
        Protocol Owned Liquidity
      </Typography>
      <div className="content">
        {totalFiles === null ? (
          <Typography variant="h1">Loading...</Typography> // Show a placeholder
        ) : (
          <Typography variant="h1">{totalFiles} TB</Typography>
        )}
      </div>
    </div>
  );
};

export default POL;
