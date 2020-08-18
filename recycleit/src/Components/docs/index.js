import React from "react";
import Camera from "../camera/Camera";
import {
  GlobalStyle,
  Wrapper,
  Main,
  Section,
  HeadingGroup,
  Heading,
  CameraWrapper,
  CustomCaptureButton,
  Images,
  Image,
  RetakeButton,
  ChooseButton,
  Header,
  Footer

} from "../camera/globalStyle";
import {handleImage} from "../camera/Image";
import { findAllByDisplayValue } from "@testing-library/react";

class Docs extends React.PureComponent {
    

  state = {
    clickedCapture: false,
    customImages: [],
    imgClicked: 12999,
    retakeViz: false,
    chooseViz: false
  };

  handleTakePhotoCustomRenderer = img => {
    if(this.state.customImages.length < 6) {
        this.setState({
            customImages: [...this.state.customImages, img],
            clickedCapture: true,
            chooseViz: true
        });    }
    else {
        this.setState({
            retakeViz: true,
        });
    }
    
  };

  handleClick = (i) => {
    console.log("LE I", i);
    this.setState({
      imgClicked: i
    });
  }

  handleRetake = () => {
      this.setState({
          customImages: []
      });
  };
  // Usage

  render() {
    return [
      <GlobalStyle />,
      <Header key="header">
        <Wrapper>
        </Wrapper>
      </Header>,
      <Main key="section">
        <Wrapper>
          <Section>
            <HeadingGroup>
              <Heading>Take a picture of your recyclable!</Heading>
            </HeadingGroup>
            <CameraWrapper>
              <Camera
                captureButtonRenderer={onCapture => (
                  <CustomCaptureButton
                    as="button"
                    onClick={onCapture}
                    type="button"
                  >
                    Take Photo
                  </CustomCaptureButton>
                )}
                onTakePhoto={this.handleTakePhotoCustomRenderer}
              />
            </CameraWrapper>
            <Images>
              {this.state.customImages.map((img, i) => (
                <Image key={img} src={img} onClick={() => this.handleClick(i)}/>
              ))}
            </Images>
            <ChooseButton  taken={this.state.chooseViz}
            onClick={() => handleImage(this.state.imgClicked, this.state.customImages)}>{"Choose"}
            </ChooseButton>
              <RetakeButton showr={this.state.retakeViz} 
              onClick={() => this.handleRetake}>{"Retake"}
              </RetakeButton>
          </Section>
          <Section>
            <HeadingGroup>
            </HeadingGroup>
          </Section>
        </Wrapper>
      </Main>,
      <Footer>
      </Footer>
    ];
  }
}

export default Docs;



// WEBPACK FOOTER //
// ./src/docs/index.js