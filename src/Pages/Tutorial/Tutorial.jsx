import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { useSpring, animated } from "react-spring";
import ReactPlayer from "react-player";
import Cabbie_Video from '../../Assets/Video/Cabbie.mp4';

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
                textAlign: "center",
                padding: 2,
            }}
        >
            <animated.div style={props}>
                <Typography variant="h3" component="h3" gutterBottom>
                    Tutorial
                </Typography>
                <Container>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "auto",
                            marginTop: 2,
                            borderRadius: 2, // Border radius for the container
                            overflow: "hidden", // Ensures the rounded corners apply to the video
                            elevation: 5,
                        }}
                    >
                        <ReactPlayer
                            url={Cabbie_Video}
                            playing
                            controls
                            width="100%"
                            height="auto"
                            style={{
                                borderRadius: '12px',

                            }} // Border radius for the video
                        />
                    </Box>
                </Container>
            </animated.div>
        </Box>
    );
};

export default Tutorial;
