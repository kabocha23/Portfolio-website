// import React from 'react';
// import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';

// export const AndroidCalculator = () => (
//   <Card className='card'>
//     <CardMedia>
//       <img src={ require('../Static/img/react-native-calc.png') } alt="androidcalculator" />
//     </CardMedia>
//     <CardTitle title="Calculator for Android" subtitle="Technologies: React & Android Studios" />
//     <CardText>
//       Android calculator built with React Native.
//     </CardText>
//     <CardActions>
//       <FlatButton label="View Source Code" href='https://github.com/kabocha23/React-Native-Calculator' target='blank' />
//     </CardActions>
//   </Card>
// );

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function AndroidCalculator(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={require("../Static/img/react-native-calc.png")}
          title="Android Calculator Preview"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
            Android Calculator
          </Typography>
          <Typography component="h2">
            Technologies: React & Android Studios
          </Typography>
          <Typography component="p">
            Android calculator built with React Native.
          </Typography>
        </CardContent>
        <CardActions>
        <Button color='primary' href='https://github.com/kabocha23/React-Native-Calculator' target='blank'>
          View Source Code
        </Button>
        </CardActions>
      </Card>
    </div>
  );
}

AndroidCalculator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AndroidCalculator);