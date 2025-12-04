import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(features)/volunteers')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/volunteers"!</div>
}
