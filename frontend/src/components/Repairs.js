import { Accordion, Card, Jumbotron, Container, Image } from 'react-bootstrap';
import BtnDel from './BtnDel';
import ModalAdd from './ModalAdd';

const Repairs=(props) =>{
    const { car, index, show } = props
    console.log(props)
    return (
    <>
    <ModalAdd id={3} _id={car._id}/>
    {car.repair.length !== 0 ? 
        car.repair.map((repair) => {
            var d = new Date(repair.date);
            var date = d.toUTCString()
            console.log(repair)
                return(
                    <Card.Body>
                        <div className="d-flex justify-content-between" > 
                            <h1>{date}</h1>
                        </div>   
                        <div className="d-flex justify-content-around">
                            <Image src="https://via.placeholder.com/250x100" fluid />
                            <div>
                                <h1>{repair.description}</h1>
                                <BtnDel _id={car._id} id={repair._id}/>
                            </div>
                        </div>
                    </Card.Body>
               )
            })
        :
            <Card.Body className="d-flex">
            <Jumbotron fluid>
                <Container>
                    <h1>No tiene reparaciones</h1>
                </Container>
            </Jumbotron>
            </Card.Body>
    }
    </>
  );
}
export default Repairs