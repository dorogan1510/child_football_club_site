import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1024,
            lg: 1200,
            xl: 1536,
        },
    },
    palette: {
        // background: {
        //     paper: '#252528',
        // },
        primary: {
            main: '#0097ce',
            contrastText: '#fff',
        },
        secondary: {
            main: '#252528',
        },
    },
    typography: {
        h1: {
            fontSize: '48px',

            '@media (max-width:1024px)': {
                fontSize: '30px',
            },
        },
        h4: {
            '@media (max-width:1024px)': {
                fontSize: '24px',
            },
        },
        body1: {
            fontSize: '16px',
        },
        subtitle1: {
            fontSize: '30px',
            color: 'white',
            '@media (max-width:1024px)': {
                fontSize: '16px',
            },
        },
    },
})

export default theme
