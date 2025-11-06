import { BottomNav } from "@/components/bottom-nav"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SleepRecord } from "@/components/record/sleep-record"
import { WorkoutRecord } from "@/components/record/workout-record"
import { WeightRecord } from "@/components/record/weight-record"
import { FoodRecord } from "@/components/record/food-record"

export default function RecordPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-primary px-4 py-6 text-primary-foreground">
        <h1 className="text-2xl font-bold">건강 기록</h1>
        <p className="text-sm opacity-90">오늘의 활동을 기록하세요</p>
      </header>

      <main className="px-4 py-6">
        <Tabs defaultValue="sleep" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="sleep">수면</TabsTrigger>
            <TabsTrigger value="workout">운동</TabsTrigger>
            <TabsTrigger value="weight">체중</TabsTrigger>
            <TabsTrigger value="food">식사</TabsTrigger>
          </TabsList>
          <TabsContent value="sleep" className="mt-6">
            <SleepRecord />
          </TabsContent>
          <TabsContent value="workout" className="mt-6">
            <WorkoutRecord />
          </TabsContent>
          <TabsContent value="weight" className="mt-6">
            <WeightRecord />
          </TabsContent>
          <TabsContent value="food" className="mt-6">
            <FoodRecord />
          </TabsContent>
        </Tabs>
      </main>

      <BottomNav />
    </div>
  )
}
