import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Utensils, Coffee, Cookie } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"
import Link from "next/link"

const meals = [
  {
    id: 1,
    type: "아침",
    icon: Coffee,
    items: [
      { name: "오트밀", calories: 150 },
      { name: "바나나", calories: 105 },
    ],
    total: 255,
  },
  {
    id: 2,
    type: "점심",
    icon: Utensils,
    items: [
      { name: "현미밥", calories: 200 },
      { name: "닭가슴살", calories: 165 },
      { name: "샐러드", calories: 50 },
    ],
    total: 415,
  },
  {
    id: 3,
    type: "간식",
    icon: Cookie,
    items: [{ name: "프로틴 바", calories: 200 }],
    total: 200,
  },
]

export default function FoodPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-primary px-4 py-6 text-primary-foreground">
        <h1 className="text-2xl font-bold">식사 기록</h1>
        <p className="text-sm opacity-90">오늘 섭취한 칼로리를 확인하세요</p>
      </header>

      <main className="px-4 py-6 space-y-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">1,450</div>
              <div className="text-sm text-muted-foreground">총 섭취 칼로리 (kcal)</div>
              <div className="mt-2 text-xs text-muted-foreground">목표: 2,000 kcal</div>
            </div>
          </CardContent>
        </Card>

        {meals.map((meal) => {
          const Icon = meal.icon
          return (
            <Card key={meal.id}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-base">{meal.type}</CardTitle>
                  </div>
                  <span className="text-sm font-semibold text-primary">{meal.total} kcal</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                {meal.items.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span>{item.name}</span>
                    <span className="text-muted-foreground">{item.calories} kcal</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          )
        })}

        <Link href="/food/add">
          <Button className="w-full" size="lg">
            <Plus className="mr-2 h-5 w-5" />
            식사 추가하기
          </Button>
        </Link>
      </main>

      <BottomNav />
    </div>
  )
}
