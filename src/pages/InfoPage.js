import SubHeader from '../components/SubHeader';
import { Container, Row, Col } from 'reactstrap';
import SummitHouseFullerton from '../app/assets/SummitHouseFullerton.jpeg';
import CandJP4 from '../app/assets/CandJP4.jpeg';
import CandJP5 from '../app/assets/CandJP5.jpeg';
import CandJP6 from '../app/assets/CandJP6.jpeg';
import CandJP14 from '../app/assets/CandJP14.jpeg';
import CandJP21 from '../app/assets/CandJP21.jpeg';

const InfoPage = () => {
    return (
        <div>
            <Container>
                <SubHeader current='Info'/>
            </Container>
            <div className='m-0 info'>
                <div className='text-center pt-5 pb-4'>
                    <h3>Ceremony & Celebration</h3>
                </div>
                <Container className='align-items-center text-center'>
                    <Row className='mt-5 pb-5 align-items-center'>
                        <Col className='col-12 col-sm-4' data-aos='fade-right' data-aos-duration="2000">
                            <i class="fa fa-2x fa-calendar-check-o mb-3 mt-3"/>
                            <h4>Our Wedding Day</h4>
                            <p>Please join us on September 10, 2023 to celebrate our special day</p>
                        </Col>
                        <Col className='col-12 col-sm-4' data-aos='flip-up' data-aos-duration="2000">
                            <i class="fa fa-2x fa-map-o mb-3 mt-3" aria-hidden="true"></i>
                            <h4>Some Wedding Venue</h4>
                            <address>123 S Wedding Rd, Anaheim, CA 12345</address>
                        </Col>
                        <Col class="col-12 col-sm-4 p-0" data-aos="fade-left" data-aos-duration="2000">
                            <img src={SummitHouseFullerton} alt='restaurant' class="img-fluid rounded" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className='align-items-center text-center'>
                <Row className='mt-5 mb-5'>
                    <Col className='col-12 col-md-6'>
                        <Row>
                            <Col className='col-12 col-sm-6 col-lg-6 col-xl-6'>
                                <img src={CandJP4} alt='beach one' className='img-fluid rounded mt-2 mb-2 shadow-lg' data-aos="zoom-in-down" data-aos-duration="2000"/>
                            </Col>
                            <Col className='col-12 col-sm-6 col-lg-6 col-xl-6'>
                                <img src={CandJP5} alt='beach two' className='img-fluid rounded mt-2 mb-2 shadow-lg' data-aos="zoom-in-down" data-aos-duration="2000"/>
                            </Col>
                            <Col className='col-12 col-sm-6 col-lg-6 col-xl-6'>
                                <img src={CandJP6} alt='beach three' className='img-fluid rounded mt-4 mb-2 shadow-lg' data-aos="zoom-in-up" data-aos-duration="2000"/>
                            </Col>
                            <Col className='col-12 col-sm-6 col-lg-6 col-xl-6'>
                                <img src={CandJP14} alt='beach four' className='img-fluid rounded mt-4 mb-2 shadow-lg' data-aos="zoom-in-up" data-aos-duration="2000"/>
                            </Col>
                        </Row>
                    </Col>
                    <Col className='col-12 col-md-6'>
                        <img src={CandJP21} alt='beach five' className='img-fluid rounded mt-2 mb-2 shadow-lg' data-aos="zoom-in-left" data-aos-duration="2000"/>
                    </Col>
                </Row>

            </Container>
        </div>
    )
};

export default InfoPage;