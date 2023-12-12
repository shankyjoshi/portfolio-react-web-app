import "./index.css";

function TemplateTwo() {
  return (
    <div class="portfolio">
      <div class="profile-image">
        <img src="image.jpg" alt="Profile Image" />
        <div class="content">
          <div class="personal-info">
            <h1>First Last</h1>
            <p>City Name</p>
          </div>
          <div class="social-media">
            <a href="https://www.linkedin.com/" target="_blank">
              LinkedIn
            </a>
            <a href="https://twitter.com/" target="_blank">
              Twitter
            </a>
            <a href="https://github.com/" target="_blank">
              GitHub
            </a>
          </div>
          <div class="work-experience">
            <h2>Work Experience</h2>
            <div class="experience-item">
              <h3>Company Name</h3>
              <p>Position | Location | Years</p>
              <p>Description of work experience...</p>
            </div>
          </div>
          <div class="projects">
            <h2>Projects</h2>
            <div class="project-item">
              <h3>Project Name</h3>
              <p>Description of the project...</p>
            </div>
          </div>
          <div class="skills">
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
  );
}

export default TemplateTwo;
