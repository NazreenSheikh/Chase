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
import UserSidebar from './UserSidebar'
import { useHistory } from 'react-router-dom'

const Header = () => {
  const { currency, setCurrency, user } = useCrypto()
  const history = useHistory()
  const useStyles = makeStyles((theme) => ({
    title: {
      color: '#011220',
      fontWeight: 'bold',
      flex: 1,
      fontFamily: 'Poppins',
      cursor: 'Pointer',
      letterSpacing: 5,
    },
  }))
  const classes = useStyles()
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Typography
          variant="h6"
          className={classes.title}
          onClick={() => history.push('/')}
        >
          CHASE CRYPTO
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
        {user ? <UserSidebar /> : <AuthModal />}
      </Toolbar>
    </AppBar>
  )
}

export default Header
