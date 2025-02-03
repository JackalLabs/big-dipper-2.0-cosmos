import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import useStyles from '@/screens/home/components/stats_blocks/components/spaceUsed/styles';

export function SpaceUsed() {
  const [totalFiles, setTotalFiles] = useState(0);

  useEffect(() => {
    async function fetchTotalFiles() {
      try {
        const response = await fetch('https://stats-api.jackallabs.io/used');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        const latest: number = data.data[data.data.length - 1]?.value;
        if (latest) {
          setTotalFiles(Math.round(100 * (latest * 0.00000000000033)) / 100);
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
        Space Used
      </Typography>
      <div className="content">
        {totalFiles === null ? (
          <Typography variant="h1">Loading...</Typography> // Show a placeholder
        ) : (
          <Typography variant="h1">{totalFiles} TB</Typography>
        )}{' '}
      </div>
    </div>
  );
}

export default SpaceUsed;
