import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
    return (
        <>
            {/* <!-- ========== carousel start ========== --> */}
            <section className="mt-2">
                <div className="container">
                    {/* <!-- Carousel --> */}
                    <Carousel>
                        <Carousel.Item>
                            <img src='/public/carousel-1.jpg' width={"100%"} height={500} />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img src='/public/carousel-2.jpg'  width={"100%"} height={500} />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src='/public/carousel-3.jpg'  width={"100%"} height={500} />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>
            {/* <!-- ========== carousel end ========== --> */}
        </>
    );
};

export default Slider;