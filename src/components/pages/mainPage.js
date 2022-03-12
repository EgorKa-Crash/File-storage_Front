
// import './App.css';
 import img from '../img/Screenshot_552.jpg'; 
 
function MainPage() { 
    return ( 
        <>
            <meta charSet="utf-8" />
            <title>Bootatraaap</title>
            <meta name="viewport" content="width=device-width, initian-scale=1" />
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                crossOrigin="anonymous"
            />
            <div className="container">
                <div className="row justify-content-center">
                    {/*<div   style="width: 900px;"> class=" container-700"*/}
                    <div
                        className="bg-image"
                    style={{
                      backgroundImage: `url(${img})`,
                      height: 60,
                      width: "100%",
                      backgroundSize: "cover",
                      backgroundPosition: "top center"
                    }}
                    >
                        <div className="text-white">
                            <h1 className="ms-4 ">Heading</h1>
                        </div>
                    </div>
                    <nav
                        className="container sticky-top  p-2  "
                        style={{ backgroundColor: "#ffffff" }}
                    >
                        <div className="row   ">
                            <div className="col-md-3  ">
                                <form className="d-flex m-2">
                                    <input
                                        className="form-control me-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                    <button className="btn btn-outline-success" type="submit">
                                        Search
                                    </button>
                                </form>
                            </div>
                            <div className="col" />
                            <div className="col-md-4 m-2 me-5">
                                <div>
                                    <ul className="nav me-auto  justify-content-md-end">
                                        <li className="nav-item active ">
                                            <a className="btn btn-outline-secondary me-2" href="#">
                                                Main page
                                            </a>
                                        </li>
                                        <li className="nav-item ">

                                            <div className="dropdown">
                                                <button
                                                    className="btn btn-secondary dropdown-toggle"
                                                    type="button"
                                                    id="dropdownMenuButton1"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    User
                                                </button>
                                                <ul
                                                    className="dropdown-menu"
                                                    aria-labelledby="dropdownMenuButton1"
                                                >
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Exit
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Manual
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Admin page
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className="col-md-3 p-2" style={{ backgroundColor: "#ddeeff" }}>
                        <div className="list-group   m-2 ">
                            <a
                                href="#"
                                className="list-group-item list-group-item-action active"
                                aria-current="true"
                            >
                                Search results
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                                A second link item
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                                A third link item
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                                A fourth link item
                            </a>
                        </div>
                        <div className="accordion m-2" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseOne"
                                        aria-expanded="true"
                                        aria-controls="panelsStayOpen-collapseOne"
                                        style={{ backgroundColor: "#c1daff" }}
                                    >
                                        Subscriptions
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapseOne"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingOne"
                                >
                                    <div className="list-group list-group-flush">
                                        <a href="#" className="list-group-item list-group-item-action">
                                            A second link item
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action">
                                            A third link item
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action">
                                            A fourth link item
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action">
                                            A disabled link item
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseTwo"
                                        style={{ backgroundColor: "#c1daff" }}
                                    >
                                        Followers
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingTwo"
                                >
                                    <div className="list-group list-group-flush">
                                        <a href="#" className="list-group-item list-group-item-action">
                                            A second link item
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action">
                                            A third link item
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action">
                                            A fourth link item
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action">
                                            A disabled link item
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-md-9 p-2 row-cols-auto"
                        style={{ backgroundColor: "#c1daff" }}
                    >
                        <div
                            className="row rounded p-2 m-2 "
                            style={{ backgroundColor: "#63adcf" }}
                        >
                            <div className="container">
                                <div
                                    className="row p-2 m-2 "
                                    style={{ backgroundColor: "#63adcf" }}
                                >
                                    <div
                                        className="col-md-auto p-2   fs-3 "
                                        style={{ fontWeight: "bold" }}
                                    >
                                        Трус
                                    </div>
                                    <div className="col" />
                                    <div className="col-md-auto p-2   ">
                                        <a href="#" className="btn btn-primary">
                                            Add file
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="row rounded p-2 m-2 "
                                    style={{ backgroundColor: "#ffffff" }}
                                >
                                    <div className="col-md-auto p-2">обезьяна.png</div>
                                    <div className="col-md-auto p-2">1.2 mb</div>
                                    <div className="col" />
                                    <div className="col-sm-3">
                                        <select
                                            className="form-select"
                                            aria-label="Default select example"
                                        >
                                            <option selected="">Private</option>
                                            <option value={1}>Public</option>
                                            <option value={2}>Private</option>
                                            <option value={3}>Group</option>
                                        </select>
                                    </div>
                                    <div className="col-md-auto ">
                                        <a href="#" className="btn btn-primary">
                                            Download
                                        </a>
                                    </div>
                                    <div className="col-md-auto ">
                                        <a href="#" className="btn btn-primary">
                                            Delete
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="row rounded p-2 m-2"
                                    style={{ backgroundColor: "#ffffff" }}
                                >
                                    <div className="col-md-auto p-2">обезьяна.png</div>
                                    <div className="col-md-auto p-2">1.2 mb</div>
                                    <div className="col" />
                                    <div className="col-sm-3">
                                        <select
                                            className="form-select"
                                            aria-label="Default select example"
                                        >
                                            <option selected="">Private</option>
                                            <option value={1}>Public</option>
                                            <option value={2}>Private</option>
                                            <option value={3}>Group</option>
                                        </select>
                                    </div>
                                    <div className="col-md-auto ">
                                        <a href="#" className="btn btn-primary">
                                            Download
                                        </a>
                                    </div>
                                    <div className="col-md-auto ">
                                        <a href="#" className="btn btn-primary">
                                            Delete
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="row rounded p-2 m-2"
                                    style={{ backgroundColor: "#ffffff" }}
                                >
                                    <div className="col-md-auto p-2">обезьяна.png</div>
                                    <div className="col-md-auto p-2">1.2 mb</div>
                                    <div className="col" />
                                    <div className="col-sm-3">
                                        <select
                                            className="form-select"
                                            aria-label="Default select example"
                                        >
                                            <option selected="">Private</option>
                                            <option value={1}>Public</option>
                                            <option value={2}>Private</option>
                                            <option value={3}>Group</option>
                                        </select>
                                    </div>
                                    <div className="col-md-auto ">
                                        <a href="#" className="btn btn-primary">
                                            Download
                                        </a>
                                    </div>
                                    <div className="col-md-auto ">
                                        <a href="#" className="btn btn-primary">
                                            Delete
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="row rounded p-2 m-2 "
                            style={{ backgroundColor: "#63adcf" }}
                        >
                            <div className="container">
                                <div
                                    className="row p-2 m-2 "
                                    style={{ backgroundColor: "#63adcf" }}
                                >
                                    <div
                                        className="col-md-auto p-2 fs-3"
                                        style={{ fontWeight: "bold" }}
                                    >
                                        Балбес
                                    </div>
                                </div>
                                <div
                                    className="row rounded p-2 m-2 "
                                    style={{ backgroundColor: "#ffffff" }}
                                >
                                    <div className="col-md-auto p-2">обезьяна.png</div>
                                    <div className="col-md-auto p-2">1.2 mb</div>
                                    <div className="col" />
                                    <div className="col-md-auto ">
                                        <a href="#" className="btn btn-primary">
                                            Download
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="row rounded p-2 m-2 "
                                    style={{ backgroundColor: "#ffffff" }}
                                >
                                    <div className="col-md-auto p-2">обезьяна.png</div>
                                    <div className="col-md-auto p-2">1.2 mb</div>
                                    <div className="col" />
                                    <div className="col-md-auto ">
                                        <a href="#" className="btn btn-primary">
                                            Download
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="row rounded p-2 m-2 "
                                    style={{ backgroundColor: "#ffffff" }}
                                >
                                    <div className="col-md-auto p-2">обезьяна.png</div>
                                    <div className="col-md-auto p-2">1.2 mb</div>
                                    <div className="col" />
                                    <div className="col-md-auto ">
                                        <a href="#" className="btn btn-primary">
                                            Download
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="row rounded p-2 m-2 "
                            style={{ backgroundColor: "#63adcf" }}
                        >
                            <div className="container">
                                <div
                                    className="row p-2 m-2 "
                                    style={{ backgroundColor: "#63adcf" }}
                                >
                                    <div className="col-md-auto p-2 fs-4">Бывалый</div>
                                </div>
                                <div
                                    className="row rounded p-2 m-2 "
                                    style={{ backgroundColor: "#ffffff" }}
                                >
                                    <div className="col-md-auto p-2">обезьяна.png</div>
                                    <div className="col-md-auto p-2">1.2 mb</div>
                                    <div className="col" />
                                    <div className="col-md-auto ">
                                        <a href="#" className="btn btn-primary">
                                            Download
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="row rounded p-2 m-2 "
                                    style={{ backgroundColor: "#ffffff" }}
                                >
                                    <div className="col-md-auto p-2">обезьяна.png</div>
                                    <div className="col-md-auto p-2">1.2 mb</div>
                                    <div className="col" />
                                    <div className="col-md-auto ">
                                        <a href="#" className="btn btn-primary">
                                            Download
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="row rounded p-2 m-2 "
                                    style={{ backgroundColor: "#ffffff" }}
                                >
                                    <div className="col-md-auto p-2">обезьяна.png</div>
                                    <div className="col-md-auto p-2">1.2 mb</div>
                                    <div className="col" />
                                    <div className="col-md-auto ">
                                        <a href="#" className="btn btn-primary">
                                            Download
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
export default MainPage;