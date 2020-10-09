import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MultipleQuestionLC1 from './Questions-LC1/MultipleQuestionLC1'
import LectureLC1 from './Questions-LC1/LectureLC1'
import OpenSpecialQuestionLC1 from '../pages/Questions-LC1/OpenSpecialQuestionLC1'

import { testslc1 } from './testsLC1';
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



export function TestLC1() {
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
      <Container maxWidth="sm" component="div" variant="h6" gutterBottom style={{ backgroundColor: '#F6D9D9', height: '100vh', boxShadow: '30px 30px 30px 30px rgba(82, 63, 105, 0.08', overflow: 'auto' }}>
      <Typography variant="h3" gutterBottom style={{ backgroundColor: '#FF7070' }}>
          PRUEBA DE CONOCIMIENTOS PREVIOS 2020
        </Typography>
        <Typography variant="h5" gutterBottom style={{ margin: '10px' }}>
        I. Escribe en el paréntesis la letra de la opción correcta
          </Typography>
        {
          testslc1.map(question => {
            if (question.type === 'LECTURE') {
              return <LectureLC1></LectureLC1>
            } else if (question.type === 'OM') {
              return <MultipleQuestionLC1 questionData={question}></MultipleQuestionLC1>
            }
            if (question.type === 'SPECIAL') {
              return <OpenSpecialQuestionLC1 questionData={question}></OpenSpecialQuestionLC1>
            }
          })
        }
        <Button variant="contained" color="primary" style={{ margin: '1rem', width: '98%', backgroundColor: '#FF2929'}}>
          Terminar examen
        </Button>
      </Container>
    </React.Fragment>
  );
}   