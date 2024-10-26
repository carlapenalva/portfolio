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
        }}
      >
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" sx={{ color: "#FFB0C9" }}>
                2020 - 2021
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
                <Typography variant="h6">Autónomo / Freelancer</Typography>
                <Typography>1 Año - Desarrollador web Frontend</Typography>
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
                2021 - 2022
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
                <Typography variant="h6">
                  Autónomo / Freelancer / Pymes
                </Typography>
                <Typography>9 meses - Desarrollador web Fullstack</Typography>
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
