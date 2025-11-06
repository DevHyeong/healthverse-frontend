import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Dumbbell, Footprints } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"
import Link from "next/link"

const exercises = [
  {
    id: 1,
    type: "런닝",
    icon: Footprints,
    duration: 30,
    calories: 320,
    time: "18:00",
  },
  {
    id: 2,
    type: "웨이트 트레이닝",
    icon: Dumbbell,
    duration: 45,
    calories: 280,
    time: "07:00",
  },
]

export default function ExercisePage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-accent px-4 py-6 text-accent-foreground">
        <h1 className="text-2xl font-bold">운동 기록</h1>
        <p className="text-sm opacity-90">오늘의 운동을 확인하세요</p>
      </header>

      <main className="px-4 py-6 space-y-4">
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-accent">75</div>
                <div className="text-sm text-muted-foreground">운동 시간 (분)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">600</div>
                <div className="text-sm text-muted-foreground">소모 칼로리 (kcal)</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold">오늘의 운동</h2>
          {exercises.map((exercise) => {
            const Icon = exercise.icon
            return (
              <Card key={exercise.id}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{exercise.type}</div>
                      <div className="text-sm text-muted-foreground">
                        {exercise.duration}분 • {exercise.time}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-accent">-{exercise.calories}</div>
                      <div className="text-xs text-muted-foreground">kcal</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Link href="/exercise/add">
          <Button className="w-full" size="lg" variant="default">
            <Plus className="mr-2 h-5 w-5" />
            운동 추가하기
          </Button>
        </Link>
      </main>

      <BottomNav />
    </div>
  )
}
