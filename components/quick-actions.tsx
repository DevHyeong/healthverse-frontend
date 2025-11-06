import { Button } from "@/components/ui/button"
import { Plus, Utensils, Dumbbell, Droplet } from "lucide-react"
import Link from "next/link"

export function QuickActions() {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">빠른 기록</h2>
      <div className="grid grid-cols-2 gap-3">
        <Link href="/food/add">
          <Button className="h-24 w-full flex-col gap-2 bg-transparent" variant="outline">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Utensils className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm font-medium">식사 기록</span>
          </Button>
        </Link>

        <Link href="/exercise/add">
          <Button className="h-24 w-full flex-col gap-2 bg-transparent" variant="outline">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
              <Dumbbell className="h-6 w-6 text-accent" />
            </div>
            <span className="text-sm font-medium">운동 기록</span>
          </Button>
        </Link>

        <Button className="h-24 w-full flex-col gap-2 bg-transparent" variant="outline">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-chart-2/10">
            <Droplet className="h-6 w-6 text-chart-2" />
          </div>
          <span className="text-sm font-medium">물 마시기</span>
        </Button>

        <Button className="h-24 w-full flex-col gap-2 bg-transparent" variant="outline">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <Plus className="h-6 w-6" />
          </div>
          <span className="text-sm font-medium">기타 기록</span>
        </Button>
      </div>
    </div>
  )
}
