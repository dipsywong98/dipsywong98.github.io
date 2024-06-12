import { CardSection } from '@/components/CardSection'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'

export default function About({ children }) {
  return (
    <CardSection>
      {children}
    </CardSection>
  )
}
