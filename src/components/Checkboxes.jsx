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

export default (props) => {
    const { onChangeHandler, checkboxItems} = props;
    const classes = useStyles();

    const handleChange = event => {
        if (typeof onChangeHandler === 'function') {
            onChangeHandler(event);
        }
    };

    const checkboxes = [];

    for (const key in checkboxItems) {
        checkboxes.push(
            <FormControlLabel
                key={checkboxItems[key].key}
                label={checkboxItems[key].name}
                control={
                    <Checkbox
                        name={checkboxItems[key].name}
                        icon={<VisibilityOff />}
                        checkedIcon={<Visibility className={classes.isChecked}/>}
                        checked={checkboxItems[key].checked}
                    />
                }
                onChange={handleChange}
            />
        );
    }

    return checkboxes;
}