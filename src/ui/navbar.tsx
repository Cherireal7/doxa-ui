import { Button } from './button'

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-purple-700/30 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <div className="font-semibold">Doxa UI</div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a className="hover:underline" href="#buttons">Components</a>
          <a className="hover:underline" href="#cards">Admin</a>
          <a className="hover:underline" href="#forms">CMS</a>
        </nav>
        <Button size="sm" variant="secondary">Get Started</Button>
      </div>
    </header>
  )
}
