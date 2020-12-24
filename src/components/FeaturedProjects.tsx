import { HiOutlineBookOpen, HiOutlineClipboardList, HiOutlineNewspaper } from 'react-icons/hi'
import Project, { ProjectProps } from 'components/Project'

const featuredProjects: ProjectProps[] = [
  {
    href: 'https://github.com/01brett/translation-medley',
    icon: <HiOutlineBookOpen />,
    title: 'Translation Medley',
    desc:
      'Bible Translation Medley retrieves Bible passages and enables dynamic swapping of individual verses. Each swap is a different translation from the original and is placed in the flow of text.'
  },
  {
    href: 'https://github.com/01brett/poems',
    icon: <HiOutlineNewspaper />,
    title: 'Poem Generator',
    desc:
      'The Poem Generator enables (somewhat) randomized poem generation from the tweets of defunct Twitter spam-bot @horse_ebooks.'
  },
  {
    href: 'https://github.com/01brett/tools',
    icon: <HiOutlineClipboardList />,
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
