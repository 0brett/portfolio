import Project, { ProjectProps } from 'components/Project'

const featuredProjects: ProjectProps[] = [
  {
    href: 'https://github.com/01brett/translation-medley',
    icon:
      'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    title: 'Bible Translation Medley',
    desc:
      'Bible Translation Medley retrieves Bible passages and enables dynamic swapping of individual verses. Each swap is a different translation from the original and is placed in the flow of text.'
  },
  {
    href: 'https://github.com/01brett/poems',
    icon:
      'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z',
    title: 'Poem Generator',
    desc:
      'The Poem Generator enables (somewhat) randomized poem generation from the tweets of defunct Twitter spam-bot @horse_ebooks.'
  },
  {
    href: 'https://github.com/01brett/tools',
    icon:
      'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    title: 'Foreman Tool Tracker',
    desc:
      'The Tool Tracker gives foremen at Total Mechanical, a Vancouver, WA-based construction company, a mobile-first web experience for viewing, reporting, and requesting tools from the central shop while on-site at a job.'
  }
]

export default function Projects() {
  return (
    <section className="mt-12 mb-4">
      <h2 className="font-black text-xl tracking-wide uppercase">Featured Projects</h2>

      {featuredProjects.map((proj: ProjectProps, idx: number) => (
        <Project key={idx} href={proj.href} icon={proj.icon} title={proj.title} desc={proj.desc} />
      ))}
    </section>
  )
}
