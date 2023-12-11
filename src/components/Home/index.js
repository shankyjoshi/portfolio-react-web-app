import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import Nav from "../Nav";

function Home() {
  return (
    <div className="container-fluid">
      <br />
      <p className="display-6">Hi 'username',</p>
      <form
        class="form-inline my-2 my-lg-0 float-end"
        style={{
          display: "inline-flex",
          float: "right",
          position: "relative",
        }}
      >
        <input
          class="form-control mr-sm-2 float-end"
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{
            display: "inline-flex",
            float: "right",
            position: "relative",
          }}
        />
        &nbsp;
        <button
          class="btn btn-outline-dark my-2 my-sm-0 float-end"
          type="submit"
          style={{
            display: "inline-flex",
            float: "right",
            position: "relative",
          }}
        >
          Search
        </button>
      </form>
      <br />
      Feel free to choose any of the below templates to your liking:
      <br />
      <br />
      <div class="row">
        {/* <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4  mt-5"> */}
        <div className="card col-sm-12 col-md-6 col-lg-6 col-xl-4  mt-5">
          <div className="card-header card-header-style">
            <FontAwesomeIcon
              icon={"ellipsis-vertical"}
              style={{ float: "right", color: "white" }}
            ></FontAwesomeIcon>
            Template 1
          </div>
          <div className="card-body">
            <img
              class="card-img-top"
              src="sampleTemp1.jpg"
              alt="Card image cap"
            />
            <h5
              className="card-title"
              style={{ color: "#4682b4", fontSize: "medium" }}
            >
              <br></br>
              <button className="btn btn-danger btn-sm float-end">
                Preview
              </button>
            </h5>
          </div>
        </div>
        {/* temp-2 */}
        <div className="card col-sm-12 col-md-6 col-lg-6 col-xl-4  mt-5">
          <div className="card-header card-header-style">
            <FontAwesomeIcon
              icon={"ellipsis-vertical"}
              style={{ float: "right", color: "white" }}
            ></FontAwesomeIcon>
            Template 2
          </div>
          <div className="card-body">
            <img
              class="card-img-top"
              src="sampleTemp2.jpg"
              alt="Card image cap"
            />
            <h5
              className="card-title"
              style={{ color: "#4682b4", fontSize: "medium" }}
            >
              <br></br>
              <button className="btn btn-danger btn-sm float-end">
                Preview
              </button>
            </h5>
          </div>
        </div>
        {/* temp-3 */}
        <div className="card col-sm-12 col-md-6 col-lg-4 col-xl-3  mt-5">
          <div className="card-header card-header-style">
            <FontAwesomeIcon
              icon={"ellipsis-vertical"}
              style={{ float: "right", color: "white" }}
            ></FontAwesomeIcon>
            Template 3
          </div>
          <div className="card-body">
            <img
              class="card-img-top"
              src="sampleTemp3.jpg"
              alt="Card image cap"
            />
            <h5
              className="card-title"
              style={{ color: "#4682b4", fontSize: "medium" }}
            >
              <br></br>
              <button className="btn btn-danger btn-sm float-end">
                Preview
              </button>
            </h5>
          </div>
        </div>
        {/* temp-4 */}
        <div className="card col-sm-12 col-md-6 col-lg-4 col-xl-3  mt-5">
          <div className="card-header card-header-style">
            <FontAwesomeIcon
              icon={"ellipsis-vertical"}
              style={{ float: "right", color: "white" }}
            ></FontAwesomeIcon>
            Template 3
          </div>
          <div className="card-body">
            <img
              class="card-img-top"
              src="sampleTemp3.jpg"
              alt="Card image cap"
            />
            <h5
              className="card-title"
              style={{ color: "#4682b4", fontSize: "medium" }}
            >
              <br></br>
              <button className="btn btn-danger btn-sm float-end">
                Preview
              </button>
            </h5>
          </div>
        </div>
        {/* temp-5 */}
        <div className="card col-sm-12 col-md-6 col-lg-4 col-xl-3  mt-5">
          <div className="card-header card-header-style">
            <FontAwesomeIcon
              icon={"ellipsis-vertical"}
              style={{ float: "right", color: "white" }}
            ></FontAwesomeIcon>
            Template 3
          </div>
          <div className="card-body">
            <img
              class="card-img-top"
              src="sampleTemp3.jpg"
              alt="Card image cap"
            />
            <h5
              className="card-title"
              style={{ color: "#4682b4", fontSize: "medium" }}
            >
              <br></br>
              <button className="btn btn-danger btn-sm float-end">
                Preview
              </button>
            </h5>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Home;
