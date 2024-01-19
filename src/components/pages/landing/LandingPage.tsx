import DiscoverWisdocity from "components/pages/landing/Home/DiscoverWisdocity/DiscoverWisdocity";
import Testimonials from "components/pages/landing/Home/Testimonials/Testimonials";

import styled from "styled-components";


import bgPhoto from "./img/bg-photo.png";
import demoPhoneImg1 from "./img/demo/phone-1.png";
import demoPhoneImg2 from "./img/demo/phone-2.png";
import demoPhoneImg3 from "./img/demo/phone-3.png";
import demoPhoneImg4 from "./img/demo/phone-4.png";
import demoPhoneImg5 from "./img/demo/phone-5.png";
import joinPhotoImg1 from "./img/join/photo-1.png";
import joinPhotoImg2 from "./img/join/photo-2.png";
import joinPhotoImg3 from "./img/join/photo-3.png";
import joinPhotoImg4 from "./img/join/photo-4.png";
import joinPhotoImg5 from "./img/join/photo-5.png";
import joinPhotoImg6 from "./img/join/photo-6.png";
import joinPhotoImg7 from "./img/join/photo-7.png";
import joinPhotoImg8 from "./img/join/photo-8.png";
import joinPhotoImg9 from "./img/join/photo-9.png";
import joinPhotoImg10 from "./img/join/photo-10.png";
import OurExperts from "components/pages/landing/Home/OurExperts/OurExperts";
import PublicLayout from "components/pages/landing/PublicLayout/PublicLayout";

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;

const PhotoBlock = styled.section`
  background: linear-gradient(#13002c56, #13002c56),
    url("${bgPhoto}") no-repeat center center / cover; /* #13002C56 */
  height: 83vh;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 33%;
    background-image: linear-gradient(transparent, var(--c-body));
  }
  ${Container} {
    height: 80%;
    display: flex;
    align-items: center;
    padding: 0 40px;
  }
  p {
    font-family: Futura, Calibri, Arial, sans-serif;
    line-height: 1.11em;
    font-weight: 400;
    font-size: 68px;
    color: white;
    width: 531px;
  }
`;
const SectionDescription = styled.div`
  text-align: center;
  font-size: 18px;
  width: 730px;
  margin: 0 auto;
  .desc-txt-above {
    text-transform: uppercase;
    font-weight: 600;
    color: #7f30ac;
    letter-spacing: -0.03em;
  }
  .desc-txt-large {
    font-size: 52px;
    margin: 38px 0 25px;
    font-family: Futura, Calibri, Arial, sans-serif;
    line-height: 1.15em;
    color: var(--c-accent-purple);
  }
  .desc-txt-below {
    letter-spacing: -0.024em;
    line-height: 1.55em;
  }
  &.left {
    text-align: left;
    -width: auto;
    margin: initial;
  }
`;
const DemoCard = styled.div`
  --card-radius: 32px;
  padding: 32px 32px 302px;
  border-radius: var(--card-radius);
  border: 1px solid #d9d9eb;
  background: linear-gradient(#faf4ff, #f0ddff);
  position: relative;
  overflow: hidden;
  .card-title {
    font-family: Futura, Calibri, Arial, sans-serif;
    font-size: 24px;
    margin-bottom: 18px;
    line-height: 1.2em;
    color: var(--c-accent-purple);
  }
  .card-description {
    line-height: 1.62em;
    letter-spacing: -0.024em;
  }
`;
const DemoCardPhoto = styled.div`
  position: absolute;
  width: 100%;
  height: 300px;
  bottom: 0;
  left: 0;
  margin-top: auto;
  --move-offset: calc(var(--card-radius) - 8px);
  img {
    border-radius: 16px 16px 0 0;
    box-shadow: 0 0 22px #8f689c59;
    position: absolute;
    bottom: 0;
  }
  .img-1,
  .img-4 {
    left: var(--move-offset);
  }
  .img-3 {
    left: 50%;
    transform: translateX(-50%);
  }
  .img-2,
  .img-5 {
    right: var(--move-offset);
  }
`;
const DemoRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 47px;
  justify-content: space-between;
`;
const JoinCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  row-gap: 12px;
  img {
    border-radius: 12px;
  }
  &.left {
    img {
      align-self: flex-end;
    }
    img:nth-child(2n) {
      align-self: flex-start;
    }
  }
  &.right {
    img {
      align-self: flex-start;
    }
    img:nth-child(2n) {
      align-self: flex-end;
    }
  }
`;
const DemoSection = styled.section`
  ${SectionDescription} {
    margin: 62px auto 81px;
  }
`;
const JoinSection = styled.section`
  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 160px auto;
  }

  ${SectionDescription} {
    width: 596px;
    padding: 17px;
  }
`;


const Home = () => {
  return (
    <PublicLayout>
      <PhotoBlock>
        <Container>
          <p>Lorem ipsum dolor sit amet</p>
        </Container>
      </PhotoBlock>
      <DemoSection>
        <Container>
          <SectionDescription>
            <p className="desc-txt-above">
              <a>Learn Here</a>
            </p>
            <h2 className="desc-txt-large">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p className="desc-txt-below">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo con. Ut enim ad minim veniam, quis
              nostrud exercitation.
            </p>
          </SectionDescription>
          <DemoRow>
            <DemoCard>
              <p className="card-title">
                Lorem ipsum dolor sit amet consectetur
              </p>
              <p className="card-description">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo con. Ut enim ad minim
                veniam, quis nostrud exercitation.
              </p>
              <DemoCardPhoto>
                <img src={demoPhoneImg1} alt="Phone" className="img-1" />
                <img src={demoPhoneImg2} alt="Phone" className="img-2" />
              </DemoCardPhoto>
            </DemoCard>
            <DemoCard>
              <p className="card-title">
                Lorem ipsum dolor sit amet consectetur
              </p>
              <p className="card-description">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo con. Ut enim ad minim
                veniam, quis nostrud exercitation.
              </p>
              <DemoCardPhoto>
                <img src={demoPhoneImg3} alt="Phone" className="img-3" />
              </DemoCardPhoto>
            </DemoCard>
            <DemoCard>
              <p className="card-title">
                Lorem ipsum dolor sit amet consectetur
              </p>
              <p className="card-description">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo con. Ut enim ad minim
                veniam, quis nostrud exercitation.
              </p>
              <DemoCardPhoto>
                <img src={demoPhoneImg4} alt="Phone" className="img-4" />
                <img src={demoPhoneImg5} alt="Phone" className="img-5" />
              </DemoCardPhoto>
            </DemoCard>
          </DemoRow>
        </Container>
      </DemoSection>
      <JoinSection>
        <Container>
          <JoinCol className="left">
            <img src={joinPhotoImg1} alt="Photo" />
            <img src={joinPhotoImg2} alt="Photo" />
            <img src={joinPhotoImg3} alt="Photo" />
            <img src={joinPhotoImg4} alt="Photo" />
            <img src={joinPhotoImg5} alt="Photo" />
          </JoinCol>
          <SectionDescription>
            <p className="desc-txt-above">Join the Best</p>
            <p className="desc-txt-large">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <p className="desc-txt-below">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo con. Ut enim ad minim veniam, quis
              nostrud exercitation.
            </p>
            <div>
              {/*<Button className="wide accent">Become an expert</Button>*/}
            </div>
          </SectionDescription>
          <JoinCol className="right">
            <img src={joinPhotoImg6} alt="Photo" />
            <img src={joinPhotoImg7} alt="Photo" />
            <img src={joinPhotoImg8} alt="Photo" />
            <img src={joinPhotoImg9} alt="Photo" />
            <img src={joinPhotoImg10} alt="Photo" />
          </JoinCol>
        </Container>
      </JoinSection>
      <OurExperts></OurExperts>
      <Testimonials></Testimonials>
      <DiscoverWisdocity></DiscoverWisdocity>
    </PublicLayout>
  );
};

export default Home;
