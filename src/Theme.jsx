import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#2e8b56',
        },
        secondary: {
            main: '#9fd4b4',
        },
    },
    typography: {
        fontFamily: 'Urbanist',
    },
});

export default theme;