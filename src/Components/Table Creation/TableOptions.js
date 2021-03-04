import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Navbar from "../Main Page/Navbar";

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

  container: {
    width: "90%",
    padding: "20px 0px",
    backgroundColor: theme.palette.primary.main,
  },
  secondaryButton: {
    width: "75%",
    margin: "10px 0px",
    color: "white",
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
          <Container maxWidth="sm" className={classes.headerContainer}>
            <Typography
              component="h1"
              className={classes.header}
              variant="h5"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Opciones de Tablero
            </Typography>
          </Container>
        </div>
        <div>
          <Container maxWidth="sm" className={classes.container}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.secondaryButton}
            >
              Crear Nuevo Paso
            </Button>

            <Button
              variant="contained"
              color="secondary"
              className={classes.secondaryButton}
              style={{ backgroundColor: "gray", pointerEvents: "none" }}
            >
              Borrar Un Paso
            </Button>

            <Button
              variant="contained"
              color="secondary"
              className={classes.secondaryButton}
              style={{ backgroundColor: "gray", pointerEvents: "none" }}
            >
              Editar un Paso
            </Button>

            <Button
              variant="contained"
              color="secondary"
              className={classes.secondaryButton}
              style={{ marginTop: "60%", backgroundColor: "red" }}
            >
              Borrar Tablero
            </Button>
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
