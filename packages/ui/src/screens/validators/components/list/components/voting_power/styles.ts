import { makeStyles } from 'tss-react/mui';
import Color from 'color';

const useStyles = makeStyles<{ percentage: number; topVotingPower: boolean }>()(
  (theme, { percentage, topVotingPower }) => ({
    root: {
      '& .MuiTypography-body1': {
        color: topVotingPower
          ? theme.palette.custom.primaryData.one
          : theme.palette.custom.fonts.fontTwo,
      },
    },
    chart: {
      display: 'flex',
      height: '2px',
      borderRadius: '0',
      background: topVotingPower
        ? Color(theme.palette.custom.primaryData.one).alpha(0.2).string()
        : Color(theme.palette.custom.fonts.fontTwo).alpha(0.2).string(),
      overflow: 'hidden',
    },
    active: {
      width: `${percentage}%`,
      background: topVotingPower
        ? theme.palette.custom.primaryData.one
        : theme.palette.custom.fonts.fontTwo,
    },
    content: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: theme.spacing(1),
      '& .percentage': {
        color: topVotingPower
          ? theme.palette.custom.primaryData.one
          : theme.palette.custom.fonts.fontTwo,
      },
      [theme.breakpoints.up('lg')]: {
        marginBottom: 0,
      },
    },
  })
);

export default useStyles;
