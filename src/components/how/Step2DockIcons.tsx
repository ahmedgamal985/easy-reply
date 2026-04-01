/** Outline-style dock icons matching the step-2 reference (users, database, heart in square, book, +). */

export function DockUsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8zm8 10v-2a4 4 0 00-3-3.87M20 8a4 4 0 01-8 0"
      />
    </svg>
  );
}

export function DockDatabaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <ellipse cx="12" cy="5" rx="7" ry="3" />
      <path strokeLinecap="round" d="M5 5v6c0 1.66 3.13 3 7 3s7-1.34 7-3V5" />
      <path strokeLinecap="round" d="M5 11v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
    </svg>
  );
}

export function DockHeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
      />
    </svg>
  );
}

export function DockBookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 016.5 22H20v-9H6.5A2.5 2.5 0 014 19.5zM6.5 2H20v9H6.5A2.5 2.5 0 014 8.5V19"
      />
    </svg>
  );
}
