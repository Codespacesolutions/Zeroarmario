import React from 'react'
import { Container } from 'react-bootstrap'
import NavBar from '../../../components/NavBar'

function ProductDetail1() {
  return (
    <div>
        <NavBar/><br/><br/><br/><br/>
        <Container style={{marginLeft:"140px"}}>
            <p>Home/Men/Round neck Tee/2044 day call</p>
            <div className="d-flex justify-content-between">
                <div>
                    <img src='' />
                </div>
                <div>Desc</div>
            </div>
        </Container>
    </div>
  )
}

export default ProductDetail1