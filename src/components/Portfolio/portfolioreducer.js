import { createSlice } from "@reduxjs/toolkit";
const data = {
  firstName: "",
  lastName: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
  country: "",
  linkedin: "",
  github: "",
  twitter: "",
  portfolio: "",
};

const workExp = [
  {
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
  },
];

const projects = [
  {
    name: "",
    description: "",
  },
];

const skills = [];
const initialState = {
  data,
  workExp,
  projects,
  skills,
};
const portfolioInfo = createSlice({
  name: "portfolioInfo",
  initialState,
  reducers: {
    updateData(state, action) {
      state.data = { ...state.data, ...action.payload };
    },
    addWorkExp(state) {
      state.workExp = [...state.workExp, ...workExp];
    },
    updateWorkExp(state, action) {
      state.workExp = state.workExp.map((item, index) => {
        if (index === action.payload.index) {
          return { ...item, ...action.payload.data };
        }
        return item;
      });
    },
    deleteWorkExp(state, action) {
      state.workExp = state.workExp.filter(
        (item, index) => index !== action.payload
      );
    },
    addProject(state) {
      state.projects = [...state.projects, ...projects];
    },
    updateProject(state, action) {
      state.projects = state.projects.map((item, index) => {
        if (index === action.payload.index) {
          return { ...item, ...action.payload.data };
        }
        return item;
      });
    },
    deleteProject(state, action) {
      state.projects = state.projects.filter(
        (item, index) => index !== action.payload
      );
    },
    setSkills(state, action) {
      state.skills = [...action.payload];
    },
  },
});
export default portfolioInfo.reducer;
export const {
  updateData,
  updateWorkExp,
  addWorkExp,
  deleteWorkExp,
  addProject,
  updateProject,
  deleteProject,
  setSkills,
} = portfolioInfo.actions;
