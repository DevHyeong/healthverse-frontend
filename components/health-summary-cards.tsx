"use client"

import { Card } from "@/components/ui/card"
import { Moon, Dumbbell, Scale, Utensils, TrendingUp, TrendingDown } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { LineChart, Line, ResponsiveContainer } from "recharts"

const weightData = [
  { value: 72 },
  { value: 71.8 },
  { value: 71.5 },
  { value: 71.3 },
  { value: 71 },
  { value: 70.8 },
  { value: 70.5 },
]

export function HealthSummaryCards() {
  return (
    <div className="space-y-4">
      {/* 수면 카드 */}
      <Card className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-chart-2/10 p-3">
              <Moon className="h-6 w-6 text-chart-2" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">수면</p>
              <p className="text-3xl font-bold">7.5시간</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <TrendingUp className="h-4 w-4 text-chart-3" />
            <span className="font-medium text-chart-3">+0.5h</span>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">수면 질</span>
            <span className="font-medium">좋음 (85%)</span>
          </div>
          <Progress value={85} className="h-2" />
        </div>
      </Card>

      {/* 운동 카드 */}
      <Card className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-primary/10 p-3">
              <Dumbbell className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">운동</p>
              <p className="text-3xl font-bold">45분</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <TrendingUp className="h-4 w-4 text-chart-3" />
            <span className="font-medium text-chart-3">+15분</span>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">칼로리 소모</span>
            <span className="font-medium">320 kcal</span>
          </div>
          <Progress value={64} className="h-2" />
          <p className="text-xs text-muted-foreground">목표: 500 kcal</p>
        </div>
      </Card>

      {/* 체중 카드 */}
      <Card className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-chart-4/10 p-3">
              <Scale className="h-6 w-6 text-chart-4" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">체중</p>
              <p className="text-3xl font-bold">70.5kg</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <TrendingDown className="h-4 w-4 text-chart-3" />
            <span className="font-medium text-chart-3">-1.5kg</span>
          </div>
        </div>
        <div className="mt-4">
          <p className="mb-2 text-xs text-muted-foreground">최근 7일 변화</p>
          <ResponsiveContainer width="100%" height={60}>
            <LineChart data={weightData}>
              <Line type="monotone" dataKey="value" stroke="hsl(var(--chart-4))" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* 식사 카드 */}
      <Card className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-chart-1/10 p-3">
              <Utensils className="h-6 w-6 text-chart-1" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">식사</p>
              <p className="text-3xl font-bold">1,450</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <span className="font-medium text-muted-foreground">/ 2,000 kcal</span>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <Progress value={72.5} className="h-2" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>아침: 450</span>
            <span>점심: 650</span>
            <span>저녁: 350</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
