import React, {useEffect, useRef} from 'react';
import {Box, Container, Grid} from "@mui/material";
import MainPage from "../layout/MainPage";

const Map = () => {
    const mapElement = useRef(null);


    useEffect(() => {
        const { naver } = window;
        if (!mapElement.current || !naver) return;

        // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
        const location = new naver.maps.LatLng(37.395, 127.1112);
        const mapOptions: naver.maps.MapOptions = {
            center: location,
            zoom: 17,
            zoomControl: true,
            zoomControlOptions: {
                position: naver.maps.Position.TOP_RIGHT,
            },
        };
        const map = new naver.maps.Map(mapElement.current, mapOptions);
        new naver.maps.Marker({
            position: location,
            map,
        });
    }, []);


    return (
        <MainPage>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                sx={{
                    width: `100%`,
                    height: `100%`
                }}
            >
                <div ref={mapElement} style={{ height: window.innerHeight*0.9, width: window.innerWidth*0.9 }} />
            </Grid>
        </MainPage>
    )
};

export default Map;