import React from "react";
import GitHubIcon from "../images/ic_github.svg";
import DownloadIcon from "../images/ic_download.svg";
import GooglePlayIcon from "../images/ic_google_play.svg";
import PhotoModal from "./PhotoModal";
import {
  titles,
  descriptions,
  icons,
  githubLinks,
  downloadLinks,
} from "../apps_data";
import { screenshots, screenshotDescriptions } from "../apps_images";
import {
  CssBaseline,
  Grid,
  Link,
  Typography,
  Card,
  CardContent,
  Modal,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  topSpacing: {
    paddingTop: theme.spacing(2),
  },
  horizontalSpacing: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  mainContent: {
    height: "100%",
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
  },
  main: {
    height: "100%",
  },
  links: {
    paddingTop: theme.spacing(3),
    margin: "auto",
  },
  photos: {
    padding: theme.spacing(4),
  },
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  appIcon: {
    width: "140px",
    height: "140px",
    margin: "auto",
  },
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  center: {
    margin: "auto",
  },
  cardContent: {
    flexGrow: 1,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function AppDetails(props) {
  window.scrollTo(0, 0);
  const classes = useStyles();
  const index = titles.indexOf(props.match.params.appTitle.replace("-", " "));
  const [open, setOpen] = React.useState(false);
  const [selectedSs, setSs] = React.useState(false);
  const [selectedDesc, setDesc] = React.useState(false);

  const handleOpen = (ss, desc) => {
    setSs(ss);
    setDesc(desc);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Grid container>
          <Grid item key="content" xs={12} md={3}>
            <div className={classes.mainContent}>
              <img
                className={classes.appIcon}
                src={icons[index]}
                alt={titles[index] + " icon"}
              />
              <Typography
                align="center"
                gutterBottom
                variant="h3"
                className={classes.topSpacing}
              >
                {titles[index]}
              </Typography>
              <Typography align="center">{descriptions[index]}</Typography>
              <div className={classes.links}>
                {githubLinks[index] !== "" && (
                  <Link
                    className={classes.horizontalSpacing}
                    color="inherit"
                    target="_blank"
                    href={githubLinks[index]}
                  >
                    <img height="70px" src={GitHubIcon} alt="Code on Github" />
                  </Link>
                )}
                {/* {downloadLinks[index] !== "" && ( */}
                <Link
                  className={classes.horizontalSpacing}
                  color="inherit"
                  target="_blank"
                  href={downloadLinks[index]}
                >
                  <img
                    height="70px"
                    src={
                      downloadLinks[index].includes("play")
                        ? GooglePlayIcon
                        : DownloadIcon
                    }
                    alt="App download"
                  />
                </Link>
              </div>
              <div className={classes.main}></div>
            </div>
          </Grid>
          <Grid
            item
            key="photos"
            xs={12}
            md={9}
            className={classes.photos}
            alignContent="center"
          >
            <Grid container spacing={3}>
              {screenshots[index].map((screenshot, i) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Link
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <Card
                      className={classes.root}
                      onClick={() => {
                        handleOpen(
                          screenshot,
                          screenshotDescriptions[index][i]
                        );
                      }}
                    >
                      <img
                        className={classes.center}
                        height="275px"
                        src={screenshot}
                        alt={titles[index] + " screenshot"}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                          align="center"
                        >
                          {screenshotDescriptions[index][i]}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    className={classes.modal}
                  >
                    <PhotoModal
                      screenshot={selectedSs}
                      screenshotDescription={selectedDesc}
                    />
                  </Modal>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </main>
    </React.Fragment>
  );
}
