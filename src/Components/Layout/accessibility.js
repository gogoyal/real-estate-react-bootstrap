import { Container, Row, Col } from "react-bootstrap";
export default function Accessibility() {
  return (
    <>
      <Container fluid className=" p-5">
        <Row>
          <h1 className="mb-3">
            <b>Accessibility</b>
          </h1>
          <Col xs="12">
            <h3 className="mb-3">
              <b>Our Commitment</b>
            </h3>
            <p className="fs-5">
              We are committed to providing an accessible website. If you have
              difficulty accessing content, have trouble viewing a file on the
              site, or notice any accessibility problems, please contact us to
              specify the nature of the accessibility issue and the assistive
              technology you use. We will strive to provide the content you need
              in the format you require. We welcome your suggestions and
              comments about improving ongoing efforts to increase the
              accessibility of this website.
            </p>
          </Col>
          <Col xs="12">
            <h3 className="mb-3">
              <b>Web Accessibility Help</b>
            </h3>
            <p className="fs-5">
              There are actions you can take to adjust your web browser to make
              your web experience more accessible.
            </p>
          </Col>
          <Col xs="12">
            <h3 className="mb-3">
              <b>I find a keyboard or mouse hard to use</b>
            </h3>
            <ul className="fs-5">
              <p>
                If you have trouble seeing web pages, the US Social Security
                Administration offers these tips for optimizing your computer
                and browser to improve your online experience.
              </p>
              <li>Use your computer to read web pages out loud</li>
              <li>Use the keyboard to navigate screens</li>
              <li>Increase text size</li>
              <li>Magnify your screen</li>
              <li>Change background and text colors</li>
              <li>Make your mouse pointer more visible (Windows only)</li>
            </ul>
          </Col>
          <Col xs="12">
            <h3 className="mb-3">
              <b>I find a keyboard or mouse hard to use</b>
            </h3>
            <p className="fs-5">
              If you find a keyboard or mouse difficult to use, speech
              recognition software such as Dragon® NaturallySpeaking may help
              you navigate web pages and online services. This software allows
              the user to move focus around a web page or application screen
              through voice controls.
            </p>
          </Col>
          <Col xs="12">
            <h3 className="mb-3">
              <b>I find a keyboard or mouse hard to use</b>
            </h3>
            <ul className="fs-5">
              <li>
                Transcripts: A text transcript is a text equivalent of audio
                information that includes spoken words and non-spoken sounds
                such as sound effects.
              </li>
              <li>
                Captioning: A caption is a transcript for the audio track of a
                video presentation that is synchronized with the video and audio
                tracks. Captions are generally rendered visually by being
                superimposed over the video, which benefits people who are deaf
                and hard-of-hearing, and anyone who cannot hear the audio (e.g.,
                when in a crowded room). Learn how to turn captioning on and off
                on YouTube.
              </li>
              <li>
                Volume controls: Your computer, tablet, or mobile device has
                volume control features. Each video and audio service has
                additional volume controls. Try adjusting both your device's
                volume controls and your media players' volume controls to
                optimize your listening experience.
              </li>
              
            </ul>
          </Col>
          <Col xs="12">
            <h3 className="mb-3">
              <b>For additional assistance</b>
            </h3>
            <p className="fs-5">
              Email compliance@placester.com if you experience difficulty in
              accessing any part of this website, and we will work with you to
              provide the information, item, or transaction you seek through an
              alternate communication method that is accessible for you
              consistent with applicable law.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
