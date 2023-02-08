import SubHeader from '../components/SubHeader';
import { Container, Row, Col, Button } from 'reactstrap';
import ring from '../app/assets/ring.jpeg';
import hotel from '../app/assets/hotel.jpeg';
import gift from '../app/assets/gift.jpeg';
import RsvpModal from '../features/RsvpModal';

const ReservationPage = () => {
    return (

        <div>
            <Container>
                <SubHeader current='Reservation' />
            </Container>
            <Container>
                <Row className='mt-5 mb-5 align-items-center' data-aos="fade-left" data-aos-offset="500" data-aos-duration="1000">
                    <Col className='col-12 col-sm-6 col-lg-6 col-xl-6' >
                        <p>Join us on our special day</p>
                        <h3>Reserve your spot</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat aliquet ex, tincidunt elementum nunc facilisis nec. In sollicitudin turpis at lacinia volutpat. Fusce dapibus rutrum est in varius. Fusce finibus vestibulum ipsum sit amet lobortis. Aenean eu gravida lorem. Pellentesque eleifend scelerisque fringilla. Ut vitae nunc cursus, porttitor ligula ut, gravida arcu.</p>
                        <RsvpModal />
                    </Col>
                    <Col className='bottom'>
                        <img src={ring} alt='ring' className='img-fluid rounded mt-2 mb-2 shadow-lg' />
                    </Col>
                </Row>
                <Row className='mb-5 align-items-center' data-aos="fade-right" data-aos-offset="500" data-aos-duration="1000">
                    <Col className='col-12 col-sm-6 col-lg-6 col-xl-6 top'>
                        <img src={hotel} alt='hotel' className='img-fluid rounded mt-2 mb-2 shadow-lg' />
                    </Col>
                    <Col>
                        <p>Places to stay</p>
                        <h3>Accomodations</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat aliquet ex, tincidunt elementum nunc facilisis nec. In sollicitudin turpis at lacinia volutpat. Fusce dapibus rutrum est in varius. Fusce finibus vestibulum ipsum sit amet lobortis. Aenean eu gravida lorem. Pellentesque eleifend scelerisque fringilla. Ut vitae nunc cursus, porttitor ligula ut, gravida arcu.</p>
                        <Button variant="secondary">
                            BOOK
                        </Button>
                    </Col>
                </Row>
                <Row className='mt-5 mb-5 align-items-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                    <Col className='col-12 col-sm-6 col-lg-6 col-xl-6'>
                        <p>Please check out our registry</p>
                        <h3>Registry</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat aliquet ex, tincidunt elementum nunc facilisis nec. In sollicitudin turpis at lacinia volutpat. Fusce dapibus rutrum est in varius. Fusce finibus vestibulum ipsum sit amet lobortis. Aenean eu gravida lorem. Pellentesque eleifend scelerisque fringilla. Ut vitae nunc cursus, porttitor ligula ut, gravida arcu.</p>
                        <Button variant="secondary">
                            REGISTRY
                        </Button>
                    </Col>
                    <Col className='bottom'>
                        <img src={gift} alt='gift' className='img-fluid rounded mt-2 mb-2 gift shadow-lg' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default ReservationPage;