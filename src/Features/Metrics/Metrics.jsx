import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from './reducer';
import { Provider, createClient, useQuery } from 'urql';
import LinearProgress from '@material-ui/core/LinearProgress';
import Dashboard from '../../components/Dashboard';

const client = createClient({
  url: 'https://react.eogresources.com/graphql',
});

const query = `query { getMetrics }`;

export default () => {
  return (
    <Provider value={client}>
      <Metrics />
    </Provider>
  );
};

const Metrics = () => {
  const dispatch = useDispatch();

  const [result] = useQuery({
    query,
    variables: {},
  });

  const { data, error, fetching } = result;

  useEffect(() => {
    if (error) {
      dispatch(actions.metricsApiErrorReceived({ error: error.message }));

      return;
    }

    if (!data) return;

    const { getMetrics } = data;
    dispatch(actions.metricsDataReceived(getMetrics));

  }, [dispatch, data, error]);

  if (!fetching) {
    if (data && data.getMetrics) {
      const metricsCheckboxes = {};

        data.getMetrics.forEach((metric, i) => {
            metricsCheckboxes[metric] = {
                key: i,
                name: metric,
                checked: false,
            }
        })

      return <Dashboard metricsCheckboxes={metricsCheckboxes}/>;

    } else {

      return <Dashboard error={error}/>;
    }
  }

  return <LinearProgress />
};
