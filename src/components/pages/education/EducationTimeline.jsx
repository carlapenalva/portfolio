import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Typography, Box } from "@mui/material";

const EducationTimeline = () => {
  return (
    <>
      <Box
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "6em",
        }}
      >
        <img
          src="https://res.cloudinary.com/dvuap85l1/image/upload/v1729977218/formacion_actool.png"
          alt="formacion"
          style={{ position: "relative", width: "3em" }}
        />
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          style={{ position: "relative" }}
        >
          Formacion
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#111",
          color: "#fff",
          padding: "20px",
          display: { sm: "none" },
        }}
      >
        <Timeline position="right">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" sx={{ color: "#FFB0C9" }}>
                2022
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ color: "#FFB0C9" }} />
              <TimelineConnector sx={{ backgroundColor: "#FFB0C9" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Box
                sx={{
                  backgroundColor: "rgb(17, 11, 11)",
                  borderRadius: "8px",
                  padding: "16px",
                }}
              >
                <Typography variant="h6"> Coderhouse </Typography>
                <Typography variant="body2">Desarrollador Web</Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" sx={{ color: "#FFB0C9" }}>
                2022
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ color: "#FFB0C9" }} />
              <TimelineConnector sx={{ backgroundColor: "#FFB0C9" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Box
                sx={{
                  backgroundColor: "rgb(17, 11, 11)",
                  borderRadius: "8px",
                  padding: "16px",
                }}
              >
                <Typography variant="h6"> Coderhouse </Typography>
                <Typography variant="body2"> JavaScript</Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" sx={{ color: "#FFB0C9" }}>
                2023
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ color: "#FFB0C9" }} />
              <TimelineConnector sx={{ backgroundColor: "#FFB0C9" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Box
                sx={{
                  backgroundColor: "rgb(17, 11, 11)",
                  borderRadius: "8px",
                  padding: "16px",
                }}
              >
                <Typography variant="h6"> Coderhouse </Typography>
                <Typography variant="body2"> React JS</Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" sx={{ color: "#FFB0C9" }}>
                2024
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ color: "#FFB0C9" }} />
              <TimelineConnector sx={{ backgroundColor: "#FFB0C9" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Box
                sx={{
                  backgroundColor: "rgb(17, 11, 11)",
                  borderRadius: "8px",
                  padding: "16px",
                }}
              >
                <Typography variant="h6">EducacionIT</Typography>
                <Typography variant="body2"> JavaScript Avanzado</Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
      <Box
        sx={{
          backgroundColor: "rgb(17, 11, 11)",
          borderRadius: "8px",
          padding: "16px",
          display: { xs: "none", sm: "block" },
        }}
      >
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" sx={{ color: "#FFB0C9" }}>
                2022
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ color: "#FFB0C9" }} />
              <TimelineConnector sx={{ backgroundColor: "#FFB0C9" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Box
                sx={{
                  backgroundColor: "rgb(17, 11, 11)",
                  borderRadius: "8px",
                  padding: "16px",
                }}
              >
                <Typography variant="h6"> Coderhouse </Typography>
                <Typography>Desarrollador Web</Typography>
                <Typography variant="body2">HTML, CSS, SASS</Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" sx={{ color: "#FFB0C9" }}>
                2022
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ color: "#FFB0C9" }} />
              <TimelineConnector sx={{ backgroundColor: "#FFB0C9" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Box
                sx={{
                  backgroundColor: "rgb(17, 11, 11)",
                  borderRadius: "8px",
                  padding: "16px",
                }}
              >
                <Typography variant="h6"> Coderhouse </Typography>
                <Typography> JavaScript</Typography>
                <Typography variant="body2">
                  Desarrollo de Plantillas web estáticas con tecnologías como
                  HTML, CSS, JavaScript, ReactJs, Next.js, Bootstrap y Material
                  UI.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" sx={{ color: "#FFB0C9" }}>
                2023
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ color: "#FFB0C9" }} />
              <TimelineConnector sx={{ backgroundColor: "#FFB0C9" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Box
                sx={{
                  backgroundColor: "rgb(17, 11, 11)",
                  borderRadius: "8px",
                  padding: "16px",
                }}
              >
                <Typography variant="h6"> Coderhouse </Typography>
                <Typography> React JS</Typography>
                <Typography variant="body2">
                  Desarrollo de Plantillas web estáticas con tecnologías como
                  HTML, CSS, JavaScript, ReactJs, Next.js, Bootstrap y Material
                  UI.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" sx={{ color: "#FFB0C9" }}>
                2024
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ color: "#FFB0C9" }} />
              <TimelineConnector sx={{ backgroundColor: "#FFB0C9" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Box
                sx={{
                  backgroundColor: "rgb(17, 11, 11)",
                  borderRadius: "8px",
                  padding: "16px",
                }}
              >
                <Typography variant="h6">Educacion IT</Typography>
                <Typography> JavaScript Avanzado</Typography>
                <Typography variant="body2">
                  Desarrollo y mantenimiento de sitios web Fullstack para
                  emprendimientos personales de clientes y empresas.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </>
  );
};

export default EducationTimeline;
