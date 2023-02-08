import { CustomPortableText } from 'components/shared/CustomPortableText'
import ImageBox from 'components/shared/ImageBox'
import type { ShowcaseProject } from 'types'

interface ProjectProps {
  project: ShowcaseProject
  odd: number
}

export function ProjectListItem(props: ProjectProps) {
  const { project, odd } = props

  return (
    <div className={`flex flex-col gap-y-5 transition `}>
      <div className="w-full">
        <ImageBox
          image={project.coverImage}
          alt={`Cover image from ${project.title}`}
          classesWrapper="relative aspect-square"
        />
      </div>
      <div className="flex w-full">
        <TextBox project={project} />
      </div>
    </div>
  )
}

function TextBox({ project }: { project: ShowcaseProject }) {
  return (
    <div className="relative flex w-full flex-col justify-between">
      <div>
        {/* Title */}
        <div className="mb-2 text-[1.5rem] font-normal leading-tight tracking-tight md:text-[2.5rem] md:tracking-tighter">
          {project.title}
        </div>
        {/* Overview  */}
        <div className="text-base leading-none md:text-xl">
          <CustomPortableText value={project.overview} />
        </div>
      </div>
      {/* Tags */}
      <div className="mt-4 flex flex-row gap-x-2">
        {project.tags?.map((tag, key) => (
          <div
            className={`rounded-full border-2 border-black px-4 text-sm uppercase ${
              tag == 'recent client work'
                ? 'bg-yellow-300'
                : tag == 'side project'
                ? 'bg-orange-500'
                : 'bg-white'
            }`}
            key={key}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  )
}
