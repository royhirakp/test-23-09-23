import HeaderMain from "./parts/HeaderMain";
import HeaderTop from "./parts/HeaderTop";
import Container from "../Container";
import NavBar from "../NavBar/NavBar";
import SimpleSlider from "../Slider/Slider";
const Header = () => {
  return (
    <>
      <Container style={{ borderBottom: "1px solid #e9c7c7" }}>
        <HeaderTop />
      </Container>
      <Container style={{ borderBottom: "1px solid #e9c7c7" }}>
        <HeaderMain />
      </Container>
      <Container style={{}}>
        <NavBar />
      </Container>
      {/* <Container
        style={
          {
            // border: "1px solid red"
          }
        }
      >
        <SimpleSlider />
      </Container> */}
    </>
  );
};

export default Header;
