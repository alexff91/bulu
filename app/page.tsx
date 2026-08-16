import Image from 'next/image';
import Link from 'next/link';
import { BADMINTON, BASICS, CHECKED, PADEL, Venue } from './data/venues';

const WAITLIST = 'https://forms.gle/qU3wcdj6iS47xktXA';

/**
 * One place to play. The link always goes to whoever holds the current rates -
 * the club's own booking page, or maps for the halls that take walk-ins.
 */
function VenueCard({ venue }: { venue: Venue }) {
  return (
    <li className="flex flex-col rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-white/[0.07] hover:ring-teal-400/40">
      <div className="mb-1 flex flex-wrap items-baseline gap-x-3">
        <h3 className="text-lg font-bold text-white">{venue.name}</h3>
        <span className="text-sm font-medium text-teal-400">{venue.area}</span>
        {venue.indoor && (
          <span className="rounded-full bg-teal-400/10 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-teal-300">
            Indoor
          </span>
        )}
      </div>

      {venue.address && <p className="mb-3 text-sm text-white/45">{venue.address}</p>}

      <p className="mb-4 flex-1 text-[15px] leading-relaxed text-white/75">{venue.note}</p>

      <div className="mb-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-white/55">
        {venue.courts && <span>{venue.courts}</span>}
        {venue.hours && <span>{venue.hours}</span>}
      </div>

      <Link
        href={venue.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-teal-400 transition hover:text-teal-300"
      >
        {venue.linkLabel}
        <span aria-hidden="true">→</span>
      </Link>
    </li>
  );
}

function Section({
  id,
  eyebrow,
  title,
  intro,
  venues,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  venues: Venue[];
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-5 py-16 sm:py-20">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
        {eyebrow}
      </p>
      <h2 className="poetsen-one mb-3 text-3xl text-white sm:text-4xl">{title}</h2>
      <p className="mb-10 max-w-2xl text-[17px] leading-relaxed text-white/65">{intro}</p>
      <ul className="grid gap-5 sm:grid-cols-2">
        {venues.map((venue) => (
          <VenueCard key={venue.name} venue={venue} />
        ))}
      </ul>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#131945] text-white">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-14rem] h-[26rem] w-[46rem] -translate-x-1/2 rounded-full bg-teal-500/20 blur-3xl"
        />
        <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-5 pb-14 pt-14 text-center sm:pt-20">
          <Image
            src="/logo.svg"
            alt=""
            width={72}
            height={72}
            priority
            className="mb-5 aspect-square"
          />
          <p className="poetsen-one mb-4 text-2xl tracking-wide text-white">BULU</p>

          <h1 className="poetsen-one mb-5 max-w-3xl text-4xl leading-tight sm:text-6xl">
            Where to play badminton and padel in Bali
          </h1>

          <p className="mb-3 max-w-2xl text-lg leading-relaxed text-white/70">
            Every hall and club worth knowing, what you need to bring, and how the
            scoring works if you have never played. No account, no booking fee — we
            send you straight to the club.
          </p>
          <p className="mb-9 text-base text-white/55">
            Tempat bermain bulu tangkis dan padel di Bali.
          </p>

          <nav className="flex flex-wrap justify-center gap-3">
            <Link
              href="#padel"
              className="rounded-full bg-teal-500 px-7 py-3 text-sm font-bold tracking-wide text-white transition hover:bg-teal-400"
            >
              Padel clubs
            </Link>
            <Link
              href="#badminton"
              className="rounded-full bg-white/10 px-7 py-3 text-sm font-bold tracking-wide text-white ring-1 ring-white/15 transition hover:bg-white/15"
            >
              Badminton halls
            </Link>
            <Link
              href="#basics"
              className="rounded-full bg-white/10 px-7 py-3 text-sm font-bold tracking-wide text-white ring-1 ring-white/15 transition hover:bg-white/15"
            >
              New to the game
            </Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto h-px w-full max-w-5xl bg-white/10" />

      <Section
        id="padel"
        eyebrow="Padel"
        title="Padel clubs"
        intro="Padel arrived here recently and grew fast. Courts book out in the evenings, so reserve ahead — every club below takes bookings online. All of them hire rackets, so you can try the game without owning anything."
        venues={PADEL}
      />

      <div className="mx-auto h-px w-full max-w-5xl bg-white/10" />

      <Section
        id="badminton"
        eyebrow="Bulu tangkis"
        title="Badminton halls"
        intro="Badminton is the game Indonesia actually plays, and Denpasar is where the courts are. Most halls take bookings by phone or simply on arrival, and many run social sessions in the evening that anyone can join."
        venues={BADMINTON}
      />

      <div className="mx-auto h-px w-full max-w-5xl bg-white/10" />

      {/* Getting started */}
      <section id="basics" className="mx-auto w-full max-w-5xl px-5 py-16 sm:py-20">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
          Start here
        </p>
        <h2 className="poetsen-one mb-10 text-3xl text-white sm:text-4xl">
          Never played? It takes one evening.
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {BASICS.map((basics) => (
            <div
              key={basics.sport}
              className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10"
            >
              <h3 className="poetsen-one mb-1 text-2xl text-white">{basics.sport}</h3>
              <p className="mb-6 text-sm text-teal-400">{basics.tagline}</p>
              <dl className="space-y-5">
                {basics.points.map((point) => (
                  <div key={point.q}>
                    <dt className="mb-1 font-semibold text-white">{point.q}</dt>
                    <dd className="text-[15px] leading-relaxed text-white/70">{point.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>

      {/* Waitlist */}
      <section className="mx-auto w-full max-w-5xl px-5 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-teal-500/15 to-white/5 p-9 text-center ring-1 ring-teal-400/20 sm:p-12">
          <h2 className="poetsen-one mb-3 text-3xl text-white">Playing regularly?</h2>
          <p className="mx-auto mb-7 max-w-xl text-[17px] leading-relaxed text-white/70">
            We are building BULU into an app for players here — finding a game at
            your level, keeping score, and getting your match video looked at by a
            coach. Join the list and we will tell you when it opens.
          </p>
          <Link
            href={WAITLIST}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-teal-500 px-12 py-3.5 text-base font-bold tracking-wide text-white transition hover:scale-[1.03] hover:bg-teal-400"
          >
            Join the list
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto w-full max-w-5xl px-5 py-10 text-sm leading-relaxed text-white/45">
          <p className="mb-2">
            Venue details checked in {CHECKED}. Opening hours and rates change —
            the link on each card goes to whoever keeps the current ones. We take
            nothing for a listing and nothing for a booking.
          </p>
          <p>
            Run a club or hall we have missed, or spotted something wrong? Write to{' '}
            <Link
              href={WAITLIST}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 underline-offset-2 hover:underline"
            >
              us here
            </Link>{' '}
            and we will add or fix it.
          </p>
        </div>
      </footer>
    </div>
  );
}
