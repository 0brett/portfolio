import Container from 'comps/Container'
import FeaturedProjects from 'comps/FeaturedProjects'
// import LatestDays from "comps/LatestDays"

export default function Home() {
  return (
    <Container>
      <section className="mt-4 mb-4 prose dark:prose-dark sm:prose-lg sm:mt-8 md:mt-12">
        <h1>Hey, I'm glad you're here.</h1>
        <p>
          My name is <strong>Brett Flora</strong>. I'm a software engineer based in the United
          States. Earlier in my career, I was a User Experience Designer. I bring a designer's eye
          and compassionate heart to my engineering work. I enjoy building things for people,
          especially tools. This{' '}
          <a href="https://joelhooks.com/digital-garden" target="_blank" rel="noopener noreferrer">
            digital garden
          </a>{' '}
          is my hodgepodge of projects, essays, experiments, one-offs, and other non sequiturs.
        </p>
      </section>
      <FeaturedProjects />
      {/* <LatestDays /> */}
    </Container>
  )
}
