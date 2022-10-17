import React, {useEffect, useState} from 'react';
import MainPage from "../layout/MainPage";
import {Button, Chip, Container, Grid, ListItem, Typography} from "@mui/material";

const RandomRecommend = () => {
    const [chipData, setChipData] = useState([
        { key: 0, label: "한식" },
        { key: 1, label: "양식" },
        { key: 2, label: "중식" },
        { key: 3, label: "일식" },
        { key: 4, label: "그 외" }
    ]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleClick = (data) => {
        let tempCategories = [...selectedCategories];
        if (selectedCategories.includes(data.key)) {
            tempCategories = selectedCategories.filter((category) => category !== data.key);
        } else {
            tempCategories.push(data.key);
        }
        setSelectedCategories(tempCategories);

    }

    return (
        <MainPage>
            <Container
                maxWidth={false}
                sx={{
                    height: `100%`,
                    width: `100%`,
                }}
            >
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        {chipData.map((data) => {
                            return (
                                <Grid item key={`grid-${data.key}`}>
                                    <ListItem>
                                        <Chip
                                            variant={selectedCategories.includes(data.key) ? undefined : "outlined"}
                                            label={data.label}
                                            onClick={() => handleClick(data)}
                                        />
                                    </ListItem>
                                </Grid>
                            );
                        })}
                    </Grid>
                    <Grid item>
                        <Button size="large" variant="contained">Start!</Button>
                    </Grid>
                </Grid>
            </Container>
        </MainPage>
    );
}

export default RandomRecommend;