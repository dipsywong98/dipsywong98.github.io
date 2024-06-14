import { CardSection } from '@/components/CardSection'

interface Props {
  children: React.ReactNode
  title: string
  date?: string
}

export function CardPage({ children, title, date }: Props) {
  return (
    <CardSection>
      <h1>{title}</h1>
      <time className="my-4 block text-sm text-zinc-400">
        {date}
      </time>
      <article className="prose dark:prose-invert max-w-[90ch]">
        {children}
      </article>
    </CardSection>
  )
}
