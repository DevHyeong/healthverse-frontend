import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Utensils, Dumbbell, Clock } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "food",
    title: "저녁 식사",
    description: "닭가슴살 샐러드",
    calories: 450,
    time: "19:30",
    icon: Utensils,
  },
  {
    id: 2,
    type: "exercise",
    title: "런닝",
    description: "5km, 30분",
    calories: -320,
    time: "18:00",
    icon: Dumbbell,
  },
  {
    id: 3,
    type: "food",
    title: "간식",
    description: "프로틴 바",
    calories: 200,
    time: "15:30",
    icon: Utensils,
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">최근 활동</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {activities.map((activity) => {
          const Icon = activity.icon
          return (
            <div key={activity.id} className="flex items-center gap-3 rounded-lg border p-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  activity.type === "food" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                }`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="font-medium">{activity.title}</div>
                <div className="text-sm text-muted-foreground">{activity.description}</div>
              </div>
              <div className="text-right">
                <div className={`font-semibold ${activity.calories > 0 ? "text-primary" : "text-accent"}`}>
                  {activity.calories > 0 ? "+" : ""}
                  {activity.calories} kcal
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {activity.time}
                </div>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
