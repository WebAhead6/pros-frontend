import React, {Component} from "react";
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/core/styles";
import MiniCategory from "./MiniCategory";
import "./adminPanel.module.css";
import "../../App.scss";

const styles = {
  root: {
    height: "100vh",
    display: "flex",
    flexWrap: "wrap",
    flexFlow: "row wrap",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    // border: "1px solid white",
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    padding: "3%",
    paddingBottom: "0",
    fontSize: "smaller",
    "& a": {
      color: "white",
      textDecoration: "none",
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(1,100%)",
    gridGap: "5%",
  },
};

class CategoryList extends Component {
  goToCategory(id) {
    console.log("we inside CATEGORYLIST and we passing this id   ", id);
    this.props.history.push(`/categories/${id}`);
  }
  render() {
    //classes are used here in order to apply the styles seen above
    const {categories, classes} = this.props;

    return (
      <div className={classes.root}>
        <nav className={classes.nav}>
          <h1>React Fixers</h1>
          <Link to="/category/new">Create NewCategory</Link>
        </nav>
        <div className={classes.container}>
          <div className={classes.palettes}>
            {categories.map((category) => (
              //   <Link to={`/palette/${palette.id}`}>

              <MiniCategory
                key={category.id}
                {...category}
                goToCategory={() => this.goToCategory(category.id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(CategoryList);
