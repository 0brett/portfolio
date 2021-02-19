import Container from "components/container"
import Prose from "components/prose"
import FeaturedProjects from "components/featured-projects"

export default function Home() {
  return (
    <Container>
      <Prose>
        <h1>Hey, I'm glad you're here.</h1>
        <p>
          My name is <strong>Brett Flora</strong>. I'm a software engineer based in San Francisco.
          Earlier in my career, I was a UX/Product Designer.
        </p>
      </Prose>

      <FeaturedProjects />
    </Container>
  )
}
