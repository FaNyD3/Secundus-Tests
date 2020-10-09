import React from 'react'
import Typography from '@material-ui/core/Typography';

export class LectureLL1 extends React.Component {
    
    render() {
        const { questionData } = this.props;
        return (
            <div>
                <Typography variant="h5" gutterBottom style={{ margin: '15px' }}>
                II. Lee el siguiente texto y resuelve el ejercicio
                </Typography>
                <Typography variant="h6" gutterBottom style={{ width: '100%', maxWidth: '500', marginBottom: '10px' }}>
                    El Otro Yo
                </Typography>
                <Typography variant="subtitle1" gutterBottom style={{ width: '100%', maxWidth: '500'}}>
                    Se trataba de un muchacho corriente: en los pantalones se le formaban rodilleras, leía historietas, hacía
                    ruido cuando comía, se metía los dedos a la nariz, roncaba en la siesta, se llamaba Armando, corriente
                    en todo menos en una cosa: tenía Otro Yo.
                    El Otro Yo usaba cierta poesía en la mirada, se enamoraba de las actrices, mentía cautelosamente,
                    se emocionaba en los atardeceres. Al muchacho le preocupaba mucho su Otro Yo y le hacía sentirse
                    incómodo frente a sus amigos. Por otra parte el Otro Yo era melancólico, y debido a ello, Armando no
                    podía ser tan vulgar como era su deseo.
                    Una tarde Armando llegó cansado del trabajo, se quitó los zapatos, movió lentamente los dedos de
                    los pies y encendió la radio. En la radio estaba Mozart, pero el muchacho se durmió. Cuando despertó
                    el Otro Yo lloraba con desconsuelo. En el primer momento, el muchacho no supo qué hacer, pero después se rehizo e insultó concienzudamente al Otro Yo. Este no dijo nada, pero a la mañana siguiente se
                    había suicidado.
                    Al principio la muerte del Otro Yo fue un rudo golpe para el pobre Armando, pero enseguida pensó
                    que ahora sí podría ser enteramente vulgar. Ese pensamiento lo reconfortó.
                    Solo llevaba cinco días de luto, cuando salió a la calle con el propósito de lucir su nueva y completa
                    vulgaridad. Desde lejos vio que se acercaban sus amigos. Eso le lleno de felicidad e inmediatamente estalló en risotadas. Sin embargo, cuando pasaron junto a él, ellos no notaron su presencia. Para peor de males, el muchacho alcanzó a escuchar que comentaban: “Pobre Armando. Y pensar
                    que parecía tan fuerte y saludable”.
                    El muchacho no tuvo más remedio que dejar de reír y, al mismo tiempo, sintió a la altura del esternón un ahogo que se parecía bastante a la
                    nostalgia. Pero no pudo sentir auténtica melancolía, porque toda la melancolía se la había llevado el Otro Yo. •
                </Typography>
            </div>

        )
    }
}

export default LectureLL1
