import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    '&&': {
      overflow: 'auto',
      padding: theme.spacing(2),
      borderRadius: '0',
      background: theme.palette.custom.general.surfaceOne,
    },
  },
}));

export default useStyles;
