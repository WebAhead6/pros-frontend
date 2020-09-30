import React from "react";
import { withStyles } from "@material-ui/core/styles";
import "../../App.scss";

const styles = {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer",
    },
  },
  colors: {
    backgroundColor: "grey",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative",
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
  miniColor: {
    height: "33%",
    width: "33%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.5px",
    cursor: "pointer",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
};

function MiniCategory(props) {
  const { classes, categoryName, workers } = props;
  console.log(categoryName);
  const miniWorkerBoxes = workers.map((worker) => (
    <div
      key={worker.name}
      className={classes.miniColor}
      style={{ backgroundImage: `url(${worker.image})` }}
    />
  ));

  return (
    <div className={classes.root} onClick={props.goToCategory}>
      <div className={classes.colors}>{miniWorkerBoxes}</div>
      <h5 className={classes.title}>{categoryName}</h5>
    </div>
  );
}

export default withStyles(styles)(MiniCategory);
