import React, {useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const PollingStation = props => {
    const [candidate1URL, changeCandidate1Url]=useState("data:image/png;base64,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")
    const [candidate2URL, changeCandidate1Ur2]=useState("data:image/png;base64,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")

    const [showresult, changeResultDisplay]=useState(false)
    return (
        <Container>
            <Row>
                <Col className='justify-content-center d-flex'>
                <Container>
                    <Row style={{marginTop: "5vh" , backgroundColor: "#c4c4c4"}}>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            padding: "5vw"
                        }}>
                            <img style={{height: "35vh", width: "20vw"}} src={candidate1URL}></img>
                        </div>
                    </Row>
                    {showresult?<Row className='justify-content-center d-flex' style={{marginTop: "5vh"}}>
                        <div style={{
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "8vw",
                        padding: "10px",
                        backgroundColor: "#c4c4c4"
                    }}>3</div>
                    </Row>:null}
                    <Row style={{marginTop: "5vh"}} className='justify-content-center d-flex'>
                        <Button>View</Button>
                    </Row>
                </Container>
                </Col>
                <Col className='justify-content-center d-flex align-items-center'>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "#c4c4c4",
                        height: "20vh",
                        alignItems: "center",
                        padding: "2vw",
                        textAlign: "center"
                    }}>
                        Who would win?
                    </div>
                </Col>
                <Col className='justify-content-center d-flex'>
                <Container>
                    <Row style={{marginTop: "5vh" , backgroundColor: "#c4c4c4"}}>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            padding: "5vw"
                        }}>
                            <img style={{height: "35vh", width: "20vw"}} src={candidate2URL}></img>
                        </div>
                    </Row>
                    {showresult?<Row className='justify-content-center d-flex' style={{marginTop: "5vh"}}>
                        <div style={{
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "8vw",
                        padding: "10px",
                        backgroundColor: "#c4c4c4"
                    }}>3</div>
                    </Row>:null}
                    <Row style={{marginTop: "5vh"}} className='justify-content-center d-flex'>
                        <Button>View</Button>
                    </Row>
                </Container>
                </Col>
            </Row>
        </Container>
    );
};



export default PollingStation;