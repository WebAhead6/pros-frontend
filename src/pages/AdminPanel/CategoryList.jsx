import React, {Component} from "react";
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/core/styles";
import MiniCategory from "./MiniCategory";
import "./adminPanel.module.css";
import "../../App.scss";

const styles = {
  root: {
    height: "110vh",
    width: "100vw",
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
    "& h2": {
      color: "white",
      justifyContent: "center",
      alignSelf: "center",
    },
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
    this.props.history.push(`/categories/${id}`);
  }

  render() {
    //classes are used here in order to apply the styles seen above
    const {categories, classes} = this.props;

    return (
      <div className={classes.root}>
        <nav className={classes.nav}>
          <h1>React Fixers</h1>
          <Link to="/category/new">Create category</Link>
        </nav>
        <div className={classes.container}>
          <h2>Admin Pane</h2>
          <div className={classes.palettes}>
            {categories.map((category) => (
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
