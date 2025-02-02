import { makeStyles } from 'tss-react/mui';
import Color from 'color';

const useStyles = makeStyles()((theme) => {
  const iconFill = theme.palette.custom.general.background;
  return {
    root: {
      '& .media': {
        margin: '0 0.5rem',
        '&:first-of-type': {
          marginLeft: 0,
        },
        '&:last-child': {
          marginRight: 0,
        },
        '& > svg > path': {
          fill: iconFill,
        },
        '& path': {
          transition: 'all 0.3s ease',
          fill: iconFill,
        },
        '&:hover': {
          '& path': {
            fill: Color(iconFill).alpha(0.6).string(),
          },
        },
      },
    },
  };
});

export default useStyles;
