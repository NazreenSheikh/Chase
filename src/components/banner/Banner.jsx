import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
// import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  banner: {
    // backgroundImage: 'url(./banner2.jpg)',
  },
  bannerContent: {
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 25,
    justifyContent: 'space-around',
  },
  tagline: {
    display: 'flex',
    height: '40%',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#252224',
  },
  carousel: {
    height: '50%',
    display: 'flex',
    alignItems: 'center',
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
              color: '#39322f',
              textTransform: 'capitalize',
              fontFamily: 'Poppins',
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </div>
        {/* <Carousel /> */}
      </Container>
    </div>
  )
}

export default Banner
