import React from 'react';
//import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
//import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
//import StarIcon from '@material-ui/icons/StarBorder';
//import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//import Box from '@material-ui/core/Box';
import Car1Icon from '@material-ui/icons/DirectionsCar';
//import Car2Icon from '@material-ui/icons/LocalCarWash';
import Car2Icon from '@material-ui/icons/AssignmentTurnedIn';


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
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: 'Drive Lesson 1H',
    price: '60',
    description: ['1 Hour Lesson'],
    buttonText: 'Standard Hourly Rate',
    buttonVariant: 'contained',
  },
  {
    title: 'Drive Lesson 5H',
    price: '280',
    description: ['5 x 1 Hour Lesson Package'],
    buttonText: 'Save $20',
    buttonVariant: 'contained',
  },
  {
    title: 'Drive Lesson 10H',
    price: '550',
    description: ['10 x 1 Hour Lesson Package'],
    buttonText: 'Save $50',
    buttonVariant: 'contained',
  },

  {
    title: 'Drive Test 45M',
    price: '170',
    description: ['Includes 45 mins Lesson'],
    buttonText: 'Package 1',
    buttonVariant: 'contained',
  },
  {
    title: 'Drive Test 60M',
    price: '190',
    description: ['Includes 60 mins Lesson'],
    buttonText: 'Package 2',
    buttonVariant: 'contained',
  },
  {
    title: 'Drive Test 90M',
    price: '210',
    description: ['Includes 90 mins Lesson'],
    buttonText: 'Package 3',
    buttonVariant: 'contained',
  },
];

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>

      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">

        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader

                  title={tier.title}
                  action={tier.title === 'Drive Lesson' ? <Car1Icon /> : <Car2Icon />}

                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  //action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">

                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

      </Container>

    </React.Fragment>
  );
}