const Service = () => {
    return (
        <>
            {/* <!-- ========== our services start ========== --> */}
            <section className="mt-5"> 
                <div className="container">
                    <h2 className="text-center py-4 text-light">Our Services</h2>
                    <div className="row g-4">
                        {/* <!-- cards start --> */}
                        <div className="col-lg-3">
                            <div className="card rounded-0 bg-dark text-light border border-secondary">
                                <img src="/public/ui_ux_design.jpg" className="card-img-top rounded-0" alt="card image" height={170} />
                                <div className="card-body">
                                    <h5 className="card-title">UI/UX Design</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                    <a href="#" className="btn btn-outline-info rounded-0">Learn More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="card rounded-0 bg-dark text-light border border-secondary">
                                <img src="/public/web_design.jpg" className="card-img-top rounded-0" alt="card image" height={170} />
                                <div className="card-body">
                                    <h5 className="card-title">Web Design</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                    <a href="#" className="btn btn-outline-info rounded-0">Learn More</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3">
                            <div className="card rounded-0 bg-dark text-light border border-secondary">
                                <img src="/public/web_development.jpg" className="card-img-top rounded-0" alt="card image" height={170} />
                                <div className="card-body">
                                    <h5 className="card-title">Web Development</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                    <a href="#" className="btn btn-outline-info rounded-0">Learn More</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3">
                            <div className="card rounded-0 bg-dark text-light border border-secondary">
                                <img src="/public/seo.jpg" className="card-img-top rounded-0" alt="card image" height={170} />
                                <div className="card-body">
                                    <h5 className="card-title">SEO</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                    <a href="#" className="btn btn-outline-info rounded-0">Learn More</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3">
                            <div className="card rounded-0 bg-dark text-light border border-secondary">
                                <img src="/public/content_writing.jpg" className="card-img-top rounded-0" alt="card image" height={170} />
                                <div className="card-body">
                                    <h5 className="card-title">Content Writing</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                    <a href="#" className="btn btn-outline-info rounded-0">Learn More</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3">
                            <div className="card rounded-0 bg-dark text-light border border-secondary">
                                <img src="/public/digital_marketing.jpg" className="card-img-top rounded-0" alt="card image" height={170} />
                                <div className="card-body">
                                    <h5 className="card-title">Digital Marketing</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                    <a href="#" className="btn btn-outline-info rounded-0">Learn More</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3">
                            <div className="card rounded-0 bg-dark text-light border border-secondary">
                                <img src="/public/graphic_design.png" className="card-img-top rounded-0" alt="card image" height={170} />
                                <div className="card-body">
                                    <h5 className="card-title">Graphic Design</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                    <a href="#" className="btn btn-outline-info rounded-0">Learn More</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3">
                            <div className="card rounded-0 bg-dark text-light border border-secondary">
                                <img src="/public/cybersecurity.jpeg" className="card-img-top rounded-0" alt="card image" height={170} />
                                <div className="card-body">
                                    <h5 className="card-title">Cybersecurity</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                    <a href="#" className="btn btn-outline-info rounded-0">Learn More</a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- cards end --> */}
                    </div>
                </div>
            </section>
            {/* <!-- ========== our services end ========== --> */}
        </>
    );
};

export default Service;