import {
    Container,
    Typography,
    Box,
} from "@mui/material";
import { useSpring, animated } from "react-spring";
import { ReactComponent as PersonSVG } from "../../Assets/svg/personal_info_re.svg";

const About = () => {
    const props = useSpring({
        to: { opacity: 1, transform: "translateX(0)" },
        from: { opacity: 0, transform: "translateX(-100px)" },
        reset: true,
        delay: 200,
    });
    return (
        <Box
            sx={{
                height: 600,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Typography variant="h3" component="h3" gutterBottom>
                Acerca de
            </Typography>
            <animated.div style={props}>
                <Container>
                    <Typography variant="h5" gutterBottom>
                        Trabajamos para mejorar la movilidad en todo el mundo.
                    </Typography>
                    <br />
                    <Typography variant="body3" gutterBottom>
                        Movilizamos al mundo y eso es lo que mejor hacemos. Es
                        nuestra verdadera naturaleza. Corre por nuestras venas. Es
                        lo que nos saca de la cama cada mañana. Nos motiva a
                        reinventar constantemente mejores formas de movernos. A
                        usted. Para todos los lugares que quieras visitar. Para
                        todo lo que quieras lograr. Cualquier forma que desees
                        obtener ganancias. Mundial. tiempo real. A la increíble
                        velocidad actual.
                    </Typography>
                </Container>
            </animated.div>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                    p: 2,
                }}
            >
                <Container>
                    <animated.div style={props}>
                        {/* Hace que el SVG se adapte al tamaño de su contenedor */}
                        <Box
                            sx={{
                                maxWidth: { xs: "100%", sm: "345px" },
                                overflow: "hidden",
                                flexGrow: 1,
                            }}
                        >
                            <PersonSVG style={{ width: "100%", height: "auto" }} />
                        </Box>
                    </animated.div>
                </Container>
            </Box>
        </Box>

    );
};
export default About;