import StarsBackground from "../../common/starsBackground/StarsBackground";

const About = () => {
  return (
    <>
      <StarsBackground />
      <div style={{ position: "relative", height: "100vh" }}>
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            zIndex: 1, // Asegúrate de que esté en un índice más alto que el fondo
          }}
        >
          Bienvenido a mi portfolio
        </h1>
      </div>
    </>
  );
};

export default About;
