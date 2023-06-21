import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

const Login = ({ open, setOpen }) => {
    // const [open, setOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    return (
        <div>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
                Open alert dialog
            </Button> */}
            <Dialog
                open={open}
                onClose={setOpen}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                width='100%'
            >
                <DialogTitle id="alert-dialog-title">
                    <Box sx={{ textAlign: "center", marginBottom: "30px" }}>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://www.shutterstock.com/image-illustration/modern-cars-studio-room-3d-260nw-735402217.jpg"
                            sx={{ width: 56, height: 56, marginLeft: "80px" }}
                        />
                        <Typography variant='h5' >Sing Up</Typography>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <TextField id="outlined-basic" fullWidth placeholder='Name' variant="outlined" />
                        <br />
                        <bt />
                        <br />
                        <TextField id="outlined-basic" fullWidth placeholder='PassWord' variant="outlined" />
                        <br />

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={setOpen}>Cancel</Button>
                    <Button autoFocus>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Login