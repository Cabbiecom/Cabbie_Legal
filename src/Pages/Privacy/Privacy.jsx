import { Box, Typography, Container } from "@mui/material";
import { useSpring, animated } from "react-spring";
import { ReactComponent as CabbieSVG } from "../../Assets/svg/security_on.svg";

const Privacy = () => {
    const props = useSpring({
        to: { opacity: 1, transform: "translateX(0)" },
        from: { opacity: 0, transform: "translateX(-100px)" },
        reset: true,
        delay: 200,
    });
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Typography variant="h3" component="h3" gutterBottom>
                Privacidad
            </Typography>
            <animated.div style={props}>
                <Container>
                    <Typography variant="h5" gutterBottom>
                        Este aviso se aplica a los usuarios de las aplicaciones,
                        los sitios web y otros servicios de Cabbie en todo el
                        mundo.{" "}
                    </Typography>
                    <br />
                    <Typography variant="body3" gutterBottom>
                        Cuando utiliza Cabbie, nos confía su información personal.
                        Prometemos no traicionar la confianza de nuestros
                        clientes. Para lograr esto, primero queremos ayudarlo a
                        comprender nuestras prácticas de privacidad. Este Aviso
                        describe qué información personal (“Información”)
                        recopilamos, cómo la usamos y divulgamos, y las opciones
                        que usted tiene al respecto. Le recomendamos que lo lea
                        junto con nuestra información general de privacidad, que
                        destaca información sobre nuestras prácticas de privacidad
                        y describe la información que recopilamos y cómo la
                        usamos.
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
                <animated.div style={props}>
                    {/* Hace que el SVG se adapte al tamaño de su contenedor */}
                    <Box
                        sx={{
                            maxWidth: { xs: "100%", sm: "345px" },
                            overflow: "hidden",
                            flexGrow: 1,
                        }}
                    >
                        <CabbieSVG style={{ width: "100%", height: "auto" }} />
                    </Box>
                </animated.div>
            </Box>
        </Box>
    );
};
export default Privacy;