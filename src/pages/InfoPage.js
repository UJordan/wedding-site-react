import SubHeader from '../components/SubHeader';
import { Container, Row, Col } from 'reactstrap';
import SummitHouseFullerton from '../app/assets/SummitHouseFullerton.jpeg';

const InfoPage = () => {
    return (
        <div>
            <Container>
                <SubHeader current='Info'/>
            </Container>
            <div className='m-0 info'>
                <Container className='text-center pt-5 pb-4'>
                    <h3>Ceremony & Celebration</h3>
                </Container>
                <Container className='align-items-center text-center'>
                    <Row className='mt-5 pb-5'>
                        <Col className='col-4'>
                            <i class="fa fa-2x fa-calendar-check-o mb-3"/>
                            <h4>Our Wedding Day</h4>
                            <p>Please join us on September 10, 2023 to celebrate our special day</p>
                        </Col>
                        <Col className='col-4'>
                            <i class="fa fa-2x fa-map-o mb-3 mt-3" aria-hidden="true"></i>
                            <h4>Some Wedding Venue</h4>
                            <address>123 S Wedding Rd, Anaheim, CA 12345</address>
                        </Col>
                        <Col class="col-4 p-0" data-aos="fade-left">
                            <img src={SummitHouseFullerton} class="img-fluid rounded" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                Insert images here

            </Container>
        </div>
    )
};

export default InfoPage;