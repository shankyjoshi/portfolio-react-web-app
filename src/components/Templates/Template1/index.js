import "./index.css";

function TemplateOne() {
  return (
    <div>
      <header>
        <img src="image.jpg" alt="Your Name" class="profile-image" />
        <h1>Your Name</h1>
        <p>Web Developer | City Name</p>
      </header>

      <section class="social-media">
        <a href="https://www.linkedin.com/in/yourname" target="_blank">
          LinkedIn
        </a>
        <a href="https://twitter.com/yourtwitter" target="_blank">
          Twitter
        </a>
        <a href="https://github.com/yourgithub" target="_blank">
          GitHub
        </a>
      </section>

      <section class="work-experience">
        <h2>Work Experience</h2>
        <div class="job">
          <h3>Company Name</h3>
          <p>Position | Location | Years</p>
          <p>Description of responsibilities and achievements in this role.</p>
        </div>
        Add more job entries as needed
      </section>

      <section class="projects">
        <h2>Projects</h2>
        <div class="project">
          <h3>Project Name</h3>
          <p>Description of the project and your role in it.</p>
        </div>
        Add more project entries as needed
      </section>

      <section class="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          Add more skills as needed
        </ul>
      </section>
    </div>
  );
}

export default TemplateOne;
