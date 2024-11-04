import "./Projects.css";
import { Typography } from "@mui/material";

const Projects = () => {
  return (
    <section style={{ position: "relative" }}>
      <div className="tittleProjects">
        <img
          src="https://res.cloudinary.com/dvuap85l1/image/upload/v1730076007/icons8-mobile-app-48_a2eex3.png"
          alt="Projectos"
        />
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          style={{ position: "relative" }}
        >
          Projectos
        </Typography>
      </div>
    </section>
  );
};
export default Projects;
