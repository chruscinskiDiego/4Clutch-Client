import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../../assets/banner2.png';

function HomeCarousel() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner}
                    alt="First slide"
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner}
                    alt="Second slide"
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner}
                    alt="Third slide"
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HomeCarousel;
