'use client'

import { useState } from 'react'

interface Flashcard {
  question: string
  answer: string
}

// Updated to expect a single Flashcard object instead of an array
export function Flashcards({ props: card }: { props: Flashcard }) {
  const [revealed, setRevealed] = useState(false)

  const toggleReveal = () => setRevealed(!revealed)

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="m-4 w-96 rounded-lg border p-4 shadow-lg cursor-pointer"
        onClick={toggleReveal}
      >
        <div className="font-bold">Question:</div>
        <div>{card.question}</div>
        {revealed && (
          <>
            <div className="mt-2 font-bold">Answer:</div>
            <div>{card.answer}</div>
          </>
        )}
      </div>
    </div>
  )
}
