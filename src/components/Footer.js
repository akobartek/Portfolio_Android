import React from "react";
import GitHubIcon from "../images/ic_github.svg";
import LinkedInIcon from "../images/ic_linkedin.svg";
import EmailIcon from "../images/ic_email.svg";
import { Grid, Typography, Link } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  topSpacing: {
    paddingTop: theme.spacing(2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        target="_blank"
        href="https://www.linkedin.com/in/bart%C5%82omiej-soko%C5%82owski-070943106/"
      >
        Bartłomiej Sokołowski
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div>
        <Grid container spacing={3} justify="center">
          <Grid item>
            <Link
              color="inherit"
              target="_blank"
              href="https://github.com/akobartek"
            >
              <img src={GitHubIcon} alt="GitHub Profile" />
            </Link>
          </Grid>
          <Grid item>
            <Link
              color="inherit"
              target="_blank"
              href="mailto:sokolowskijbartek@gmail.com"
            >
              <img src={EmailIcon} alt="Email me" />
            </Link>
          </Grid>
          <Grid item>
            <Link
              color="inherit"
              target="_blank"
              href="https://www.linkedin.com/in/bart%C5%82omiej-soko%C5%82owski-070943106/"
            >
              <img src={LinkedInIcon} alt="LinkedIn Profile" />
            </Link>
          </Grid>
        </Grid>
      </div>
      <div className={classes.topSpacing}>
        <Copyright />
      </div>
    </footer>
  );
}
