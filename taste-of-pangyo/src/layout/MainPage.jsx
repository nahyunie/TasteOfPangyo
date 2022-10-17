import React from 'react';
import {AppBar, Box, Button, GlobalStyles, Grid, Link, ThemeProvider, Toolbar, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import {theme} from "./myTheme";

const MainPage = ({children}) => {
    return (
        <ThemeProvider theme={theme} >
            <GlobalStyles 
                styles={{ 
                    ul: { margin: 0, padding: 0, listStyle: 'none' },
                    body: { margin: 0, padding: 0 }
                }}
            />
            <Box sx={{ flexGrow : 1 }}>
                <AppBar
                    position="static"
                    elevation={0}
                >
                    <Toolbar sx={{ flexWrap: 'wrap' }}>
                        <Grid container justifyContent="center">
                            <nav>
                                <Link
                                    variant="button"
                                    underline="none"
                                    color={grey[50]}
                                    href="/map"
                                    sx={{ my: 1, mx: 1.5 }}
                                >
                                    맛집 지도
                                </Link>
                                <Link
                                    variant="button"
                                    underline="none"
                                    color={grey[50]}
                                    href="/random"
                                    sx={{ my: 1, mx: 1.5 }}
                                >
                                    메뉴 추천
                                </Link>
                            </nav>
                        </Grid>
                    </Toolbar>
                </AppBar>
                {children}
            </Box>
        </ThemeProvider>

    );
}

export default MainPage;