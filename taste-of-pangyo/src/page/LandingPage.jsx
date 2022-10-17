import React from 'react';
import {Link} from "react-router-dom";
import {Box, Button, Container, Grid, ThemeProvider, Typography} from "@mui/material";
import {styled} from "@mui/material";
import {indigo} from "@mui/material/colors";
import {theme} from "../layout/myTheme";
import MainPage from "../layout/MainPage";

const LandingPage = () => {

    return (
        <ThemeProvider theme={theme} >
            <Container
                maxWidth={false}
                sx={{
                    height: window.innerHeight*0.9,
                    width: window.innerWidth,
                }}
            >
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            my: '0.5em',
                        }}
                    >
                        Bon Appétit Pangyo
                    </Typography>
                    <Button variant="outlined" component={Link} to="/map">맛집 지도를 보시겠어용?</Button>
                    <br />
                    <Button variant="outlined" component={Link} to="/random">랜덤으로 맛집을 추천 받으시겠어용?</Button>
                </Grid>
            </Container>



        </ThemeProvider>
    );
};

export default LandingPage;
