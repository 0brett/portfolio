import Container from "components/Container"
import Projects from "components/Projects"
import LatestDays from "components/LatestDays"

export default function Home() {
  return (
    <Container title="Home">
      <section className="mt-8 mb-4 prose xs:mt-12 md:mt-16 dark:prose-dark">
        <h1>Hey, I'm glad you're here.</h1>
        <p>
          I'm Brett Flora. I'm a software engineer. Earlier in my career, I was
          a UX Designer. I enjoy building things for people. You've found my
          hodgepodge of projects, essays, experiments, one-offs, and other non
          sequiturs.
        </p>
        <p>
          I'm Brett Flora. I'm a software engineer. Earlier in my career, I was
          a UX Designer. I enjoy building things for people. You've found my
          hodgepodge of projects, essays, experiments, one-offs, and other non
          sequiturs. I'm Brett Flora. I'm a software engineer. Earlier in my
          career, I was a UX Designer. I enjoy building things for people.
          You've found my hodgepodge of projects, essays, experiments, one-offs,
          and other non sequiturs. I'm Brett Flora. I'm a software engineer.
          Earlier in my career, I was a UX Designer. I enjoy building things for
          people. You've found my hodgepodge of projects, essays, experiments,
          one-offs, and other non sequiturs. I'm Brett Flora. I'm a software
          engineer. Earlier in my career, I was a UX Designer. I enjoy building
          things for people. You've found my hodgepodge of projects, essays,
          experiments, one-offs, and other non sequiturs. I'm Brett Flora. I'm a
          software engineer. Earlier in my career, I was a UX Designer. I enjoy
          building things for people. You've found my hodgepodge of projects,
          essays, experiments, one-offs, and other non sequiturs. I'm Brett
          Flora. I'm a software engineer. Earlier in my career, I was a UX
          Designer. I enjoy building things for people. You've found my
          hodgepodge of projects, essays, experiments, one-offs, and other non
          sequiturs. I'm Brett Flora. I'm a software engineer. Earlier in my
          career, I was a UX Designer. I enjoy building things for people.
          You've found my hodgepodge of projects, essays, experiments, one-offs,
          and other non sequiturs.
        </p>
      </section>
      <Projects />
      <LatestDays />
    </Container>
  )
}
