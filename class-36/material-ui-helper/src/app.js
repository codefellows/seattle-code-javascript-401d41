import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  fullHeight: {
    height: "100%"
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));


function App() {

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="primary" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Company name
          </Typography>
          {/* These get pushed to the right, becuase the classes.toolbarTitle sets flexGrow to 1... */}
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Features
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Enterprise
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Support
            </Link>
          </nav>
          <Button href="#" color="default" variant="outlined" className={classes.link}>
            Login
          </Button>
        </Toolbar>
      </AppBar>

      {/*  what happens when maxWidth is set to xs, xl? */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Page Header
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Here's some really cool things you can do
        </Typography>
      </Container>

      {/* This container will hold a grid */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="stretch">
          {/* why 3 specs here? on a small screen, use 12 grid spots, 6 on a small screen, 4 on medium+ */}
          {/* In other words, 1 accross, 2 accross, or 3 accross */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardHeader title="Card 1"
                titleTypographyProps={{ align: 'center' }}
                className={classes.cardHeader}
              />
              <CardContent>
                <Typography variant="h5" color="textPrimary">
                  Check this out!
                </Typography>
                <Typography variant="p" color="textSecondary">
                  And here is some more text that you need to pay attention to.
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant='outlined' color="primary">Click Me</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.fullHeight} elevation={0} />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.fullHeight} elevation={1} />
          </Grid>

        </Grid>
      </Container>

      {/* Footer */}
      <Container maxWidth="lg" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-around">

          {/* How do these 3 combine to make this a responsive grid? */}
          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Column 1
            </Typography>
            <ul>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 1</Link> </li>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 2</Link> </li>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 3</Link> </li>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 4</Link> </li>
            </ul>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Column 2
            </Typography>
            <ul>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 1</Link> </li>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 2</Link> </li>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 3</Link> </li>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 4</Link> </li>
            </ul>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Column 3
            </Typography>
            <ul>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 1</Link> </li>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 2</Link> </li>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 3</Link> </li>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 4</Link> </li>
            </ul>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Column 4
            </Typography>
            <ul>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 1</Link> </li>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 2</Link> </li>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 3</Link> </li>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 4</Link> </li>
            </ul>
          </Grid>

        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
