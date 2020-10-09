import React from 'react'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export class MultipleOpenQuestionLL1 extends React.Component {
    
    render() {
        const { questionData } = this.props;
        return (
            <div>
                <Typography style={{ paddingTop: '1rem' }}>
                    {
                        questionData.id + "." + questionData.question
                    }
                </Typography>
                {
                    questionData.options.map(option => {
                        return (
                            <TextField
                            label="Escribe tu respuesta"
                            multiline
                            rowsMax="4"
                            // onChange={handleChange('multiline')}
                            //className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                        )
                    })
                }
            </div>
        )
    }
}

export default MultipleOpenQuestionLL1
