import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import Navbar from "../Main Page/Navbar";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  header: {
    fontSize: "1.5rem",
  },
  mainSetting: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    top: 0,
    left: 0,
  },
  navBar: {
    marginBottom: 25,
  },
  container: {
    padding: 10,
  },
  iconBottom: {
    marginTop: 10,
    display: "flex",
    flex: "33.33%",
  },
  buttonBottom: {
    position: "fixed",
    right: 0,
    bottom: 0,
    margin: 10,
  },
}));

export default function TableCreation() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main className={classes.mainSetting}>
        <CssBaseline />
        <div className={classes.navBar}>
          <Navbar canReturn="true" />
        </div>
        <div>
          {/* <form action="">
          <label htmlFor="">
            Titulo
          </label>
        </form> */}
          <Container maxWidth="sm">
            <Typography
              component="h1"
              className={classes.header}
              variant="h5"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Crea un Nuevo Tablero
            </Typography>
          </Container>
        </div>
        <div>
          {/* <form action="">
          <label htmlFor="">
            Titulo
          </label>
        </form> */}
          <Container maxWidth="sm" className={classes.container}>
            <Typography
              component="h1"
              variant="h5"
              align="left"
              color="textPrimary"
              gutterBottom
            >
              Titulo
            </Typography>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="Nombre del tablero"
              autoFocus
            />
          </Container>
        </div>
        <div>
          <Container maxWidth="sm" className={classes.container}>
            <Typography
              component="h1"
              variant="h5"
              align="left"
              color="textPrimary"
              gutterBottom
            >
              Descripción
            </Typography>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="Descripción del tablero"
              multiline
              rows="4"
              rowsMax="10"
            />
          </Container>
        </div>
        <div>
          <Container maxWidth="sm" className={classes.container}>
            <Typography
              component="h1"
              variant="h5"
              align="left"
              color="textPrimary"
            >
              Imágen
            </Typography>
            <div className={classes.iconBottom}>
              <ControlPointIcon fontSize="large" />
            </div>
          </Container>
        </div>
        <div className={classes.buttonBottom}>
          <Button variant="contained" color="primary">
            Crear Tablero
          </Button>
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
