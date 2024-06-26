import { Container, Row, Col } from "react-bootstrap";
export default function Dmca() {
  return (
    <>
      <Container fluid className="p-5 border">
        <h1>
          <b>DMCA Compliance</b>
        </h1>
        <h4>
          <b>
            <i>Digital Millenium Copyright Act Compliance</i>
          </b>
        </h4>
        <Row>
          <Col xs="12" className="p-5">
            <h5 className="p-2">
              Claims of Copyright Infringement Related Issues (17 USC § 512 et
              seq.).
            </h5>
            <ul className="fs-5 opacity-75 p-3">
              <p>
                We respect the intellectual property rights of others. Anyone
                who believes their work has been reproduced in a way that
                constitutes copyright infringement may notify our agent by
                providing the following information:
              </p>
              <li>
                Identification of the copyrighted work that you claim has been
                infringed, or, if multiple copyrighted works at a single online
                site are covered by a single notification, a representative list
                of such works at the site.
              </li>
              <li>
                Identification of the material that you claim is infringing and
                needs to be removed, including a description of where it is
                located so that the copyright agent can locate it.
              </li>
              <li>
                Your address, telephone number, and, if available, e­mail
                address, so that the copyright agent may contact you about your
                complaint; and
              </li>
              <li>
                A signed statement that the above information is accurate; that
                you have a good faith belief that the identified use of the
                material is not authorized by the copyright owner, its agent, or
                the law; and, under penalty of perjury, that you are the
                copyright owner or are authorized to act on the copyright
                owner's behalf in this situation.
              </li>
              <li>
                Identification of the material that has been removed or to which
                access has been disabled, and the location at which the material
                appeared before it was removed or access to it was disabled;
              </li>
              <li>
                A statement under penalty of perjury that you have a good faith
                belief that the material was removed or disabled as a result of
                mistake or misidentification;
              </li>
              <li>
                Your name, address, and telephone number; a statement that you
                consent to the jurisdiction of federal district court for the
                judicial district in which your address is located, or if your
                address is outside of the U.S., for any judicial district in
                which the service provider may be found; and that you will
                accept service of process from the complainant.
              </li>
            </ul>
          </Col>
          <Col xs="12" className="p-5">
            <h4>To submit notices of copyright issues</h4>
            <p className="fs-5 opacity-75">
              Notifications should be sent as follows:
            </p>
            <div>
              <h5>
                <b>By mail:</b>
              </h5>
              <p className="fs-5 opacity-75">
                Placester, Inc. 100 High Street Boston, MA Attention: DMCA
                Designated Agent
              </p>
            </div>
            <div>
              <h5>
                <b>By e­mail:</b>
              </h5>
              <p className="fs-5 opacity-75">Compliance@placester.com</p>
              <p className="fs-5 opacity-75">
                If you give notice of copyright infringement by e­mail, an agent
                may begin investigating the alleged copyright infringement.
                However, we must receive your signed statement by mail or as an
                attachment to your e­mail before we are required to take any
                action.
              </p>
            </div>
            <div>
              <h5>
                <b>Legal disclaimer</b>
              </h5>
              <p className="fs-5 opacity-75">
                This information should not be construed as legal advice. We
                recommend you seek independent legal counsel before filing a
                notification or counter­notification. For further information
                about the DMCA, please visit the website of the United States
                Copyright Office at http://www.copyright.gov/onlinesp.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
