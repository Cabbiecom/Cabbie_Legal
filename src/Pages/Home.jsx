import {
    Container,
    Typography,
    Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const Home = () => {
    const props = useSpring({
        to: { opacity: 1, transform: "translateX(0)" },
        from: { opacity: 0, transform: "translateX(-100px)" },
        reset: true,
        delay: 200,
    });
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                <div style={{ marginTop: "40px" }}>
                    <Typography variant="h3" component="h3" gutterBottom>
                        Términos y Condiciones
                    </Typography>
                </div>
                <animated.div style={props}>
                    <Container maxWidth="md">
                        <Box
                            elevation={3}
                            sx={{
                                padding: "24px",
                                marginTop: "20px",
                                marginBottom: "24px",
                            }}
                        >
                            <Typography variant="h4" gutterBottom>
                                Certificación DPF de UTI
                            </Typography>
                            <Typography variant="body1" paragraph>
                                UTI ha certificado al Departamento de Comercio de los
                                Estados Unidos que se adhiere a (1) la UE-EE. UU.
                                Principios del Marco de Privacidad de los datos
                                relativos al tratamiento de los datos personales
                                recibidos de los países miembros del EEA de acuerdo con
                                UE-EE. UU. DPF, y del Reino Unido (y Gibraltar) en
                                función de la Ampliación del Reino Unido al DPF UE-EE.
                                UU. y (2) los Principios del Marco de Privacidad de los
                                datos relacionados con el tratamiento de los datos
                                personales recibidos de Suiza de acuerdo con la
                                normativa del DPF Suiza-EE. UU. En caso de conflicto
                                entre este aviso y los Principios mencionados
                                anteriormente, prevalecerán los Principios. En caso de
                                que los DPF UE-EE. UU. o el DPF Suiza-EE. UU. se
                                invalidaran, UTI transferirá los datos que estén sujetos
                                a estas certificaciones de acuerdo con los otros
                                mecanismos de transferencia de datos descritos
                                anteriormente.
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                Tenga en cuenta lo siguiente:
                            </Typography>
                            <Typography variant="body1" paragraph>
                                <b>Ámbito:</b> La certificación DPF de UTI se aplica a
                                los datos relacionados con los interesados en el EEA, el
                                Reino Unido o Suiza que recibe de otros responsables del
                                tratamiento de datos.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                <b>Acceso:</b> Los usuarios tienen derecho a acceder a
                                sus datos personales, que están sujetos a la
                                certificación DPF de UTI. Para obtener información sobre
                                cómo ejercer este derecho, consulte la sección “Elección
                                y transparencia” más arriba.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                <b>Transferencia posterior:</b> UTI es el responsable de
                                la transferencia de los datos personales, sujeta a su
                                certificación a terceros.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                <b>Solicitud de las autoridades judiciales:</b> La ley
                                aplicable exige que UTI comparta los datos de los
                                usuarios, incluidos los que pueden estar sujetos a la
                                certificación de UTI, de conformidad con un proceso
                                legal o una solicitud gubernamental, incluida la de las
                                fuerzas de seguridad.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                <b>Investigación y ejecución:</b> UTI está sujeto a las
                                facultades de investigación y ejecución de la Comisión
                                Federal de Comercio de los EE. UU.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                <b>Preguntas y disputas:</b> Los pasajeros y los
                                destinatarios de las entregas pueden contactar con UTI{" "}
                                <Link href="#">aquí</Link>, y los conductores y
                                repartidores pueden contactar con UTI{" "}
                                <Link href="#">aquí</Link> si tienen preguntas sobre
                                nuestro cumplimiento de los Principios mencionados
                                anteriormente.
                            </Typography>
                        </Box>
                    </Container>
                </animated.div>
            </Box>
        </>
    );
}

export default Home;