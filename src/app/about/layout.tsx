import { CardSection } from '@/components/CardSection'

export default function About({ children }) {
  return (
    <CardSection>
      <h1>Hey there, I am Dipsy :D</h1>
      <time className="my-4 block text-sm text-zinc-400">
      </time>
      <article className="prose dark:prose-invert max-w-[90ch]">
        {children}
      </article>
    </CardSection>
  )
}
