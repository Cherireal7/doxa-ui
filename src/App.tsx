import PreviewCard from './components/PreviewCard';
import { Navbar } from './ui/navbar';
import { Footer } from './ui/footer';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';

export default function App() {
  const buttonCode = `<Button>Primary</Button>`;
  const cardCode = `<Card>
  <CardHeader>
    <CardTitle>Monthly Revenue</CardTitle>
    <CardDescription>Last 30 days</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="text-3xl font-bold">$12,430</div>
  </CardContent>
  <CardFooter>
    <a className="text-sm underline" href="#">View report</a>
  </CardFooter>
</Card>`;
  const inputCode = `<label className="text-sm">Search</label>
<Input placeholder="Type to search..." />`;
  const badgeCode = `<Badge>New</Badge>`;

  return (
      <div className="relative min-h-screen bg-neutral-950 text-zinc-100">
        {/* Foam / aurora layers (Tailwind arbitrary backgrounds) */}
        <div className="pointer-events-none absolute inset-0 -z-10
        bg-[radial-gradient(900px_500px_at_0%_10%,rgba(99,102,241,0.20),transparent_60%)]
      " />
        <div className="pointer-events-none absolute inset-0 -z-10
        bg-[radial-gradient(900px_500px_at_100%_20%,rgba(16,185,129,0.18),transparent_60%)]
      " />
        <div className="pointer-events-none absolute inset-0 -z-10
        bg-[radial-gradient(700px_400px_at_30%_100%,rgba(236,72,153,0.15),transparent_60%)]
      " />

        {/* Faint grid with fade (still Tailwind-only) */}
        <div className="pointer-events-none absolute inset-0 -z-10
        bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
        bg-[size:64px_64px]
        [mask-image:radial-gradient(70%_60%_at_50%_40%,black_60%,transparent_100%)]
      " />

        <Navbar />

        <main className="relative mx-auto max-w-6xl px-4 py-12 grid gap-6">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Doxa UI — <span className="text-zinc-300">Glass & Foam</span>
            </h1>
            <p className="mt-3 text-sm text-zinc-400 max-w-2xl">
              Modern, dark, and minimal components with subtle glassmorphism and aurora vibes.
            </p>
          </header>

          <section id="buttons" className="grid md:grid-cols-2 gap-6">
            <PreviewCard title="Buttons" code={buttonCode}>
              <div className="flex flex-wrap gap-3">
                <Button>Primary</Button>
                <Button className="bg-white/10 text-white border border-white/10 hover:bg-white/20">Neutral</Button>
              </div>
            </PreviewCard>

            <PreviewCard title="Badge" code={badgeCode}>
              <div className="flex gap-3 items-center">
                <Badge className="bg-white/10 text-white border-white/10">New</Badge>
                <Badge className="bg-white/10 text-white border-white/10">Beta</Badge>
              </div>
            </PreviewCard>
          </section>

          <section id="cards" className="grid md:grid-cols-2 gap-6">
            <PreviewCard title="Card" code={cardCode}>
              <Card className="border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
                <CardHeader>
                  <CardTitle>Monthly Revenue</CardTitle>
                  <CardDescription className="text-zinc-400">Last 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$12,430</div>
                </CardContent>
                <CardFooter>
                  <a className="text-sm underline text-zinc-300" href="#">View report</a>
                </CardFooter>
              </Card>
            </PreviewCard>
          </section>

          <section id="forms" className="grid md:grid-cols-2 gap-6">
            <PreviewCard title="Input" code={inputCode}>
              <div className="space-y-2">
                <label className="text-sm text-zinc-300">Search</label>
                <Input className="border-white/10 bg-white/5 text-white placeholder:text-zinc-400" placeholder="Type to search..." />
              </div>
            </PreviewCard>
          </section>
        </main>

        <Footer />
      </div>
  );
}
