import { Container, Row, Col, } from 'reactstrap';


const Footer = () => {
    return (
        <footer className='site-footer' >
            <Container className='text-center'>
                <Row>
                    <Col>
                        <h4 className='m-4'>ULVES WEDDING</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className='mb-4'>August 19, 2023</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;