import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(features)/donations')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/donations"!</div>
}
