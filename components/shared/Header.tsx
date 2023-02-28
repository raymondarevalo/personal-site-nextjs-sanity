import { CustomPortableText } from 'components/shared/CustomPortableText'

interface HeaderProps {
  description?: any[]
  title?: string
}
export function Header(props: HeaderProps) {
  const { title, description } = props
  if (!description && !title) {
    return null
  }
  return (
    <div className="mx-auto max-w-[100rem]">
      {/* Title */}
      {title && (
        <div className="text-3xl font-extrabold tracking-tight md:text-5xl">
          {title}
        </div>
      )}
      {/* Description */}
      {description && (
        <div className="mt-4 text-[2rem] leading-[1.3] tracking-tight text-black md:text-[4rem] md:tracking-tighter">
          <CustomPortableText value={description} />
        </div>
      )}
    </div>
  )
}
