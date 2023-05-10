import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import './footer.css'

const Footer = () => {
  const year = new Date().getFullYear()
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='4' md='6' className='mb-4'>
        <div className="logo">
            <div>
              <h1 className='text-white'>ModernHome</h1>
            </div>
          </div>
          <p className="footer__text mt-4">
          We are your number 1 stop for quality and affordable kitchen and home wares.
            </p>
        </Col>
        <Col lg='3' md='3' className='mb-4'>
          <div className="footer__quick-links">
            <h4 className="quick__links-title">Top Categories</h4>
            <ListGroup className='mb-3'>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Cookwares</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Dishes and sppons</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Containers and Organizers</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Kitchen Gadgets</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg='2' md='3' className='mb-4'>
        <div className="footer__quick-links">
            <h4 className="quick__links-title">Useful Links</h4>
            <ListGroup className='mb-3'>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/shop'>Shop</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/cart'>Cart</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/login'>Login</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Privacy Policy</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg='3' md='4'>
        <div className="footer__quick-links">
            <h4 className="quick__links-title">Contact</h4>
            <ListGroup className='footer__contact'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class='ri-map-pin-line footer__icon'></i></span>
                <p>123 Osapa london, Lekki, Lagos</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class='ri-phone-line footer__icon'></i></span>
                <p>+2349075228079</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class='ri-mail-line footer__icon'></i></span>
                <p>themyturpeokesanya@gmail.com</p>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg='12'>
          <p className="footer__copyright">Copyright {year} developed by Temitope Okesanya. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer