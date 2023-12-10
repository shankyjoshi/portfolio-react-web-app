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
import { useDispatch, useSelector } from "react-redux";
import { updateWorkExp, addWorkExp, deleteWorkExp } from "./portfolioreducer";
const WorkExp = () => {
  const { workExp } = useSelector((state) => state.portfolioreducer);
  const dispatch = useDispatch();

  const handleAddExperience = () => {
    dispatch(addWorkExp());
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    dispatch(updateWorkExp({ index: index, data: { [name]: value } }));
  };

  const handleDeleteExperience = (index) => {
    dispatch(deleteWorkExp(index));
  };

  return (
    <div>
      {workExp.map((experience, index) => (
        <Paper key={index} style={{ padding: "10px", margin: "10px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                name="company"
                label="Company"
                value={experience.company}
                onChange={(e) => handleInputChange(index, e)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="position"
                label="Position"
                value={experience.position}
                onChange={(e) => handleInputChange(index, e)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="location"
                label="Location"
                value={experience.location}
                onChange={(e) => handleInputChange(index, e)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Employment Type
                </InputLabel>
                <Select
                  label="Employment Type"
                  name="employmentType"
                  value={experience.employmentType}
                  onChange={(e) => handleInputChange(index, e)}
                >
                  <MenuItem value="full-time">Full-Time</MenuItem>
                  <MenuItem value="part-time">Part-Time</MenuItem>
                  <MenuItem value="contract">Contract</MenuItem>
                  {/* Add more employment types as needed */}
                </Select>
              </FormControl>
            </Grid>
            {/* <Grid item xs={6}>
              <TextField
                name="startDate"
                label="Start Date"
                placeholder=""
                type="date"
                value={experience.startDate}
                onChange={(e) => handleInputChange(index, e)}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
             
            </Grid> */}
            <Grid item xs={12}>
              <div class="form-floating">
                <textarea
                  name="description"
                  value={experience.description}
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
            {index == workExp.length - 1 ? (
              <IconButton color="success" onClick={handleAddExperience}>
                <AddIcon />
              </IconButton>
            ) : null}
            {workExp.length > 1 ? (
              <IconButton
                color="danger"
                onClick={(e) => handleDeleteExperience(index)}
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

export default WorkExp;
