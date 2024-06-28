import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { useSpring, animated } from "react-spring";

const Tutorial = () => {
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
            <animated.div style={props}>
                <Typography variant="h3" component="h3" gutterBottom>
                    Tutorial
                </Typography>
                <Container>
                    <Typography variant="body1" gutterBottom>
                        Contenido del Tutorial...
                    </Typography>
                </Container>
            </animated.div>
        </Box>

    );
};
export default Tutorial;
