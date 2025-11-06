import { HealthSummaryCards } from "@/components/health-summary-cards"
import { BottomNav } from "@/components/bottom-nav"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-primary px-4 py-6 text-primary-foreground">
        <h1 className="text-2xl font-bold">헬스 트래커</h1>
        <p className="text-sm opacity-90">오늘도 건강한 하루 되세요!</p>
      </header>

      <main className="px-4 py-6">
        <HealthSummaryCards />
      </main>

      <BottomNav />
    </div>
  )
}
