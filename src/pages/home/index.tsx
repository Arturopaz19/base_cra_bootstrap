import Assets from "assets/Assets";
import { Button } from "components";
import { Container } from "react-bootstrap";

const Home = () => {
    return (
        <Container className='my-5' style={{textAlign: "center"}}>
            <h1>{"Home Page"}</h1>
            <img width={100} src={Assets.images['reactLogo']} alt="react-logo" />
            <p>this is a simple react page with React Bootstrap</p>
            <Button>Hello Button</Button>
        </Container>
    )
}
export default Home;