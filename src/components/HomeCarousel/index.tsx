
import { Carousel } from 'react-bootstrap';
import banner from '../../assets/banner.png';
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';
import banner3 from '../../assets/banner3.png';
import banner4 from '../../assets/banner4.png';

function HomeCarousel() {
    return (
        <Carousel data-bs-theme="dark w-100">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt=""
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h5>Ouça a galinha!</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h5>Selo valve de qualidade!</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="Third slide"
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h5>O TR tá na base comprando!</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner4}
                    alt="Third slide"
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h5>Atento soldado!</h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HomeCarousel;
