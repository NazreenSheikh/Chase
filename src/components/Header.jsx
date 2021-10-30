import React from 'react'
import AuthModal from './Authentication/AuthModal'
import { useCrypto } from '../context/CryptoContext'
import {
  AppBar,
  Toolbar,
  Typography,
  Select,
  makeStyles,
  MenuItem,
} from '@material-ui/core'

const Header = () => {
  const { currency, setCurrency } = useCrypto()
  const useStyles = makeStyles((theme) => ({
    title: {
      color: theme.palette.primary.main,
      fontWeight: 'bold',
      flex: 1,
      fontFamily: 'Poppins',
      cursor: 'Pointer',
    },
  }))
  const classes = useStyles()
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Chase
        </Typography>
        <Select
          variant="outlined"
          style={{
            width: 100,
            height: 40,
            marginLeft: 15,
          }}
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <MenuItem value={'USD'}>USD</MenuItem>
          <MenuItem value={'INR'}>INR</MenuItem>
        </Select>
        <AuthModal />
      </Toolbar>
    </AppBar>
  )
}

export default Header
