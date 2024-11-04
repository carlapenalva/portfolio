import "./Skills.css";
import { Typography } from "@mui/material";
const Skills = () => {
  return (
    <section style={{ position: "relative" }} className="sectionSkills">
      <div className="tittleSkills">
        <img
          src="https://res.cloudinary.com/dvuap85l1/image/upload/v1730075296/icons8-computer-science-48_ck6yyd.png"
          alt=""
        />
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          style={{ position: "relative" }}
        >
          Skills Tecnicos
        </Typography>
      </div>
      <div className="skills">
        <figure>
          <img
            src="https://res.cloudinary.com/dvuap85l1/image/upload/v1730069780/html-svgrepo-com_r7j8en.svg"
            alt="html"
          />
          <figcaption>HTML 5</figcaption>
        </figure>
        <figure>
          <img
            src="https://res.cloudinary.com/dvuap85l1/image/upload/v1730069940/css-svgrepo-com_vkq4cg.svg"
            alt="css"
          />
          <figcaption>CSS 3</figcaption>
        </figure>
        <figure>
          <img
            src="https://res.cloudinary.com/dvuap85l1/image/upload/v1730070423/bootstrap-svgrepo-com_nikuvw.svg"
            alt="bootstrap"
          />
          <figcaption>Boostrap</figcaption>
        </figure>
        <figure>
          <img
            src="https://res.cloudinary.com/dvuap85l1/image/upload/v1730072493/icons8-javascript-98_cig6zf.png"
            alt="javaScript"
          />
          <figcaption>Java Script</figcaption>
        </figure>
        <figure>
          <img
            src="https://res.cloudinary.com/dvuap85l1/image/upload/v1730071800/react-javascript-js-framework-facebook-svgrepo-com_1_sfb4tz.svg"
            alt="reactJS"
          />
          <figcaption>React</figcaption>
        </figure>
        <figure>
          <img
            src="https://res.cloudinary.com/dvuap85l1/image/upload/v1730070423/git-svgrepo-com_vxzjw4.svg"
            alt="git"
          />
          <figcaption>Git</figcaption>
        </figure>
        <figure>
          <img
            src="https://res.cloudinary.com/dvuap85l1/image/upload/v1730069279/material-ui-svgrepo-com_1_iueawt.svg"
            alt="Material ui"
          />
          <figcaption>Material ui</figcaption>
        </figure>
        <figure>
          <img
            src="https://res.cloudinary.com/dvuap85l1/image/upload/v1730069720/sass-svgrepo-com_sdkgni.svg"
            alt="Sass"
          />
          <figcaption>Sass</figcaption>
        </figure>
      </div>
    </section>
  );
};
export default Skills;
