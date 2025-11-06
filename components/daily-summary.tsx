import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function DailySummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">오늘의 목표</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">칼로리</span>
            <span className="font-semibold">1,450 / 2,000 kcal</span>
          </div>
          <Progress value={72.5} className="h-2" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">운동 시간</span>
            <span className="font-semibold">25 / 60 분</span>
          </div>
          <Progress value={41.7} className="h-2" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">물 섭취</span>
            <span className="font-semibold">1.2 / 2.0 L</span>
          </div>
          <Progress value={60} className="h-2" />
        </div>

        <div className="grid grid-cols-3 gap-3 pt-2">
          <div className="rounded-lg bg-primary/10 p-3 text-center">
            <div className="text-2xl font-bold text-primary">156</div>
            <div className="text-xs text-muted-foreground">단백질 (g)</div>
          </div>
          <div className="rounded-lg bg-accent/10 p-3 text-center">
            <div className="text-2xl font-bold text-accent">8,234</div>
            <div className="text-xs text-muted-foreground">걸음 수</div>
          </div>
          <div className="rounded-lg bg-chart-3/20 p-3 text-center">
            <div className="text-2xl font-bold text-chart-3">7.5</div>
            <div className="text-xs text-muted-foreground">수면 (시간)</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
