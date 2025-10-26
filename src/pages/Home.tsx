import React from 'react'
import { HeroBusinessWrapper } from '../components/HeroBusinessWrapper'
import { ContentSection } from '../components/ContentSection'
import { CreditCard } from '../components/CreditCard'
import { FistBumpAnimation } from '../components/FistBumpAnimation'

export const Home: React.FC = () => {
  return (
    <>
      <HeroBusinessWrapper />
      <ContentSection
        id="technology"
        title="Technology"
        subtitle="Core-First. Event-Driven. Secure by Design."
        description="Our technology stack is built around cutting-edge principles: core-first architecture, event-driven flows, and full platformization. We don't build demos—we build production. From the first line of code, our systems are live, secure, and scalable. We write to run, not to simulate."
        fontFamily="Inter"
        backgroundColor="#ffffff"
        textColor="#000000"
        leftAnimation={<CreditCard />}
      />
      <ContentSection
        id="culture"
        title="Culture"
        subtitle="Dynamic. Productive. Impactful."
        description="At Finubit, every developer writes code that matters—code that's in production from day one. We move fast, impact early, and believe in hand-in-hand transformation: business and technology evolving together. We're a platform company in a dynamic environment where ideas are implemented, not shelved."
        fontFamily="Inter"
        backgroundColor="#000000"
        backgroundImage="/chatgpt_image.png"
        rightAnimation={<FistBumpAnimation />}
      />
    </>
  )
}