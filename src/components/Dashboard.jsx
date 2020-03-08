import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import FormGroup from '@material-ui/core/FormGroup';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from './CardHeader';
import Charts from './Charts';
import Checkboxes from './Checkboxes';

const useStyles = makeStyles((theme) => ({
    dashboardContainer: {
        display: 'flex',
        marginTop: 32,
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
    },
}));

const Dashboard = (props) => {
    const { metricsCheckboxes, error } = props;
    const [checkboxItems, setCheckboxItems] = useState(metricsCheckboxes);
    const [selectedMetrics, setSelectedMetrics] = useState(null);
    const classes = useStyles();

    const handleChange = (event) => {
        const stateUpdates = {...checkboxItems};
        stateUpdates[event.target.name].checked = event.target.checked;
        setCheckboxItems(Object.assign({}, checkboxItems, stateUpdates));

        let selectedItems = [];
        for (const key in checkboxItems) {
            if (checkboxItems[key].checked) selectedItems.push(key)
        }
        setSelectedMetrics(selectedItems);
    };

    function MetricsError() {
        return <div>There was an error loading Metrics. {error.message} </div>;
    }

    function ShowMetricsOptions() {
        return <Checkboxes checkboxItems={checkboxItems} onChangeHandler={handleChange}/>;
    }

    function CardBody() {
        if (error) {
            return <MetricsError />

        } else {
            return <ShowMetricsOptions/>
        }
    }

    return (
        <Container className={classes.dashboardContainer}>
            <FormGroup>
                <Card className={classes.card}>
                    <CardHeader title="Select metrics to view" />
                    <CardContent className={classes.cardContent}>
                        <CardBody/>
                    </CardContent>
                </Card>
            </FormGroup>
            <Charts selectedMetrics={selectedMetrics}/>
        </Container>
    );
};

export default Dashboard;