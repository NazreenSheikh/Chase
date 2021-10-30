import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Carousel from './Carousel'

const useStyles = makeStyles((theme) => ({
  bannerContent: {
    height: 700,
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    justifyContent: 'space-around',
    maxWidth: '100vw',
  },
  tagline: {
    display: 'flex',
    height: '85%',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    backgroundImage: 'url(./banner.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}))

function Banner() {
  const classes = useStyles()

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: 'bold',
              marginBottom: 15,
              fontFamily: 'Poppins',
            }}
          >
            Chase Crypto
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: 'white',
              textTransform: 'capitalize',
              fontFamily: 'Poppins',
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  )
}

export default Banner
