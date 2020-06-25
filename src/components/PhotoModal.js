import React from "react";
import { Typography, Card, CardContent } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  center: {
    height: "70vh",
    margin: "auto",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function PhotoModal(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <img
        className={classes.center}
        src={props.screenshot}
        alt={props.screenshotDescription}
      />
      <CardContent className={classes.cardContent}>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          align="center"
        >
          {props.screenshotDescription}
        </Typography>
      </CardContent>
    </Card>
  );
}
