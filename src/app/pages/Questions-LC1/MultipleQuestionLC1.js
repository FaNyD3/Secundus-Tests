import React from 'react'
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export class MultipleQuestionLC1 extends React.Component {
    
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
                    Object.keys(questionData.options).map(option => {
                        return (
                            <FormControlLabel
                                value={option}
                                control={<Checkbox color="primary" />}
                                label={questionData.options[option]}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default MultipleQuestionLC1
