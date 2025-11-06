"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BottomNav } from "@/components/bottom-nav"
import { TrendingUp, TrendingDown } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const dailyData = [
  { name: "00:00", sleep: 8, weight: 72, calories: 1850, exercise: 45 },
  { name: "04:00", sleep: 7.5, weight: 71.8, calories: 2100, exercise: 30 },
  { name: "08:00", sleep: 7, weight: 71.5, calories: 1950, exercise: 60 },
  { name: "12:00", sleep: 8, weight: 71.3, calories: 1800, exercise: 40 },
  { name: "16:00", sleep: 7.5, weight: 71, calories: 2200, exercise: 0 },
  { name: "20:00", sleep: 7, weight: 70.8, calories: 1900, exercise: 90 },
]

const weeklyData = [
  { name: "월", sleep: 7, weight: 72, calories: 1850, exercise: 45 },
  { name: "화", sleep: 6.5, weight: 71.8, calories: 2100, exercise: 30 },
  { name: "수", sleep: 8, weight: 71.5, calories: 1950, exercise: 60 },
  { name: "목", sleep: 7.5, weight: 71.3, calories: 1800, exercise: 40 },
  { name: "금", sleep: 6, weight: 71, calories: 2200, exercise: 0 },
  { name: "토", sleep: 9, weight: 70.8, calories: 1900, exercise: 90 },
  { name: "일", sleep: 7.5, weight: 70.5, calories: 1450, exercise: 25 },
]

const monthlyData = [
  { name: "1주", sleep: 7.2, weight: 73, calories: 1950, exercise: 42 },
  { name: "2주", sleep: 7.5, weight: 72.3, calories: 1880, exercise: 48 },
  { name: "3주", sleep: 7.1, weight: 71.5, calories: 1920, exercise: 45 },
  { name: "4주", sleep: 7.4, weight: 70.5, calories: 1850, exercise: 51 },
]

export default function StatsPage() {
  const [period, setPeriod] = useState<"day" | "week" | "month">("week")

  const data = period === "day" ? dailyData : period === "week" ? weeklyData : monthlyData

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-chart-3 px-4 py-6 text-white">
        <h1 className="text-2xl font-bold">통계</h1>
        <p className="text-sm opacity-90">건강 데이터 분석</p>
      </header>

      <main className="px-4 py-6 space-y-6">
        <Tabs value={period} onValueChange={(v) => setPeriod(v as "day" | "week" | "month")}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="day">일간</TabsTrigger>
            <TabsTrigger value="week">주간</TabsTrigger>
            <TabsTrigger value="month">월간</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-2 gap-3">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="flex items-center justify-center gap-1 text-chart-3">
                <TrendingUp className="h-4 w-4" />
                <span className="text-xs font-medium">+5%</span>
              </div>
              <div className="mt-1 text-2xl font-bold">7.3h</div>
              <div className="text-xs text-muted-foreground">평균 수면</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <div className="flex items-center justify-center gap-1 text-chart-3">
                <TrendingDown className="h-4 w-4" />
                <span className="text-xs font-medium">-2.1%</span>
              </div>
              <div className="mt-1 text-2xl font-bold">70.5kg</div>
              <div className="text-xs text-muted-foreground">현재 체중</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <div className="flex items-center justify-center gap-1 text-chart-3">
                <TrendingUp className="h-4 w-4" />
                <span className="text-xs font-medium">+8%</span>
              </div>
              <div className="mt-1 text-2xl font-bold">1,893</div>
              <div className="text-xs text-muted-foreground">평균 칼로리</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <div className="flex items-center justify-center gap-1 text-chart-3">
                <TrendingUp className="h-4 w-4" />
                <span className="text-xs font-medium">+12%</span>
              </div>
              <div className="mt-1 text-2xl font-bold">41분</div>
              <div className="text-xs text-muted-foreground">평균 운동</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">체중 변화</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} domain={["dataMin - 1", "dataMax + 1"]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="weight"
                  stroke="hsl(var(--chart-4))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--chart-4))", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">운동 시간</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data}>
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="exercise" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">수면 시간</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[0, 10]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="sleep"
                  stroke="hsl(var(--chart-2))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--chart-2))", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">칼로리 섭취</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data}>
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="calories" fill="hsl(var(--chart-1))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </main>

      <BottomNav />
    </div>
  )
}
