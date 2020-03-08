import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles({
    isChecked: {
        color: green[600],
    },
})

export default () => {
    const [state, setState] = React.useState({
        checked: false,
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    const classes = useStyles();

    return (
        <FormControlLabel
            label="metric"
            control={
                <Checkbox
                    icon={<VisibilityOff />}
                    checkedIcon={<Visibility className={classes.isChecked}/>}
                    checked={state.checked}
                    value={state.checked}
                />
            }
            onChange={handleChange('checked')}
        />
    )
}