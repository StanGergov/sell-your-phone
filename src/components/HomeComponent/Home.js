import { Carousel, Button } from 'react-bootstrap';

import './Home.css';

const Home = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../../../banner.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="slide-title">Sell your phone</h3>
                    <p>If you want to sell your phone, create your sales ad.</p>
                    <Button variant="danger">Create ad</Button>
                    {/* <p>If you want to sell your phone, you need to login first.</p>
                    <Button variant="danger">Login</Button> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../../../banner.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className="slide-title">Buy a phone</h3>
                    <p>If you want to buy a phone, check what our users have to offer.</p>
                    <Button variant="danger">Check here</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Home;