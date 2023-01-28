import { Container, Row, Col } from 'reactstrap';
import CassidyandJordanEngagementPhoto1 from '../app/assets/CassidyandJordanEngagementPhoto1.jpeg';
import festival from '../app/assets/festival.jpeg';
import SubHeader from '../components/SubHeader';

const HomePage = () => {

    return (
        <Container fluid className='mx-0 px-0'>
            <img src={CassidyandJordanEngagementPhoto1} alt='engagement photo one' className='img-fluid' />
            <Container>
                <Row className='align-items-center row-content text-center'>
                    <Col className='col-12 col-sm-6 bottom'>
                        <img src={festival} alt='festival picture' className='img-fluid mt-5 mb-5 rounded-circle' />
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