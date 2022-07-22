import React from 'react';
import { Card } from '@material-ui/core';

import useStyles from './styles';

const Food = (props) => {
    const classes = useStyles();

    return(
        <Card className={classes.card}>{props.description ? props.description : 'none'}</Card>
    );
}

export default Food;