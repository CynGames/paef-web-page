import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Navbar from "../Main Page/Navbar";
import CardMedia from "@material-ui/core/CardMedia";
import MoreIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddCommentIcon from "@material-ui/icons/AddComment";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    margin: "50px 0px",
  },
  header: {
    fontSize: "1.5rem",
  },
  mainSetting: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    overflow: "auto",
  },
  tableText: {
    color: "white",
    marginLeft: "5%",
  },
  container: {
    width: "95%",
    margin: "10px 10px",
    padding: "5px 0px",
    backgroundColor: theme.palette.primary.main,
  },
  stepContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: "10px",
    marginBottom: "32.5px",
  },
  secondaryButton: {
    width: "75%",
    color: "white",
  },
  moreIcon: {
    color: "white",
    fontSize: "2rem",
  },

  card: {
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    flex: "33.33%",
    paddingTop: "56.25%",
    margin: "0px 10px",
    marginBottom: "2%",
  },
  cardTypo: {
    flex: "66.66%",
    fontSize: "1rem",
    color: "white",
  },
}));

export default function TableCreation() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main className={classes.mainSetting}>
        <CssBaseline />
        <div className={classes.navBar}>
          <Navbar canReturn="true" to="/mainpage" />
        </div>
        <div>
          <Container maxWidth="sm" className={classes.container}>
            <Typography
              component="h1"
              variant="h5"
              align="left"
              className={classes.tableText}
              gutterBottom
            >
              Tablero de Prueba
            </Typography>
            <div className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <Typography
                component="h1"
                variant="h5"
                className={classes.cardTypo}
                gutterBottom
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente commodi magni deleniti atque temporibus mollitia
                aliquid nihil, cum error laudantium.
              </Typography>
            </div>
          </Container>
        </div>
        <div>
          <Container maxWidth="sm" className={classes.container}>
            <Typography
              component="h1"
              variant="h5"
              align="left"
              className={classes.tableText}
              gutterBottom
            >
              Pasos
            </Typography>
            <Link to="/stepview" style={{ textDecoration: "none" }}>
              <Container maxWidth="sm" className={classes.stepContainer}>
                <MoreIcon className={classes.moreIcon} />
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.secondaryButton}
                >
                  Paso 1
                  <AddCommentIcon
                    fontSize="small"
                    style={{
                      position: "absolute",
                      right: "5",
                      bottom: "-25",
                      color: "white",
                    }}
                  />
                </Button>
                <FavoriteIcon
                  className={classes.moreIcon}
                  style={{
                    color: "red",
                    marginLeft: "5px",
                  }}
                />
              </Container>
            </Link>

            <Container maxWidth="sm" className={classes.stepContainer}>
              <MoreIcon className={classes.moreIcon} />

              <Button
                variant="contained"
                color="secondary"
                className={classes.secondaryButton}
              >
                Paso 2
                <AddCommentIcon
                  fontSize="small"
                  style={{
                    position: "absolute",
                    right: "5",
                    bottom: "-25",
                    color: "white",
                  }}
                />
              </Button>
              <FavoriteBorderRoundedIcon
                className={classes.moreIcon}
                style={{
                  color: "white",
                  marginLeft: "5px",
                }}
              />
            </Container>
          </Container>
        </div>
      </main>
      {/* Footer */}
      {/* <footer className={classes.footer}>
          <ControlPointIcon fontSize="large" />
      </footer> */}
      {/* End footer */}
    </React.Fragment>
  );
}
