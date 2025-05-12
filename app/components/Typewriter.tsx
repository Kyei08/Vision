// components/Typewriter.tsx
'use client'
import { Dancing_Script } from 'next/font/google'

const dancing = Dancing_Script({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dancing-script',
})

export default function Typewriter() {
  return (
   <Typewriter
      options={{
        strings: [
          'Your first message here...',
          'Your second message here...',
          'Your call to action!'
        ],
        autoStart: true,
        loop: true,
        cursor: '|',
        delay: 50,
        deleteSpeed: 30,
        wrapperClassName: 'text-4xl font-[Dancing_Script]',
        cursorClassName: 'text-orange-500 text-4xl'
      }}
    />
  )
}
