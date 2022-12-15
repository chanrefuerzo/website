import styled from 'styled-components'
import { Carousel } from 'antd'

export const AppCarousel = styled(Carousel)`
  textalign: center;
  height: 100%;
  lineheight: 600px;
  background: none;
  overflow: hidden;
`

export const VideoOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.65);
  height: 100%;
  left: 0;
  position: relative;
  top: 0;
  transition: background-color 300ms ease;
  width: 100%;
`

export const Video = styled.video`
  backface-visibility: hidden;
  background: url('https://constantintegratedph.com/wp-content/uploads/2018/03/7-Reasons-Why-Anyone-Should-Move-to-Davao-For-Retirement.jpg')
    no-repeat scroll 0 0 #000;
  background-size: cover;
  bottom: 0;
  height: auto;
  min-height: 100%;
  min-width: 100%;
  width: 100%;
  perspective: 1000;
  position: fixed;
  right: 0;
  z-index: 0;
`
export const MainContent = styled.div`
  padding: 2.5rem 0;
  position: relative;
  z-index: 1;
`

export const Yellow = styled.span`
  color: yellow !important;
`

export const LayoutStyles = {
  // FrontPage / Carousel Area

  bigTextContainer: {
    color: '#ffffff',
    position: 'absolute',
    top: '20%',
    left: '5%',
    width: '60%',
    minheight: '30vh',
    padding: '5%',
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0, 0.4)',
    textAlign: 'left',
  },

  smallTextContainer: {
    color: '#ffffff',
    position: 'absolute',
    top: '70%',
    left: '5%',
    width: '60%',
    padding: '30px',
    backgroundColor: 'rgba(0,0,0, 0.3)',
    zIndex: 1,
  },

  // Navigation Menu

  navMenu: {
    zIndex: '3',
    position: 'sticky',
    width: '100%',
    lineHeight: '50px',
  },
  navMenu2: {
    zIndex: '3',
    position: 'sticky',
    width: '100%',
    lineHeight: '50px',
  },
  navMenu_ul: {
    float: 'right',
    margin: '0px',
    paddingRight: '42px',
    paddingTop: '10px',
    fontWeight: 'bold',
    transition: 'all 0.5s ease',
  },
  navMenu_ul2: {
    float: 'right',
    margin: '0px',
    paddingRight: '42px',
    paddingTop: '0px',
    fontWeight: 'bold',
    transition: 'all 0.5s ease',
  },
  navMenu_ul_li: {
    display: 'inline-block',
    padding: '16px 32px',
    cursor: 'pointer',
  },
  navMenu_ul_li_a: {
    textDecoration: 'none',
    color: 'rgba(255,255,255, 0.8)',
    fontSize: '15px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  navMenu_ul_li_a_black: {
    textDecoration: 'none',
    color: 'rgba(0,0,0, 0.9)',
    fontSize: '15px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },

  // Header Container / Nav Container

  topHeader: {
    position: 'fixed',
    top: 0,
    zIndex: 10,
    width: '100%',
    background: 'none',
    height: '0px',
    transition: 'all 0.5s ease',
  },
  topHeader2: {
    position: 'fixed !important',
    top: 0,
    zIndex: 10,
    width: '100%',
    background: 'white',
    height: '70px',
    transition: 'all 0.5s ease',
  },

  // Logo

  logoContainer: {
    color: 'white',
    lineHeight: '1.5',
    fontFamily: 'gotham-xlight',
    display: 'block',
    float: 'left',
    transition: ' all 0.5s ease',
    marginTop: '30px',
    marginLeft: '30px',
  },

  logoContainer2: {
    color: 'black',
    lineHeight: '1.5',
    fontFamily: 'gotham-xlight',
    display: 'block',
    float: 'left',
    transition: 'all 0.5s ease',
    marginTop: '0px',
    marginLeft: '50px',
  },

  logoBigText: {
    fontSize: '25px',
    letterSpacing: '3px',
  },

  logoSmallText: {
    fontSize: '17px',
    letterSpacing: '1px',
  },
}
