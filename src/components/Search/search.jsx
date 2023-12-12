import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  TextField,
  Typography,
} from "@mui/material";
import { createClient } from "pexels";
import { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
const client = createClient(
  "PrVbdLwHMiKXVG0T9xoLotZ9cG1ML5AqVoCMNwnq7ZXpQ2jfWt6S9q4Z"
);

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    client.photos.search({ query: search, per_page: 21 }).then((photos) => {
      setSearchResults(photos.photos);
      console.log(searchResults);
    });

    console.log(search);
  };

  return (
    <Container spacing={2}>
      <div className=" d-flex  gap-4 justify-content-center align-items-center">
        <TextField
          className="w-50"
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          value={search}
          onChange={handleSearch}
        />
        <Button onClick={handleSubmit} variant="contained">
          Search
        </Button>
      </div>

      <h1 className="display-6 pt-5">Search Results</h1>
      <ImageList
        gap={12}
        sx={{
          mb: 8,
          gridTemplateColumns:
            "repeat(auto-fill, minmax(280px, 1fr)) !important",
        }}
      >
        {searchResults.map((item) => (
          <Card key={item.src.original}>
            <ImageListItem
              sx={{ height: "258px !important" }}
              key={item.src.original}
            >
              <img
                srcSet={`${item.src.original}`}
                src={`${item.src.original}`}
                alt={item.alt}
                loading="lazy"
                style={{ cursor: "pointer" }}
              />
              <ImageListItemBar
                title={item.alt}
                subtitle={`@${item.photographer}`}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.alt}`}
                  >
                    <a href={item.photographer_url}>
                      <InfoIcon />
                    </a>
                  </IconButton>
                }
              />
            </ImageListItem>
          </Card>
        ))}
      </ImageList>
      {/* {searchResults.map((result) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={result.src.medium}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        //<img src={result.src.medium} alt="" />
      ))} */}
    </Container>
  );
};

export default Search;
