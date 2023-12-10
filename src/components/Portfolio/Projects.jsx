import React, { useState } from "react";
import {
  TextField,
  Button,
  IconButton,
  Paper,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  TextareaAutosize,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import "bootstrap/dist/css/bootstrap.css";
import { addProject, deleteProject, updateProject } from "./portfolioreducer";
import { useDispatch, useSelector } from "react-redux";
const Projects = () => {
  const { projects } = useSelector((state) => state.portfolioreducer);
  const dispatch = useDispatch();

  const handleAddProject = () => {
    dispatch(addProject());
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    dispatch(updateProject({ index: index, data: { [name]: value } }));
  };

  const handleDeleteProject = (index) => {
    dispatch(deleteProject(index));
  };
  return (
    <div>
      {projects.map((project, index) => (
        <Paper key={index} style={{ padding: "10px", margin: "10px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                name="title"
                label="Project Name"
                value={project.title}
                onChange={(e) => handleInputChange(index, e)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <div class="form-floating">
                <textarea
                  name="description"
                  value={project.description}
                  onChange={(e) => handleInputChange(index, e)}
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                ></textarea>
                <label for="floatingTextarea">Description</label>
              </div>
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            {index == projects.length - 1 ? (
              <IconButton color="success" onClick={handleAddProject}>
                <AddIcon />
              </IconButton>
            ) : null}
            {projects.length > 1 ? (
              <IconButton
                color="danger"
                onClick={(e) => handleDeleteProject(index)}
              >
                <DeleteIcon color="error" />
              </IconButton>
            ) : null}
          </Box>
        </Paper>
      ))}
    </div>
  );
};

export default Projects;
