// ReviewPage.js
import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

const ReviewPage = () => {
  const { data, workExp, skills, projects } = useSelector(
    (state) => state.portfolioreducer
  );

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Review Your Resume
      </Typography>

      <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6">Personal Information</Typography>
            <Typography>{`First Name: ${data.firstName}`}</Typography>
            <Typography>{`Last Name: ${data.lastName}`}</Typography>
            <Typography>{`Email: ${data.email}`}</Typography>
            <Typography>{`Address: ${data.address1}`}</Typography>
            <Typography>{`City: ${data.city}`}</Typography>
            <Typography>{`State: ${data.state}`}</Typography>
            <Typography>{`Zip: ${data.zip}`}</Typography>
            <Typography>{`Country: ${data.country}`}</Typography>
            <Typography>{`LinkedIn: ${data.linkedin}`}</Typography>
            <Typography>{`GitHub: ${data.github}`}</Typography>
            <Typography>{`Twitter: ${data.twitter}`}</Typography>
            <Typography>{`Portfolio: ${data.portfolio}`}</Typography>

            {/* Add more personal information fields as needed */}
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">Work Experience</Typography>
            {workExp.map((exp, index) => (
              <div key={index}>
                <Typography>{`Company: ${exp.company}`}</Typography>
                <Typography>{`Position: ${exp.position}`}</Typography>
                <Typography>{`Start Date: ${exp.startDate}`}</Typography>
                <Typography>{`End Date: ${exp.endDate}`}</Typography>
                <Typography>{`Description: ${exp.description}`}</Typography>
                <hr />
              </div>
            ))}
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">Projects</Typography>
            {projects.map((project, index) => (
              <div key={index}>
                <Typography>{`Project Name: ${project.name}`}</Typography>
                <Typography>{`Description: ${project.description}`}</Typography>
                <hr />
              </div>
            ))}
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">Skills</Typography>
            {skills.map((skill, index) => (
              <Typography key={index}>{skill}</Typography>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default ReviewPage;
