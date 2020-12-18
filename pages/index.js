import Container from "components/Container"
import Projects from "components/Projects"
import LatestDays from "components/LatestDays"

export default function Home() {
  return (
    <Container>
      <section className="mt-8 mb-4 prose prose-lg xs:mt-12 md:mt-16 dark:prose-dark">
        <h1>Hey, I'm glad you're here.</h1>
        <p>
          My name is <strong>Brett Flora</strong>. I'm a software engineer based
          in the United States. Earlier in my career, I was a User Experience
          Designer. I bring a designer's eye and compassionate heart to my
          engineering work. I enjoy building things for people, especially
          tools. This <a href="#">digital garden</a> is my hodgepodge of
          projects, essays, experiments, one-offs, and other non sequiturs.
        </p>
      </section>
      <Projects />
      <LatestDays />
    </Container>
  )
}
