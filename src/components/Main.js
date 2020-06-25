import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { titles, descriptions, icons } from "../apps_data";
import {
  Card,
  CardContent,
  CssBaseline,
  Grid,
  Typography,
  Container,
  Link,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0, 4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  appIcon: {
    width: "100px",
    height: "100px",
    marginTop: theme.spacing(1),
    margin: "auto",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const indexes = [0, 1, 2, 3, 4];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.content}>
          <Container>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Bartłomiej Sokołowski
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Here is my portfolio presenting mobile applications for Android
              which I created.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {indexes.map((index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Link
                  component={RouterLink}
                  to={`/app/${titles[index].replace(" ", "-")}`}
                >
                  <Card className={classes.card}>
                    <img
                      className={classes.appIcon}
                      src={icons[index]}
                      alt={titles[index] + " icon"}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography
                        align="center"
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        {titles[index]}
                      </Typography>
                      <Typography>{descriptions[index]}</Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
            <Grid item key="other" xs={12}>
              <Typography align="center">
                {"... and many, many other apps, which you can see on "}
                <Link
                  color="inherit"
                  target="_blank"
                  href="https://github.com/akobartek?tab=repositories"
                >
                  my GitHub
                </Link>
                {"."}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
