import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { Button, Tab, Tabs, AppBar, Box } from '@material-ui/core'
import Signup from './Signup'
import Login from './Login'
import { useCrypto } from '../../context/CryptoContext'
import { auth } from '../../config/firebase'
import GoogleButton from 'react-google-button'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'

const AuthModal = () => {
    const useStyles = makeStyles((theme) => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            width: 400,
            backgroundColor: theme.palette.background.paper,
            color: 'black',
            borderRadius: 10,
        },
        google: {
            padding: 24,
            paddingTop: 0,
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            gap: 20,
            fontSize: 20,
        },
    }))
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    const { setAlert } = useCrypto()

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const googleProvider = new GoogleAuthProvider()

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((res) => {
                setAlert({
                    open: true,
                    message: `Sign Up Successful. Welcome ${res.user.email}`,
                    type: 'success',
                })

                handleClose()
            })
            .catch((error) => {
                setAlert({
                    open: true,
                    message: error.message,
                    type: 'error',
                })
                return
            })
    }

    return (
        <div>
            <Button
                variant="contained"
                style={{
                    width: 85,
                    height: 40,
                    marginLeft: 15,
                    backgroundColor: '#EEBC1D',
                }}
                onClick={handleOpen}
            >
                Login
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <AppBar
                            position="static"
                            style={{
                                backgroundColor: 'transparent',
                                color: 'black',
                            }}
                        >
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="fullWidth"
                                style={{ borderRadius: 10 }}
                            >
                                <Tab label="Login" />
                                <Tab label="Sign Up" />
                            </Tabs>
                        </AppBar>
                        {value === 0 && <Login handleClose={handleClose} />}
                        {value === 1 && <Signup handleClose={handleClose} />}
                        <Box className={classes.google}>
                            <span>OR</span>
                            <GoogleButton
                                style={{ width: '100%', outline: 'none' }}
                                onClick={signInWithGoogle}
                            />
                        </Box>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default AuthModal
