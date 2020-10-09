import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export class OpenSpecialQuestionLC1 extends React.Component {
    
    render() {
        const { questionData } = this.props;
        return (
            <div>
                <Typography variant="h5" gutterBottom style={{ margin: '15px' }}>
                    IV. Relaciona las ideas del texto con el concepto que las resume
                </Typography>
                <Grid container spacing={3}>

                    <Grid item xs={4}>
                    {
                        Object.keys(questionData.questions).map(question => {
                            return(
                                <Typography variant="subtitle1">
                                    {
                                        questionData.questions[question]
                                    }
                                </Typography>
                            )
                        })
                    }
                    </Grid>

                    <Grid item xs={4}>
                    {
                        Object.keys(questionData.options).map(option => {
                            return (                                    
                                <Typography variant="subtitle1">
                                    {
                                        questionData.options[option]
                                    }
                                </Typography>
                            )
                        })
                    }
                    </Grid>

                    <Grid item xs={2}>
                        {
                            Object.keys(questionData.answers).map(answer => {
                                return(
                                    <TextField
                                    label=""
                                    margin="2px"
                                    variant="outlined"
                                />
                                )
                            })
                        }
                    </Grid>

                </Grid>
            </div>
        )
    }
}

export default OpenSpecialQuestionLC1
