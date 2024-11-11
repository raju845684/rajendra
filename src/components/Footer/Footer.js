import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { BsLinkedin, BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='rm-footer'>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={6} className="rm-left">
                        <ul>
                            <li><Link to=""><BsLinkedin /></Link></li>
                            <li><Link to=""><BsTwitter /></Link></li>
                            <li><Link to="https://www.instagram.com/raju_monty/" ><BsInstagram /></Link></li>
                            <li><Link to=""><BsFacebook /></Link></li>
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