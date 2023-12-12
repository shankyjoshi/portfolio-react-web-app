import React, { useState } from "react";
import { useMultistepForm } from "./useMultiStepForm";
import Nav from "../Nav";
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Paper,
  Step,
  StepLabel,
  Stepper,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import AddressForm from "./AddressForm";

import Review from "./Review";
import WorkExp from "./WorkExp";
import SocialMedia from "./SocialMedia";
import Projects from "./Projects";
import Skills from "./Skills";
import { useSelector } from "react-redux";
import SignUp from "./SignUp";
import axios from "axios";
import { useNavigate } from "react-router";

function Intro() {
  const steps = [
    "Sign Up",
    "Personal Information",
    "Social Media",
    "Work Experience",
    "Projects",
    "Skills",
    "Review",
  ];
  const components = [
    <SignUp />,
    <AddressForm />,
    <SocialMedia />,
    <WorkExp />,
    <Projects />,
    <Skills />,
    <Review />,
  ];
  const { currentStepIndex, step, back, next, isFirstStep, isLastStep } =
    useMultistepForm(components);
  const navigate = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault();
    next();
  };
  const darkTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
  const { data, workExp, skills, projects } = useSelector((state) => state.portfolioreducer);
  const handleReview = async () => {
    console.log(skills);
    try {
      const projectIds = await Promise.all(
        projects.map(async (project) => {
          const projectRes = await axios.post("http://localhost:5690/api/projects", {
            name: project.title,
            description: project.description,
          });
          return projectRes.data._id;
        })
      );

      const workExpIds = await Promise.all(
        workExp.map(async (experience) => {
          const workExpRes = await axios.post("http://localhost:5690/api/workexperiences", {
            company: experience.company,
            position: experience.position,
            description: experience.description,
          });
          return workExpRes.data._id;
        })
      );
      console.log(projectIds, workExpIds);
      const userData = {
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        address1: data.address1,
        address2: data.address2,
        city: data.city,
        state: data.state,
        zip: data.zip,
        country: data.country,
        linkedin: data.linkedin,
        github: data.github,
        twitter: data.twitter,
        portfolio: data.portfolio,
        projects: projectIds,
        workExp: workExpIds,
        skills: skills,
      };

      const userRes = await axios.post("http://localhost:5690/api/signup", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/home");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  // const handleReview = (e) => {
  //   console.log(data, workExp, skills, projects);
  //   axios
  //     .post(
  //       "http://localhost:5690/api/signup",
  //       { email: data.email, password: data.password },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       navigate("/home");
  //     });
  // };
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {/* <AppBar
          position="absolute"
          color="default"
          elevation={0}
          sx={{
            position: "relative",
            borderBottom: (t) => `1px solid ${t.palette.divider}`,
          }}
        >
          {/* <Toolbar>
              <Typography variant="h6" color="inherit" noWrap>
                Heisenberg
              </Typography>
            </Toolbar> */}
          {/* <Nav />
        </AppBar> */}
        <Container
          sx={{
            maxWidth: "600px",
            padding: 2,
          }}
        >
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Typography component="h1" variant="h4" align="center">
              Fill the Details
            </Typography>
            <Stepper activeStep={currentStepIndex} sx={{ pt: 3, pb: 3 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {currentStepIndex === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <form onSubmit={onSubmit}>
                  {components[currentStepIndex]}
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    {currentStepIndex !== 0 && (
                      <Button onClick={back} sx={{ mt: 3, ml: 1 }}>
                        Back
                      </Button>
                    )}
                    {currentStepIndex !== steps.length - 1 ? (
                      <Button type="submit" variant="contained" sx={{ mt: 3, ml: 1 }}>
                        Next
                      </Button>
                    ) : (
                      <Button onClick={handleReview} variant="contained" sx={{ mt: 3, ml: 1 }}>
                        Signup
                      </Button>
                    )}
                  </Box>
                </form>
              </React.Fragment>
            )}
          </Paper>
          {/* <Copyright /> */}
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default Intro;
