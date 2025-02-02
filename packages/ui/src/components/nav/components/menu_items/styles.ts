import Color from 'color';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    '& .MuiListItemIcon-root': {
      minWidth: '48px',
    },
    '&.MuiListItem-gutters': {
      padding: theme.spacing(2, 2.5),
    },
    '& .MuiListItemText-root': {
      color: theme.palette.custom.fonts.fontFour,
    },
    '&.active': {
      background: Color(theme.palette.background.paper).lighten(0.5).string(),
      '& .MuiListItemIcon-root': {
        '& svg': {
          fill: theme?.palette?.custom?.fonts?.highlight,
          color: theme?.palette?.custom?.fonts?.highlight,
        },
      },
      '& .MuiListItemText-root': {
        color: theme?.palette?.custom?.fonts?.highlight,
      },
    },
  },
  listItemText: {
    '&& *': {
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  },
}));

export default useStyles;
