import React, { createRef, useState, useEffect } from 'react'
import { BackTop } from 'antd'
import VideoBackground from './VideoBackground/VideoBackground'
// import logo from "./assets/images/execreatorlogo.jpg";
import { LayoutStyles, MainContent } from './assets/styles'
import Logo from './Logo'
import Maps from '../components/Maps/components/Maps'
import About from '../components/AboutUs'
import Services from '../components/Process'
import Contact from '../components/Contact'
import { Row, Col } from 'antd'

const menuList = [
  {
    id: 'maps',
    label: 'Maps',
  },
  {
    id: 'services',
    label: 'Services',
  },
  {
    id: 'about',
    label: 'About Us',
  },
  {
    id: 'contact',
    label: 'Contact Us',
  },
]

export default function MainLayout() {
  const [isTop, setIsTop] = useState(true)

  const refs = menuList.reduce((menu, value) => {
    menu[value.id] = createRef()
    return menu
  }, {})

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset === 0) {
        setIsTop(true)
      } else {
        setIsTop(false)
      }
    }
  })

  const handleMenuClick = (id) =>
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

  return (
    <div>
      <BackTop style={{ right: '20px' }} />
      <div style={isTop ? LayoutStyles.topHeader : LayoutStyles.topHeader2}>
        <Row>
          <Col span={24}>
            <Logo isTop={isTop}></Logo>
            <nav style={LayoutStyles.navMenu}>
              <div>
                <ul
                  style={
                    isTop ? LayoutStyles.navMenu_ul : LayoutStyles.navMenu_ul2
                  }
                >
                  {menuList.map((menu, key) => (
                    <li
                      key={key}
                      style={LayoutStyles.navMenu_ul_li}
                      onClick={() => handleMenuClick(menu.id)}
                    >
                      <p
                        style={
                          isTop
                            ? LayoutStyles.navMenu_ul_li_a
                            : LayoutStyles.navMenu_ul_li_a_black
                        }
                      >
                        {menu.label}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </Col>
        </Row>
      </div>

      <div
        style={{
          width: '100%',
          marginTop: '100vh',
          paddingBottom: '0px',
          marginBottom: '0px',
          position: 'relative !important',
        }}
      >
        <MainContent>
          <Maps refs={refs} />
          <Services refs={refs} />
          <About refs={refs} />
          <Contact refs={refs} />
        </MainContent>
      </div>

      <div style={LayoutStyles.bigTextContainer}>
        <h1
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: '3.5vw',
          }}
        >
          Si Chan Chan lamang natatanging G W A P O.
        </h1>
        <h1 style={{ color: 'white', fontSize: '1.5vw' }}>
          short description.
        </h1>
      </div>

      <VideoBackground />
    </div>
  )
}
