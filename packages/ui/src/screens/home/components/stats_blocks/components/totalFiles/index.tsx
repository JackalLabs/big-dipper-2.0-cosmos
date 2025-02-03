import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import useStyles from '@/screens/home/components/stats_blocks/components/totalFiles/styles';

export function TotalFiles() {
  const [totalFiles, setTotalFiles] = useState(null);

  useEffect(() => {
    async function fetchTotalFiles() {
      try {
        const response = await fetch('https://stats-api.jackallabs.io/total_files');
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
        Total Files
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
}

export default TotalFiles;
