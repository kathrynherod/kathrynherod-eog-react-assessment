import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Legend from './Legend';
import Charts from './Charts';

const useStyles = makeStyles((theme) => ({
    dashboardContainer: {
        display: 'flex',
        marginTop: 32,
    },
}));

export default () => {
    const classes = useStyles();

    return (
        <Container fixed className={classes.dashboardContainer}>
            <Legend/>
            <Charts/>
        </Container>
    );
};