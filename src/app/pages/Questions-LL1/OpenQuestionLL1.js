import React from 'react'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

export class OpenQuestionLL1 extends React.Component {

    // const [values, setValues] = React.useState({
    //     name: 'Cat in the Hat',
    //     age: '',
    //     multiline: 'Controlled',
    //     currency: 'EUR',
    // });
    render() {
        const { questionData } = this.props;
        return (
            <div>
                <Typography >
                    {
                        questionData.id + "." + questionData.question
                    }
                </Typography>
                <TextField
                    label="Escribe tu respuesta"
                    multiline
                    rowsMax="4"
                    // onChange={handleChange('multiline')}
                    //className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
            </div>

        )
    }
}

export default OpenQuestionLL1
