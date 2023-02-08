import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



export default function StoreListings() {
    return (
        <div style={{ margin: "auto" }}>
            <h2 style={{ fontSize: "36px", lineHeight: "50px", marginTop: "20px", textAlign: "center", fontWeight: "normal" }}>Browse stores in NYC</h2>
            <Container style={{ marginTop: "50px", textAlign: "center" }}>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
                    <Row>
                        <Col xs=".5" >
                            <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
                        </Col>
                        <Col style={{textAlign: "left"}}>
                            <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5">
                            <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }} src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/205/3e0e5623-e36a-4d07-9474-c7eac09f8e33.png" roundedCircle />
                        </Col>
                        <Col style={{textAlign: "left"}}>
                            <h5 style={{ fontWeight: "bold" }}>Stop & Shop</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5" >
                            <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }} src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/26/a5a10dd0-7bff-4b1e-975a-cc24fb51c4e0.png" roundedCircle />
                        </Col>
                        <Col md="6">
                            <h5 style={{ fontWeight: "bold" }}>BJ's Wholesale Club</h5>
                            <p>Delivery</p>
                        </Col>
                    </Row>
                </Row>


            </Container>
        </div >
    )
}