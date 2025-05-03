import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app')({
  component: LandingPage,
})

function LandingPage() {
  return (
    <div className="bg-bg-dark">
      Hello there!
      <br />
      This is the landing page
    </div>
  )
}
