import React from 'react'
import CustmerCart from '../../componant/cart/CustmerCart'
import { Box, Container, Typography, Paper } from '@mui/material'
const Custmer = () => {

    return (
        <>
            <Box >
                <Typography variant='h4' color="MenuText" sx={{
                    textAlign: 'center',
                    marginBottom: "40px",
                    marginTop: '50px',
                }}>Our Happy Custmor</Typography>
            </Box>
            <Paper sx={{ backgroundColor: "lightgrey", padding: '50px', marginBottom: "50px" }}>
                <Container maxWidth="lg" >

                    <CustmerCart />
                </Container>
            </Paper>
        </>
    )
}

export default Custmer