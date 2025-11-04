import { baseTheme } from '@erica/mui-web';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        appBar: {
            main: string;
            contrastText: string;
        };
    }
    interface PaletteOptions {
        appBar?: {
            main?: string;
            contrastText?: string;
        };
    }
}

const palette = {
    primary: {
        main: '#6750A4',
        contrastText: '#FFFFFF',
    },
    background: {
        default: '#f8f8f8',
        paper: '#f8f8f8',
    },
    appBar: {
        main: '#f4f1ea',
        contrastText: "#3a2a16",
    }

};

let theme = createTheme({
    palette: palette,
    typography: {
            fontFamily: 'Open Sans',
        h1: {
            fontFamily: 'Alice',
            fontWeight: 'bold',
            fontSize: '2rem',
            color: palette.appBar.contrastText
        },
        h2: {
            fontFamily: 'Alice',
            fontWeight: 'bold',
            color: palette.appBar.contrastText
        },
        h3: {
            fontFamily: 'Alice',
            fontWeight: 'bold',
            color: palette.appBar.contrastText
        },
        body1: {
            textAlign: 'justify',
            lineHeight: 1.8,
        },
        navItemPrimary: {
            color: palette.appBar.contrastText,
            fontFamily: 'Alice',
            fontSize: '1.1rem',
            fontWeight: 400,
        },
        navItemSecondary: {
            color: palette.appBar.contrastText,
            fontFamily: 'Alice',
            fontSize: '1.1rem',
            fontWeight: 400,
        },
    },
    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    backgroundColor: palette.appBar.main,
                    color: palette.appBar.contrastText
                },
            },
        },
    },
});

theme = createTheme(baseTheme, theme);
theme = responsiveFontSizes(theme);

export { theme };