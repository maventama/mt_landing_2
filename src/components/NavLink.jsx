import Link from 'next/link'

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg px-2 py-1 text-sm text-white hover:opacity-80"
    >
      {children}
    </Link>
  )
}
