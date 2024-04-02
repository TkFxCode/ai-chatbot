import React from 'react'
import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { AI } from '@/lib/chat/actions'
import { auth } from '@/auth'
import { Session } from '@/lib/types'
import { getMissingKeys } from '../actions'

export default async function Chatbot() {
  const id = nanoid()
  const session = (await auth()) as Session
  const missingKeys = await getMissingKeys()
  return (
    <div>
      <header className="headers">
        <nav className="navbars">
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/chatbot">Chatbot</a>
          <a href="/about">About</a>
          <a href="/contactme">Contact me</a>
        </nav>
      </header>
      <div className="z-50 flex items-center justify-center h-screenny">
        <AI initialAIState={{ chatId: id, messages: [] }}>
          <Chat id={id} session={session} missingKeys={missingKeys} />
        </AI>
      </div>
    </div>
  )
}
