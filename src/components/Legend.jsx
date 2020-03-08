import React from 'react';
import Card from '@material-ui/core/Card';
import FormGroup from '@material-ui/core/FormGroup';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from './CardHeader';
import Checkbox from './Checkbox';

const useStyles = makeStyles({
    card: {
        maxWidth: '50%',
    },
});

export default () => {
    const classes = useStyles();

    return (
        <FormGroup>
            <Card className={classes.card}>
                <CardHeader title="Select metrics to view" />
                <CardContent>
                    <Checkbox />
                </CardContent>
            </Card>
        </FormGroup>
    );
}
