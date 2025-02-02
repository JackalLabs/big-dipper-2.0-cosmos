import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    '& .MuiInputBase-root': {
      width: '100%',
      background: theme.palette.custom.general.surfaceOne,
      padding: theme.spacing(0.4, 1.2),
      borderRadius: '0',
    },
    '& .MuiInputBase-input': {
      textOverflow: 'ellipsis',
      '&::placeholder': {
        color: theme.palette.custom.fonts.fontTwo,
      },
    },
  },
}));

export default useStyles;
