import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import heroImg from '../assets/images/hero-img.PNG'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Services from '../services/Services'
import ProductsList from '../components/UI/ProductsList'
import products from '../assets/data/products'
import Clock from '../components/UI/Clock'

const Home = () => {
  const [cookwares, setCookwares] = useState([])
  const [dishes, setDishes] = useState([])
  const [containers, setContainers] = useState([])
  const [spoons, setSpoons] = useState([])
  const [organizers, setOrganizers] = useState([])
  const [gadgets, setGadgets] = useState([])

  const year = new Date().getFullYear()
  useEffect(() => {
    const filteredCookware = products.filter(item => item.category === 'cookwares')

    const filteredDishes = products.filter(item => item.category === 'dishes')

    const filteredContainers = products.filter(item => item.category === 'containers')

    const filteredSpoons = products.filter(item => item.category === 'spoons')

    const filteredOrganizers = products.filter(item => item.category === 'organizers')

    const filteredgadgets = products.filter(item => item.category === 'gadgets')

    setCookwares(filteredCookware)
    setDishes(filteredDishes)
    setSpoons(filteredSpoons)
    setContainers(filteredContainers)
    setOrganizers(filteredOrganizers)
    setGadgets(filteredgadgets)
  }, [])
  return <Helmet title={'Home'}>
    <section className='hero__section'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <p className="hero__subtitle">Trending Kitchen wares in {year}</p>
              <h2>Beautify and organize your kitchen with mordern wares and gadgets</h2>
              <p>We are your number 1 stop for quality and affordable kitchen and home wares.</p>

              <motion.button whileTap={{scale:  1.2}} className="buy__btn">
                <Link to='/shop'>SHOP NOW</Link>
              </motion.button>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src={heroImg} alt="" className='cake__head' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Services/>
    <section className="trending__products">
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className="section__title">Modern Cookwares</h2>
          </Col>
          <ProductsList data={cookwares}/>
        </Row>
      </Container>
    </section>
    <section className="best__sales">
      <Container>
      <Row>
          <Col lg='12' className='text-center'>
            <h2 className="section__title mb-5"> Durable Containers</h2>
          </Col>
          <ProductsList data={containers}/>
        </Row>
      </Container>
    </section>
    <section className="timer__count">
      <Container>
        <Row>
          <Col lg='6' md='12' className='count__down-col'>
            <div className="clock__top-content">
             <h4 className="text-white fs-6 mb-2">
                Limited Offers
             </h4>
             <h3 className="text-white fs-5 mb-3">Quality Ceramic dish</h3>
            </div>
            <div>
              <Clock/>
              <motion.button whileTap={{scale: 1.2}} className="buy__btn store__btn">
                <Link to='/shop'>
                  Visit Store
                </Link>
              </motion.button>
            </div>
          </Col>

          <Col lg='6' md='12' className='text-end counter__img'>
            <img src={heroImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
    <section className="new__arrivals">
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className="section__title">Dishes and Spoons</h2>
          </Col>
          <ProductsList data={dishes}/>
          <ProductsList data={spoons}/>
        </Row>
      </Container>
    </section>
    <section className="popular__category">
    <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className="section__title">Pantry Organizers</h2>
          </Col>
          <ProductsList data={organizers}/>
        </Row>
      </Container>
    </section>
    <section className="popular__category">
    <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className="section__title">Kitchen Gadgets</h2>
          </Col>
          <ProductsList data={gadgets}/>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Home