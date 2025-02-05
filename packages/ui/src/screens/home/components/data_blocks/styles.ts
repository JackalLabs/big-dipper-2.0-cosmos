import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'grid',
    gap: theme.spacing(1),
    gridTemplateRows: 'auto',
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.up('lg')]: {
      gap: theme.spacing(2),
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
  blockHeight: {
    // background: theme.palette.custom.primaryData.one,
    background: '#1B1C16',
  },
  blockTime: {
    // background: theme.palette.custom.primaryData.two,
    background: '#1B1C16',
  },
  price: {
    // background: theme.palette.custom.primaryData.three,
    background: '#1B1C16',
  },
  validators: {
    // background: theme.palette.custom.primaryData.four,
    background: '#1B1C16',
  },
}));

export default useStyles;
