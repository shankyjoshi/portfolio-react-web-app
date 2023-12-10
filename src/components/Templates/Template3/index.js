import "./index.css";

function TemplateThree() {
  return (
    <div class="portfolio">
      <div class="main-content">
        <div class="profile">
          <img src="image.jpg" alt="Profile Image" />
          <div class="personal-info">
            <h1>First Last</h1>
            <p>City Name</p>
          </div>
        </div>
        <div class="overlay">
          <div class="text-content">
            <div class="section" id="work-experience">
              <h2>Work Experience</h2>
              <div class="experience-item">
                <h3>Company Name</h3>
                <p>Position | Location | Years</p>
                <p>Description of work experience...</p>
              </div>
            </div>

            <div class="section" id="projects">
              <h2>Projects</h2>
              <div class="project-item">
                <h3>Project Name</h3>
                <p>Description of the project...</p>
              </div>
            </div>

            <div class="section" id="skills">
              <h2>Skills</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateThree;
