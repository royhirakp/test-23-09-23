import HeaderMain from "./parts/HeaderMain";
import HeaderTop from "./parts/HeaderTop";
import Container from "../Container";
import NavBar from "../NavBar/NavBar";
import SimpleSlider from "../Slider/Slider";
const Header = () => {
  return (
    <>
      <Container style={{ border: "1px solid #c1bfbf" }}>
        <HeaderTop />
      </Container>
      <Container style={{ border: "1px solid #c1bfbf" }}>
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
