import { Container, Row, Col, Button } from 'reactstrap';
import CassidyandJordanEngagementPhoto1 from '../app/assets/CassidyandJordanEngagementPhoto1.jpeg';
import CandJP119 from '../app/assets/CandJP119.jpeg';

const HomePage = () => {

    return (
        <Container fluid className='mx-0 px-0'>
            <div className='banner-card'>
                <div className='banner-text text-center'>
                    <div className='m-3'>
                        <h3 className='text-light mb-3'>CASSIDY & JORDAN</h3>
                        <h5 className='text-light mb-3'>MONTH 1, 2023</h5>
                        <Button className='btn-sm' variant='secondary'>RSVP NOW</Button>
                    </div>
                </div>
            </div>
            <img src={CassidyandJordanEngagementPhoto1} alt='engagement photo one' className='img-fluid' />
            <Container>
                <Row className='align-items-center row-content text-center'>
                    <Col className='col-12 col-sm-6 bottom'>
                        <img src={CandJP119} alt='festival picture' className='img-fluid rounded mt-5 mb-5 shadow-lg' />
                    </Col>
                    <Col className='col-12 col-sm-6 mt-4 top'>
                        <h3 className='mb-4'>Our Story</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat aliquet ex, tincidunt elementum nunc facilisis nec. In sollicitudin turpis at lacinia volutpat. Fusce dapibus rutrum est in varius. Fusce finibus vestibulum ipsum sit amet lobortis. Aenean eu gravida lorem. Pellentesque eleifend scelerisque fringilla. Ut vitae nunc cursus, porttitor ligula ut, gravida arcu.</p>
                    </Col>
                </Row>
            </Container>
        </Container>
        
    );
}

export default HomePage;