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
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 916,
            lg: 1200,
            xl: 1536,
        },
    },
});

export default theme;