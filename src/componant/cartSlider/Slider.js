import React from 'react'
import Slider from "react-slick";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
const SliderCart = ({ data }) => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1500,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <Box sx={{ marginTop: '50px', alignItems: 'center' }}>
                <Container maxWidth="xl">
                    <Slider {...settings}>
                        {data.map((car, index) => (
                            <Card sx={{ maxWidth: 300 }} key={car.index}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={car.img}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" color="GrayText">
                                        {car.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}

                    </Slider>
                </Container>
            </Box>
        </>
    );
}

export default SliderCart