/**
 * Places to play badminton and padel in Bali.
 *
 * Deliberately no prices. Court rates here change often and a number frozen
 * into a static page is wrong within months - worse than no number, because a
 * reader trusts it. Each venue links to wherever the club publishes its own
 * current rates instead, and CHECKED says when the rest was last verified.
 */

export const CHECKED = 'August 2026';

export type Venue = {
  name: string;
  /** The part of Bali people actually navigate by. */
  area: string;
  address?: string;
  /** One line on what makes it worth the drive. */
  note: string;
  courts?: string;
  hours?: string;
  /** Where the club itself publishes rates and availability. */
  link: string;
  linkLabel: string;
  indoor?: boolean;
};

/**
 * Padel is new to Bali and almost every club takes bookings through Playtomic,
 * so the booking page is both the most current source and the thing a reader
 * actually wants.
 */
export const PADEL: Venue[] = [
  {
    name: 'Bali Padel Academy',
    area: 'Canggu',
    note: 'The largest setup on the island, with a show court that seats a couple of hundred. Runs courses, clinics and regular tournaments.',
    courts: '7 courts',
    link: 'https://www.balipadelacademy.com/',
    linkLabel: 'balipadelacademy.com',
  },
  {
    name: 'The Padel Society Bali',
    area: 'Seminyak',
    address: 'Jl. Drupadi No. 234',
    note: 'Long opening hours and a full clubhouse — restaurant, changing rooms, lockers, free parking.',
    hours: '07:00 – 23:00 daily',
    link: 'https://playtomic.com/clubs/padel-society-bali-seminyak',
    linkLabel: 'Book on Playtomic',
  },
  {
    name: 'Pro Padel Bali',
    area: 'Kerobokan',
    address: 'Jl. Raya Kerobokan No. 264, Kerobokan Kelod',
    note: 'Rackets and balls for hire, so it works as a first try without buying anything. Step-free access.',
    hours: '08:00 – 22:00 daily',
    link: 'https://playtomic.com/clubs/pro-padel-bali-seminyak',
    linkLabel: 'Book on Playtomic',
  },
  {
    name: 'Fifteen Padel',
    area: 'Canggu',
    note: 'Indoor courts — the ones to book when the afternoon rain arrives.',
    indoor: true,
    link: 'https://playtomic.com/clubs/fifteen-padel-canggu',
    linkLabel: 'Book on Playtomic',
  },
  {
    name: 'Seminyak Padel Club',
    area: 'Seminyak',
    note: 'Covered courts, a pro shop, and a pool and ice bath for afterwards. Court hire, private lessons and classes.',
    indoor: true,
    link: 'https://liga.tennis/seminyak-club',
    linkLabel: 'liga.tennis',
  },
];

/**
 * Badminton is the established game here and most halls are booked by phone or
 * by turning up, so these link to maps rather than to a booking system.
 */
export const BADMINTON: Venue[] = [
  {
    name: 'GOR Permata Ubung',
    area: 'Denpasar',
    address: 'Jl. Cokroaminoto, Gang Melati, Ubung',
    note: 'Four courts, well lit and kept clean. Central and easy to reach.',
    courts: '4 courts',
    link: 'https://www.google.com/maps/search/?api=1&query=GOR+Permata+Ubung+Denpasar',
    linkLabel: 'Open in Maps',
  },
  {
    name: 'Geenas Arena',
    area: 'Sanur',
    address: 'Jl. Penyaringan, Sanur Kauh, Denpasar Selatan',
    note: 'Open early until late, with plenty of parking and a small cafe — the easy choice for a spontaneous game.',
    courts: '3 courts',
    hours: '07:00 – 23:00 daily',
    link: 'https://www.google.com/maps/search/?api=1&query=Geenas+Arena+Sanur+Denpasar',
    linkLabel: 'Open in Maps',
  },
  {
    name: 'GOR Balijaya',
    area: 'Denpasar',
    address: 'Jl. Bukit Sari Utara No. 8A, Padangsambian Kaja',
    note: 'Four fully carpeted courts. Also runs badminton training for children.',
    courts: '4 courts',
    link: 'https://www.google.com/maps/search/?api=1&query=GOR+Balijaya+Padangsambian+Denpasar',
    linkLabel: 'Open in Maps',
  },
  {
    name: 'Galuh Sport Center',
    area: 'Denpasar',
    address: 'Jl. Suwung Batan Kendal, Gang Galuh, Sesetan',
    note: 'Eight courts — the place to look when everywhere else is full, and it takes monthly bookings.',
    courts: '8 courts',
    link: 'https://www.google.com/maps/search/?api=1&query=Galuh+Sport+Center+Sesetan+Denpasar',
    linkLabel: 'Open in Maps',
  },
  {
    name: '99 Sport',
    area: 'Denpasar',
    address: 'Jl. Tukad Badung No. 100, Renon',
    note: 'Three courts with non-slip flooring and shielding from the wind, which matters more for shuttles than people expect.',
    courts: '3 courts',
    link: 'https://www.google.com/maps/search/?api=1&query=Lapangan+Badminton+99+Sport+Renon+Denpasar',
    linkLabel: 'Open in Maps',
  },
  {
    name: 'GOR Badminton Pemogan',
    area: 'Denpasar',
    address: 'Jl. Raya Pemogan, Pemogan, Denpasar Selatan',
    note: 'A straightforward neighbourhood hall in the south of the city.',
    link: 'https://www.google.com/maps/search/?api=1&query=GOR+Badminton+Pemogan+Denpasar',
    linkLabel: 'Open in Maps',
  },
];

/** Short answers to what a newcomer to either game actually asks first. */
export type Basics = {
  sport: string;
  tagline: string;
  points: { q: string; a: string }[];
};

export const BASICS: Basics[] = [
  {
    sport: 'Badminton',
    tagline: 'Indonesia’s game. Easy to start, hard to leave.',
    points: [
      {
        q: 'How the scoring works',
        a: 'A match is best of three games. A game goes to 21 points, and you must win by two; at 29–29 the next point takes it. Every rally scores a point, whoever served.',
      },
      {
        q: 'What to bring',
        a: 'Indoor shoes with non-marking soles — street shoes are usually turned away, and the floors are slippery in them. Halls hire out rackets; shuttles are normally bought or shared per session.',
      },
      {
        q: 'Finding a game',
        a: 'Most halls run regular social sessions where you pay per evening and rotate through courts. Turning up and asking is entirely normal here.',
      },
    ],
  },
  {
    sport: 'Padel',
    tagline: 'Always doubles, always in a cage, easy on day one.',
    points: [
      {
        q: 'How the scoring works',
        a: 'The same scoring as tennis — 15, 30, 40, game — and sets to six games. The difference is the court: it is enclosed, and the ball stays in play off the walls.',
      },
      {
        q: 'What to bring',
        a: 'Nothing, to begin with. Every club here hires rackets and sells balls, so a first session costs you the court and nothing else. Ordinary trainers are fine.',
      },
      {
        q: 'Why beginners like it',
        a: 'It is played four to a court and the serve is underarm, so rallies start immediately instead of after four faults. Most people can hold a rally in their first hour.',
      },
    ],
  },
];
