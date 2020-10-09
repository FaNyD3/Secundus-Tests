import React from 'react'
import Typography from '@material-ui/core/Typography';

export class LectureLC1 extends React.Component {

    render() {
        const { questionData } = this.props;
        return (
            <div>
                <Typography variant="h5" gutterBottom style={{ margin: '15px' }}>
                    III. Lee el siguiente texto y responde luego a lo que se te pide:
                </Typography>
                <Typography variant="subtitle1" gutterBottom style={{ width: '100%', maxWidth: '500' }}>
                    Son varios los factores responsables de que algunas sociedades actuales estén considerando abiertamente la legalización del aborto. El más
                    importante de ellos es, sin duda, la sobrepoblación a la que se enfrenta ya el mundo, y que aumentará muy considerablemente en los próximos años. Si el exceso de población no trajera consecuencias considerables para nadie, no habría que temerle. Pero resulta que los recursos de
                    alimentación de que disponemos son, por desgracia, limitados. Hasta la fecha, ni la ciencia ni la más moderna tecnología han podido evitar el
                    hambre en grandes zonas del planeta. Podría pensarse que el problema quedaría resuelto con una mejor distribución de los alimentos, pero es un
                    engaño. Simplemente la capacidad productora de los alimentos del mundo - fertilidad de la tierra, crianza de animales comestibles - es inferior
                    al creciente número de bocas.
                    El aborto sería una forma de controlar la natalidad, pero se enfrenta a fuertes reparos éticos y religiosos, que ven en el aborto un crimen pues,
                    por muy temprano que se lleve a cabo, se le quita la vida al feto ya formado.
                    Los que se oponen al aborto indican la posibilidad de aumentar el rendimiento actual, de explorar zonas aún vírgenes (selvas, desiertos, montañas, el mar) para producir más alimentos. Otros, un poco más realistas, piensan que es imprescindible el control de la natalidad , pero mediante
                    métodos anticonceptivos. Es esta una de las corrientes - la planificación familiar - más vigorosas de nuestros días, pero supone la realización de
                    grandes campañas educativas para la sociedad.
                </Typography>
            </div>

        )
    }
}

export default LectureLC1
