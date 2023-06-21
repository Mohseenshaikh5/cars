import React from 'react'
import Slider from "react-slick";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid, Stack } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Carts = ({ caritem }) => {
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 180 }}
                    image={caritem.img}
                    title="green iguana"
                />
                <CardContent>
                    <Grid container spacing={1} >
                        <Grid item xs={10}>
                            <Typography variant="h6" component="div" color="GrayText">
                                {caritem.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant='text'  >
                                <ShoppingCartIcon />
                            </Button>
                        </Grid>
                    </Grid>
                    <Typography variant="body" component="div" textAlign="left" >
                        ₹{caritem.Price}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', marginBottom: "15px" }} >

                    <Button variant='contained' size="large" sx={{ borderColor: "red" }}>Buy</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default Carts