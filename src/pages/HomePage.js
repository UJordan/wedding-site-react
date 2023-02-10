import { Container, Row, Col } from 'reactstrap';
import CountdownTimer from '../features/CountdownTimer';
import RsvpModal from '../features/RsvpModal';
import CassidyandJordanEngagementPhoto1 from '../app/assets/CassidyandJordanEngagementPhoto1.jpeg';
import CandJP119 from '../app/assets/CandJP119.jpeg';


const HomePage = () => {
    

    return (
        <Container fluid className='mx-0 px-0'>
            <div data-aos='zoom-in' data-aos-duration='1000'>
                <div className='banner-card'>
                    <div className='banner-text text-center'>
                        <div className='m-2'>
                            <h3 className='text-light mb-1' style={{ fontSize: '3.5vw'}}><strong>CASSIDY & JORDAN</strong></h3>
                            <h5 className='text-light mb-1' style={{ fontSize: '3.5vw'}}>Month 1, 2023</h5>
                            <div>
                                <CountdownTimer />
                            </div>
                            <div>
                                <RsvpModal />
                            </div>
                        </div>
                    </div>
                </div>
                <img src={CassidyandJordanEngagementPhoto1} alt='engagement photo one' className='img-fluid' />
            </div>
            <Container>
                <Row className='align-items-center row-content text-center'>
                    <Col className='col-12 col-sm-6 bottom' >
                        <img src={CandJP119} alt='festival picture' className='img-fluid rounded mt-5 mb-5 shadow-lg' data-aos='fade-right' data-aos-duration="1000" data-aos-easing="ease-in-sine" />
                    </Col>
                    <Col className='col-12 col-sm-6 mt-4 top'>
                        <h3 className='mb-4'>Our Story</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat aliquet ex, tincidunt elementum nunc facilisis nec. In sollicitudin turpis at lacinia volutpat. Fusce dapibus rutrum est in varius. Fusce finibus vestibulum ipsum sit amet lobortis. Aenean eu gravida lorem. Pellentesque eleifend scelerisque fringilla. Ut vitae nunc cursus, porttitor ligula ut, gravida arcu.</p>
                    </Col>
                </Row>
            </Container>
        </Container>
        
    );
};

export default HomePage;