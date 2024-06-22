import userContext from "../context/userContext";
import Base from "../components/Base";
import { Col, Container, Row } from "reactstrap";

const About = () => {
  return (
    <userContext.Consumer>
      {(object) => (
        <Base>
        <Container className="d-flex justify-content-center  text-center">
          <Row className="card card-header bg-info ">
            
                 
               <h1  style={{color:"Orange"}}> About Page</h1> 
          
          
          <p className="text-primary ">we are building blog website</p>
          {console.log(object)}
          <h1 className="text-secondary">Welcome user: {object.user.login && object.user.data.name}</h1>
        
          </Row>
          </Container>
        </Base>
      )}
    </userContext.Consumer>
  );
};

export default About;
