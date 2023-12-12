import { useState } from "react";
import "./index.css";

function Profile() {
  const { editStatus, setEditStatus } = useState("disabled");
  /*  */
  return (
    <div className="container-fluid">
      <br />
      <div className="container-fluid display-6">Profile Details</div>
      {/* <div className="container-fluid"> */}
      {/* <br /> */}
      {/* <span className="info-subtype"> Personal Information </span> */}
      <table>
        <tr>
          <td className="displayPicture" style={{ paddingTop: "1%" }}>
            <button
              className="edit-image btn btn-light"
              style={{ float: "right", padding: "1%" }}
            >
              Edit Image
            </button>
            <br />
            <br />
            <img
              class="rounded-circle profile-image"
              alt="avatar1"
              src="image.jpg"
            />
          </td>
          <td>
            <form className="form-group personal-info">
              <span className="info-subtype"> Personal Information </span>
              <br />
              <table>
                {/* FIRST NAME */}
                <tr>
                  <td>
                    <label for="firstName" className="form-group">
                      {" "}
                      First Name:{" "}
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-group textFields"
                      id="firstName"
                      placeholder="Shreya"
                    ></input>
                  </td>
                </tr>
                {/* LAST NAME */}
                <tr>
                  <td>
                    <label for="lastName" className="form-group">
                      {" "}
                      Last Name:{" "}
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-group textFields"
                      id="lastName"
                      placeholder="Agrawal"
                    ></input>
                  </td>
                </tr>
                {/* CITY */}
                <tr>
                  <td>
                    <label for="city" className="form-group">
                      {" "}
                      City:{" "}
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-group textFields"
                      id="city"
                      placeholder="Boston"
                    ></input>
                  </td>
                </tr>
                {/* STATE */}
                <tr>
                  <td>
                    <label for="state" className="form-group">
                      {" "}
                      State/Province/Region:{" "}
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-group textFields"
                      id="state"
                      placeholder="Massachussets"
                    ></input>
                  </td>
                </tr>
                {/* ZIP/ POSTAL CODE */}
                <tr>
                  <td>
                    <label for="state" className="form-group">
                      {" "}
                      Zip/ Postal Code:{" "}
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-group textFields"
                      id="state"
                      placeholder="02120"
                    ></input>
                  </td>
                </tr>
              </table>
              <br />
              <span className="info-subtype"> Social Media </span>
              <br />
              <table>
                {/* LinkedIn */}
                <tr>
                  <td className="leftTd2">
                    <label for="linkedin" className="form-group">
                      {" "}
                      LinkedIn:{" "}
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-group textFields"
                      id="linkedin"
                      placeholder="agrawalshreya"
                    ></input>
                  </td>
                </tr>
                {/* GitHub */}
                <tr>
                  <td className="leftTd2">
                    <label for="gitHub" className="form-group">
                      {" "}
                      GitHub:{" "}
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-group textFields"
                      id="gitHub"
                      placeholder="shreya2agrawal"
                    ></input>
                  </td>
                </tr>
                {/* Twitter */}
                <tr>
                  <td className="leftTd2">
                    <label for="twitter" className="form-group">
                      {" "}
                      Twitter:{" "}
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-group textFields"
                      id="twitter"
                      placeholder="twitter@shreya"
                    ></input>
                  </td>
                </tr>
                {/* Portfolio */}
                <tr>
                  <td className="leftTd2">
                    <label for="portfolio" className="form-group">
                      {" "}
                      Portfolio:{" "}
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-group textFields"
                      id="ortfolio"
                      placeholder="portfolio"
                    ></input>
                  </td>
                </tr>
              </table>
              <br />
              <span className="info-subtype"> Work Experience </span>
              <br />
              <table>
                {/* Company */}
                <tr>
                  <td className="leftTd">
                    <label for="company" className="form-group">
                      {" "}
                      Company:{" "}
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-group textFields"
                      id="company"
                      placeholder="Company"
                    ></input>
                  </td>
                </tr>
                {/* Position */}
                <tr>
                  <td className="leftTd">
                    <label for="position" className="form-group">
                      {" "}
                      Position:{" "}
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-group textFields"
                      id="position"
                      placeholder="Software Engineer"
                    ></input>
                  </td>
                </tr>
                {/* Location */}
                <tr>
                  <td className="leftTd">
                    <label for="location" className="form-group">
                      {" "}
                      Location:{" "}
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-group textFields"
                      id="location"
                      placeholder="Maine"
                    ></input>
                  </td>
                </tr>
                {/* Employment Type */}
                <tr>
                  <td className="leftTd">
                    <label for="employeeType" className="form-group">
                      {" "}
                      Employment Type:{" "}
                    </label>
                  </td>
                  <td>
                    <select className="form-group textFields" id="employeeType">
                      <option>Full-Time</option>
                      <option>Part-Time</option>
                      <option>Contract</option>
                    </select>
                  </td>
                </tr>
                {/* Description */}
                <tr>
                  <td className="leftTd">
                    <label for="description" className="form-group">
                      {" "}
                      Description:{" "}
                    </label>
                  </td>
                  <td>
                    <textarea
                      id="description"
                      placeholder="Description"
                    ></textarea>
                  </td>
                </tr>
              </table>
              <br />
              <span className="info-subtype"> Projects </span>
              <br />
              <table>
                {/* Project */}
                <tr>
                  <td className="leftTd">
                    <label for="project" className="form-group">
                      {" "}
                      Project:{" "}
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-group textFields"
                      id="project"
                      placeholder="project"
                    ></input>
                  </td>
                </tr>
                {/* Description */}
                <tr>
                  <td className="leftTd">
                    <label for="description" className="form-group">
                      {" "}
                      Description:{" "}
                    </label>
                  </td>
                  <td>
                    <textarea
                      id="description"
                      placeholder="Description"
                    ></textarea>
                  </td>
                </tr>
              </table>
              <br />
              <span className="info-subtype"> Skills </span>
              <br />
              <table>
                {/* Skills */}
                <tr>
                  <td className="leftTd3">
                    <label for="skills" className="form-group">
                      {" "}
                      Skills:{" "}
                    </label>
                  </td>
                  <td>
                  <textarea
                      id="description"
                      placeholder="Description"
                    ></textarea>
                  </td>
                </tr>
              </table>
            </form>
          </td>
        </tr>
      </table>
      {/* </div> */}
    </div>
  );
}

export default Profile;
