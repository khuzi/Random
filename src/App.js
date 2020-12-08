import { Grid, Typography, Paper, Button } from "@material-ui/core";

import classes from "./App.module.css";

const FilterType = ({ txt }) => {
  return (
    <Grid item xs={12} md={3} lg={2} style={{ padding: "1rem 1rem 0 0" }}>
      <div className={classes.filter_type}>
        <Typography>{txt}</Typography>
        <div className={classes.ques_mark}>
          <p>?</p>
        </div>
      </div>
    </Grid>
  );
};

function App() {
  return (
    <div className={classes.filter_by}>
      <Paper style={{ padding: "1rem", borderRadius: "8px" }}>
        <Grid container>
          <Typography variant="h6">Filter by:</Typography>
        </Grid>
        <Grid container justify="space-between">
          {["Class", "Sub-class", "Cover amount", "Territory", "Industry"].map(
            (type, i) => (
              <FilterType txt={type} key={i} />
            )
          )}
        </Grid>
        <Grid container>
          <Button
            style={{
              color: "#fff",
              background: "lightblue",
              textTransform: "capitalize",
              marginTop: "1rem",
              padding: "0.5rem 1.5rem",
            }}
          >
            Apply
          </Button>
        </Grid>
      </Paper>
    </div>
  );
}

export default App;
