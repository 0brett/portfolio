import Container from 'components/Container'
import Prose from 'components/Prose'
import FeaturedProjects from 'components/FeaturedProjects'

export default function Home() {
  return (
    <Container>
      <Prose>
        <h1>Hey, I'm glad you're here.</h1>
        <p>
          My name is <strong>Brett Flora</strong>. I'm a software engineer based in the United
          States. Earlier in my career, I was a User Experience Designer.
        </p>
      </Prose>

      <FeaturedProjects />
    </Container>
  )
}
