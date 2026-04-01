import { useId } from "react";

/**
 * Channel marks for the step-2 mock — shapes aligned with common brand lockups
 * (rounded-square WA, gradient IG camera, circular Messenger bolt, circular web/SMS bubble).
 */

/** WhatsApp: green rounded square + white speech-bubble mark (scaled inside tile) */
export function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#25D366" />
      <g transform="translate(12 12) scale(0.7) translate(-12 -12)">
        <path
          fill="#fff"
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
        />
      </g>
    </svg>
  );
}

/** Instagram: gradient rounded square + white camera */
export function IconInstagram({ className }: { className?: string }) {
  const gid = useId().replace(/:/g, "");
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <defs>
        <linearGradient id={`ig-${gid}`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f9ce34" />
          <stop offset="35%" stopColor="#ee2a7b" />
          <stop offset="70%" stopColor="#c32aa3" />
          <stop offset="100%" stopColor="#4c68d7" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill={`url(#ig-${gid})`} />
      <rect x="6" y="6" width="12" height="12" rx="3.2" fill="none" stroke="#fff" strokeWidth="1.35" />
      <circle cx="12" cy="12" r="3.1" fill="none" stroke="#fff" strokeWidth="1.35" />
      <circle cx="16.25" cy="7.75" r="1.05" fill="#fff" />
    </svg>
  );
}

/** Messenger: circular gradient bubble + white lightning */
export function IconMessenger({ className }: { className?: string }) {
  const gid = useId().replace(/:/g, "");
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <defs>
        <linearGradient id={`msg-${gid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00B2FF" />
          <stop offset="55%" stopColor="#0084FF" />
          <stop offset="100%" stopColor="#006AFF" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="11" fill={`url(#msg-${gid})`} />
      <path
        fill="#fff"
        d="M13.65 5.35 7.15 12.9h3.05l-1.35 6.4 6.85-8.55h-3.25l1.2-5.4z"
      />
    </svg>
  );
}

/** Web / SMS: circular blue gradient + white bubble with two lines */
export function IconWebChat({ className }: { className?: string }) {
  const gid = useId().replace(/:/g, "");
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <defs>
        <linearGradient id={`wc-${gid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7DD3FC" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="11" fill={`url(#wc-${gid})`} />
      <path
        fill="#fff"
        d="M7.2 8.25h9.6c.55 0 1 .45 1 1v4.1c0 .55-.45 1-1 1h-5.2L8.4 16.9v-2.55H7.2c-.55 0-1-.45-1-1v-4.1c0-.55.45-1 1-1z"
      />
      <rect x="9.15" y="10.4" width="5.7" height="0.9" rx="0.45" fill="#0369A1" />
      <rect x="9.15" y="11.85" width="3.85" height="0.9" rx="0.45" fill="#0369A1" />
    </svg>
  );
}
