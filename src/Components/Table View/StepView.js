import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Navbar from "../Main Page/Navbar";
import CardMedia from "@material-ui/core/CardMedia";
import TextField from "@material-ui/core/TextField";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";

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
    marginBottom: "10px",
  },
  commentField: {
    width: "100%",
    margin: "0px 5px",
  },
  moreIcon: {
    color: "white",
    fontSize: "2rem",
    marginRight: "2%",
    marginTop: "7.5px",
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
  input: {
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
          <Navbar canReturn="true" to="/tableview" />
        </div>
        <div>
          <Container maxWidth="sm" className={classes.container}>
            <Typography
              component="h1"
              variant="h5"
              align="left"
              className={classes.tableText}
              gutterBottom
            ></Typography>
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
                Similique fuga reprehenderit perferendis quo est quidem rem a
                eius vel quaerat tempora ullam omnis voluptas eveniet sed iure
                assumenda doloremque provident, quam in totam laborum id.
                Pariatur soluta praesentium vitae mollitia.
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
              Comentarios
            </Typography>

            <Container maxWidth="sm" className={classes.stepContainer}>
              <AccountCircleRoundedIcon className={classes.moreIcon} />

              <TextField
                autoFocus
                placeholder="Escribe un comentario..."
                className={classes.commentField}
                color="primary"
                InputProps={{
                  className: classes.input,
                }}
                multiline
                rows="1"
                rowsMax="10"
              >
                Paso 1
              </TextField>
              <SendRoundedIcon
                className={classes.moreIcon}
                style={{
                  color: "white",
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
