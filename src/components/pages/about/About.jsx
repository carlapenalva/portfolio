import StarsBackground from "../../common/starsBackground/StarsBackground";
import "./About.css";
const About = () => {
  return (
    <>
      <StarsBackground />
      <div style={{ position: "relative" }}>
        <div className="aboutMe">
          <img
            src="https://res.cloudinary.com/dvuap85l1/image/upload/v1729968345/desarrolladora_bzizu2.png"
            alt="desarrolladora"
          />
          <h1
            style={{
              /* position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",*/
              color: "white",
            }}
          >
            Frontend Developer
          </h1>
          <h2>Carla Peñalva</h2>
        </div>
      </div>
    </>
  );
};

export default About;
