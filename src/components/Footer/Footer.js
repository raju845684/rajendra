import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { BsLinkedin, BsTwitter, BsInstagram, BsFacebook, BsSkype } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='rm-footer'>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={6} className="rm-left">
                        <ul>
                            <li><a href="https://www.linkedin.com/in/raju845684" target='_blank'><BsLinkedin /></a></li>
                            <li><a href="skype:Live:.cid.cab3243f53b1fbae?chat" target='_blank'><BsSkype /></a></li>
                            <li><a href="https://www.instagram.com/raju_monty/" target='_blank'><BsInstagram /></a></li>
                            <li><a href="https://www.facebook.com/rajendrakumarmohanty.raju.7" target='_blank'><BsFacebook /></a></li>
                        </ul>
                    </Col>
                    <Col lg={6} md={6} sm={6} className="rm-right">
                        <h6>© All RIght Reciver By Rajendra</h6>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer