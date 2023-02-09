import { Accordion, Card, Jumbotron, Container, Image } from 'react-bootstrap';
import ModalAdd from './ModalAdd';

const Repairs=(props) =>{
    const { car, index } = props
    return (
    <>
    <ModalAdd id={3} _id={car._id}/>
    {car.repair.length !== 0 ? 
           car.repair.map((repair) => {
            var d = new Date(repair.date);
            var date = d.toUTCString();
               return(
                <Accordion.Collapse eventKey={index} key={car.repair._id}>
                    <Card.Body>
                        <div className="d-flex justify-content-between" > 
                            <h1>{date}</h1>
                        </div>   
                        <div className="d-flex justify-content-around">
                            <Image src="https://via.placeholder.com/400x400" fluid />
                            <h1>{repair.description}</h1>
                        </div>
                        <div>
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
               )
            })
        :
        <Accordion.Collapse eventKey={index}>
            <Card.Body className="d-flex">
            <Jumbotron fluid>
                <Container>
                    <h1>No tiene reparaciones</h1>
                </Container>
            </Jumbotron>
            </Card.Body>
        </Accordion.Collapse>
    }
    </>
  );
}
export default Repairs