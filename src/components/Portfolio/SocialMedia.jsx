import { Grid, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateData } from "./portfolioreducer";

const SocialMedia = () => {
  const { data } = useSelector((state) => state.portfolioreducer);
  const dispatch = useDispatch();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <TextField
          value={data.linkedin}
          onChange={(e) => dispatch(updateData({ linkedin: e.target.value }))}
          required
          id="linkedin"
          label="LinkedIn"
          fullWidth
          autoComplete="linkedin"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          value={data.github}
          onChange={(e) => dispatch(updateData({ github: e.target.value }))}
          required
          id="github"
          label="GitHub"
          fullWidth
          autoComplete="github"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          value={data.twitter}
          onChange={(e) => dispatch(updateData({ twitter: e.target.value }))}
          required
          id="twitter"
          label="Twitter"
          fullWidth
          autoComplete="twitter"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          value={data.portfolio}
          onChange={(e) => dispatch(updateData({ portfolio: e.target.value }))}
          required
          id="portfolio"
          label="Portfolio"
          fullWidth
          autoComplete="portfolio"
          variant="standard"
        />
      </Grid>
    </Grid>
  );
};

export default SocialMedia;
