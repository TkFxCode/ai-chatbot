import { format, parseISO } from 'date-fns'

interface Event {
  headline: string
  description: string
}

export function Events({ props: events }: { props: Event[] }) {
  return (
    <div className="-mt-2 flex w-full flex-col gap-2 py-4">
      {events.map(event => (
        <div
          key={event.headline}
          className="flex shrink-0 flex-col gap-1 rounded-lg bg-zinc-800 p-4"
        >
          <div className="text-base font-bold text-zinc-200">
            {event.headline}
          </div>
          <div className="text-zinc-500">{event.description}</div>
        </div>
      ))}
    </div>
  )
}
