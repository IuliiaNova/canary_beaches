import { BeachesList } from '@/view/pages/components/BeachesList'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-customOrange">
      <BeachesList />
    </main>
  )
}
