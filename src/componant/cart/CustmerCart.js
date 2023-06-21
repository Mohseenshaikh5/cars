import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Rating from '@mui/material/Rating';
import Slider from "react-slick";
import { members } from '../../utility/data'
import { Grid } from '@mui/material';


export default function CustmerCart({ member }) {
    const theme = useTheme();
    const [value, setValue] = React.useState(1)
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        // appendDots: dots => (
        //     <div
        //         style={{
        //             backgroundColor: "#ddd",
        //             borderRadius: "10px",
        //             padding: "10px"
        //         }}
        //     >
        //         <ul style={{ margin: "0px" }}> {dots} </ul>
        //     </div>
        // ),
        // customPaging: i => (
        //     <div
        //         style={{
        //             width: "30px",
        //             color: "blue",
        //             border: "1px blue solid"
        //         }}
        //     >
        //         {i + 1}
        //     </div>
        // )
    };

    return (
        <>
            <Slider {...settings}>
                {
                    members.map((member, index) => (
                        <Card key={member.index} sx={{ display: 'flex', maxWidth: 300, maxHeight: 600 }} >
                            <Grid container spacing={2} >
                                <Grid item xs={5}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 500, height: 150 }}
                                        image={member.img}
                                        alt="Live from space album cover"
                                    />
                                </Grid>
                                <Grid item xs={7}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography component="div" variant="h5">
                                                {member.name}
                                            </Typography>
                                            <Typography component="div" variant="body">
                                                {member.carname}
                                            </Typography>
                                            <Rating
                                                name="simple-controlled"
                                                value={value}
                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />
                                        </CardContent>
                                    </Box>
                                </Grid>

                            </Grid>
                        </Card>

                    ))
                }
            </Slider>
        </>


    );
}

