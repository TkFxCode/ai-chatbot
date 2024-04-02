import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Explain technical concepts',
    message: `What is a "serverless function"?`
  },
  {
    heading: 'Summarize an article',
    message: 'Summarize the following article for a 2nd grader: \n'
  },
  {
    heading: 'Draft an email',
    message: `Draft an email to my boss about the following: \n`
  }
]

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Welcome to Learner AI Chatbot!
        </h1>

        <p className="leading-normal text-muted-foreground">
          This tutoring tool is here to assist you with learning and
          understanding various concepts. Whether you need help with homework,
          understanding a complex topic, or drafting documents, the Tutor Bot is
          designed to provide support tailored to your learning needs.
        </p>

        <div className="bg-black rounded-md shadow-lg">
          <img src="LogoBg.png" />
        </div>
      </div>
    </div>
  )
}
