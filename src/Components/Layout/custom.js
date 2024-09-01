import { Container, Image } from "react-bootstrap";
export default function Custom() {
  return (
    <>
      <Container className=" d-flex align-items-center justify-content-center p-5 flex-column">
        <Image
          src="http://www.clker.com/cliparts/f/a/3/a/11954323791538829345johnny_automatic_exercise_bench.svg.hi.png"
          style={{ height: "300px" }}
        />
        <h1>Create Your Custom Workout</h1>
        <a href="/" className="bg-primary btn btn-lg text-white fw-bold">
          Create <i class="fa-solid fa-plus"></i>
        </a>
      </Container>
    </>
  );
}
