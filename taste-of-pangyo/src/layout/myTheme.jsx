import {createTheme} from "@mui/material";
import {grey, indigo} from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: grey[900],
        },
        secondary: {
            main: grey[50],
        },
    },
    typography: {
        fontFamily: "'Galmuri11'",
    }
});

export {theme};