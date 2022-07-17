import { Container, Row, Col, Button } from "reactstrap";
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from "../features/campsites/CampsitesList";
import { selectRandomCampsite } from "../features/campsites/campsitesSlice";

const CampSitesDirectoryPage = () => {
    const selectedCampsite = selectRandomCampsite();

    return (
        <Container>
            <Row>
                {/* CampsitesList Column */}
                <Col sm='5' md='7'>
                    <CampsitesList />
                </Col>
                {/* CampsitesDetail Column */}
                <Col sm='7' md='5'>
                    <CampsiteDetail campsite={selectedCampsite}/>
                </Col>
            </Row>
        </Container>
    );
};

export default CampSitesDirectoryPage