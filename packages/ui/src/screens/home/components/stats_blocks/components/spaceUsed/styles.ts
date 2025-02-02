import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    padding: theme.spacing(2),
    background: theme.palette.custom.primaryData.four,
    borderRadius: '0',
    height: '110px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    color: theme.palette.custom.fonts.fontFive,
    '& .label': {
      marginBottom: theme.spacing(2),
    },
    '& .content': {
      width: '100%',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
    },
    '& .description': {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
    },
    '& .flexContent': {
      display: 'flex',
      flexDirection: 'row',
      gap: theme.spacing(0.5),
    },
  },
}));

export default useStyles;
