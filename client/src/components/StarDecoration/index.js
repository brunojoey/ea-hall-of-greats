import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@material-ui/core";

function StarDecoration() {
  return (
    <Grid item lg={12} style={{ textAlign: "center" }}>
      <h1>
        <FontAwesomeIcon icon={faStar} className="fa-star" />
        <FontAwesomeIcon icon={faStar} className="fa-star" />
        <FontAwesomeIcon icon={faStar} className="fa-star" />
      </h1>
    </Grid>
  );
};

export default StarDecoration;
