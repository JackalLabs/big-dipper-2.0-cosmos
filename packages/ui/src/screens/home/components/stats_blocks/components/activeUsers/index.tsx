import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import useStyles from '@/screens/home/components/stats_blocks/components/activeUsers/styles';

export function ActiveUsers() {
  const [totalFiles, setTotalFiles] = useState(null);

  useEffect(() => {
    async function fetchTotalFiles() {
      try {
        const response = await fetch('https://stats-api.jackallabs.io/active_users');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        const latest = data.data[data.data.length - 1]?.value;
        setTotalFiles(latest);
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
        Active Users
      </Typography>
      <div className="content">
        <Typography variant="h1">{totalFiles}</Typography>
      </div>
    </div>
  );
}

export default ActiveUsers;
