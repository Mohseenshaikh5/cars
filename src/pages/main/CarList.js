import React from 'react'
import data from '../../utility/data'
import Carts from '../../componant/cart/Carts'
import { Box, Container, Grid, Paper, Typography } from '@mui/material'

const CarList = () => {
    return (
        <>

            <Typography variant='h4' color="MenuText" sx={{
                textAlign: 'center',
                marginBottom: "40px",
                marginTop: '50px',
            }}>Car List</Typography>
            <Container maxWidth='xl' sx={{ marginBottom: '10px' }}>
                <Box >
                    <Box>
                        <Grid container spacing={2}>
                            {
                                data.map((item) => (
                                    <Grid item xs={12} sm={6} md={3}>
                                        <Carts caritem={item} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Box>
                </Box>
            </Container >
        </>
    )
}

export default CarList