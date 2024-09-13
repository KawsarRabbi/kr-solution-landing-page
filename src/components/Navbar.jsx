const Navbar = () => {
    return (
        <>
            {/* <!-- ========== navbar start ========== --> */}
            <section>
                <div className="container">
                    <div className="container mt-2">
                        <nav className="navbar navbar-expand-lg navbar-dark" data-aos="fade-down">
                            <div className="container-fluid">
                                <a className="navbar-brand border border-info border-2 px-2" href="#">
                                    KR SOLUTION
                                </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link customActive" aria-current="page" href="#">HOME</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">ABOUT</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">PAGES</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">SERVICES</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">PORTFOLIO</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">BLOG</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">CONTACT</a>
                                        </li>
                                    </ul>
                                    <form className="d-flex" role="search">
                                        <input className="form-control me-2 border border-2 border-info navSearchBox" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-outline-info border border-2 border-info navSearchBtn" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </section>
            {/* <!-- ========== navbar end ========== --> */}
        </>
    );
};

export default Navbar;