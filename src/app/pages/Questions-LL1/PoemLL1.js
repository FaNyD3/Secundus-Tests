import React from 'react'
import Typography from '@material-ui/core/Typography';

export class PoemLL1 extends React.Component {

    render() {
        const { questionData } = this.props;
        return (
            <div>
                <Typography variant="h5" gutterBottom style={{ margin: '15px' }}>
                III. Lee el siguiente poema y contesta.
                </Typography>
                <Typography variant="h6" gutterBottom style={{ marginTop: '10px' }}>
                    Presencia
                </Typography>
                <Typography variant="body1" gutterBottom >
                    Tenía ondulante cabello nocturno, <br />
                    descansa ya hace tiempo en algún sitio enterrado. <br />
                    Tenía ojos claros como arroyos, <br />
                    antes de que la tristeza fuera mi huésped, <br />
                    tenía manos blanquirrojas de concha, <br />
                    pero la fatiga consumió su blanco. <br />
                    Y un día vendrá el postrero, <br /> 
                    que hundirá la mirada hueca <br />
                    hasta la inestabilidad de mi cuerpo <br />
                    y arrojará todo lo muerto de mí. <br />
                    Y volverá a respirar mi alma <br />
                    y beberá lo eterno. • <br />
                </Typography>
            </div>

        )
    }
}

export default PoemLL1
