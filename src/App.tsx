import PreviewCard from './components/PreviewCard'
import { Navbar } from './ui/navbar'
import { Footer } from './ui/footer'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Badge } from './ui/badge'

export default function App() {
  const buttonCode = `<Button variant="primary">Primary</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="ghost">Ghost</Button>`
  const cardCode = `<Card>\n  <CardHeader>\n    <CardTitle>Monthly Revenue</CardTitle>\n    <CardDescription>Last 30 days</CardDescription>\n  </CardHeader>\n  <CardContent>\n    <div className="text-3xl font-bold">$12,430</div>\n  </CardContent>\n  <CardFooter>\n    <a className="text-sm underline" href="#">View report</a>\n  </CardFooter>\n</Card>`
  const inputCode = `<label className="text-sm">Search</label>\n<Input placeholder="Type to search..." />`
  const badgeCode = `<Badge>New</Badge>`

  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8 grid gap-6 bg-bg">
        <h1 className="text-2xl font-semibold mb-2">Doxa UI – Minimal Kit</h1>
        <p className="text-sm text-muted mb-6">Copy + paste components for websites, dashboards, and apps.</p>

        <section id="buttons" className="grid md:grid-cols-2 gap-6">
          <PreviewCard title="Buttons" code={buttonCode}>
            <div className="flex gap-3">
              <Button>Primary</Button>

            </div>
          </PreviewCard>

          <PreviewCard title="Badge" code={badgeCode}>
            <div className="flex gap-3 items-center"><Badge>New</Badge><Badge>Beta</Badge></div>
          </PreviewCard>
        </section>

        <section id="cards" className="grid md:grid-cols-2 gap-6">
          <PreviewCard title="Card" code={cardCode}>
            <Card>
              <CardHeader>
                <CardTitle>Monthly Revenue</CardTitle>
                <CardDescription>Last 30 days</CardDescription>
              </CardHeader>
              <CardContent><div className="text-3xl font-bold">$12,430</div></CardContent>
              <CardFooter><a className="text-sm underline" href="#">View report</a></CardFooter>
            </Card>
          </PreviewCard>
        </section>

        <section id="forms" className="grid md:grid-cols-2 gap-6">
          <PreviewCard title="Input" code={inputCode}>
            <div className="space-y-2">
              <label className="text-sm">Search</label>
              <Input placeholder="Type to search..." />
            </div>
          </PreviewCard>
        </section>
      </main>
      <Footer />
    </div>
  )
}
