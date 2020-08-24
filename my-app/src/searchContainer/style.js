import { fade, makeStyles } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';
// import { createMuiTheme } from '@material-ui/core/styles';

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//         main: colors.green[900],
//     },
//   },
// });
export const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '500px',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },

    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'end',
      justifyContent: 'space between',
      float: 'left',
    },
    inputRoot: {
        color: 'inherit',
      width: '300px',
      float: 'left',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: "white"
            },
        },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    searchRoot: {
        padding: '2px 10px',
        display: 'flex',
        alignItems: 'center',
        width: 950,
        backgroundColor: '#eee',
        marginLeft: '50px',
      },
      input2: {
        marginLeft: theme.spacing(1),
        flex: 1,
      },
      iconButton: {
        padding: 10,
      },
      divider: {
        height: 28,
        margin: 10,
      },
      appBar: {
        color: 'default',
        backgroundColor: 'white',
          
      },
  }));
  