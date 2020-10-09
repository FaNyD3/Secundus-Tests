import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MultipleQuestionLL1 from './Questions-LL1/MultipleQuestionLL1'
import MultipleOpenQuestionLL1 from './Questions-LL1/MultipleOpenQuestionLL1'
import OpenQuestionLL1 from './Questions-LL1/OpenQuestionLL1'
import LectureLL1 from './Questions-LL1/LectureLL1'
import PoemLL1 from './Questions-LL1/PoemLL1'

import { testsll1 } from './testsLL1';
import './TestLL1.scss';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));



export function TestLL1() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" component="div" variant="h6" gutterBottom style={{ backgroundColor: 'rgba(255, 192, 35, 0.2)', height: '100vh', boxShadow: '30px 30px 30px 30px rgba(82, 63, 105, 0.08', overflow: 'auto' }}>
        <Typography variant="h3" gutterBottom style={{ backgroundColor: '#F7FF81' }}>
          PRUEBA DE CONOCIMIENTOS PREVIOS 2020
        </Typography>
        <Typography variant="h5" gutterBottom style={{ margin: '10px' }}>
          I. Lee cuidadosamente las descripciones y subraya el inciso que corresponda
          </Typography>
        {
          testsll1.map(question => {
            if (question.type === 'POEM' && question.id === 17) {
              return <PoemLL1></PoemLL1>
            } if (question.type === 'LECTURE' && question.id === 16) {
              return <LectureLL1></LectureLL1>
            } if (question.type === 'OM') {
              return <MultipleQuestionLL1 questionData={question}></MultipleQuestionLL1>
            } else if (question.type === 'RABIERTA') {
              return <OpenQuestionLL1 questionData={question}></OpenQuestionLL1>
            } else if (question.type === 'RABIERTAMULTIPLE') {
              return <MultipleOpenQuestionLL1 questionData={question}></MultipleOpenQuestionLL1>
            }
          })
        }
        <Button variant="contained" color="primary" style={{ margin: '1rem', width: '98%', backgroundColor: '#F2FF2E' }}>
          Terminar examen
        </Button>
      </Container>
    </React.Fragment>
  );
}   