import { CardPage } from '@/components/CardPage'

export default function About({ children }) {
  return (
    <CardPage title="Hey there, I am Dipsy :D" date="June 14, 2024">
      <article className="prose dark:prose-invert max-w-[90ch]">
        {children}
      </article>
    </CardPage>
  )
}
