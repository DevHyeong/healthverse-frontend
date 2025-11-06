"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Plus, Dumbbell } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {useMutationExercise} from "@/features/query/repositories/exercise/fetcher/useMutationExercise";
import Link from "next/link";
import { useGetExercises } from "@/application/hooks/exercise/useGetExercise";

const recentRecords = [
  { date: "2025-01-27", type: "러닝", duration: 45, calories: 320 },
  { date: "2025-01-26", type: "웨이트", duration: 60, calories: 280 },
  { date: "2025-01-25", type: "요가", duration: 30, calories: 150 },
]

export function WorkoutRecord() {
  const [open, setOpen] = useState(false)

  const exercises = useGetExercises('2025-01-01', '2025-12-31');

  return (
    <div className="space-y-4">
      <Dialog open={open} onOpenChange={setOpen}>
        <Button className="w-full" size="lg">
          <Plus className="mr-2 h-5 w-5" />
          <Link href={'/exercise/add'}>운동 기록 추가</Link>
        </Button>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>운동 기록</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="workout-type">운동 종류</Label>
              <Select defaultValue="running">
                <SelectTrigger id="workout-type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="running">러닝</SelectItem>
                  <SelectItem value="weight">웨이트</SelectItem>
                  <SelectItem value="yoga">요가</SelectItem>
                  <SelectItem value="cycling">사이클</SelectItem>
                  <SelectItem value="swimming">수영</SelectItem>
                  <SelectItem value="other">기타</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="workout-duration">운동 시간 (분)</Label>
              <Input id="workout-duration" type="number" placeholder="45" />
            </div>
            <div>


            </div>
            {/*<div className="space-y-2">*/}
            {/*  <Label htmlFor="workout-calories">칼로리 소모 (kcal)</Label>*/}
            {/*  <Input id="workout-calories" type="number" placeholder="320" />*/}
            {/*</div>*/}
            <Button className="w-full" onClick={() => setOpen(false)}>
              저장
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">최근 기록</h3>
        {recentRecords.map((record, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <Dumbbell className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{record.type}</p>
                  <p className="text-xs text-muted-foreground">
                    {record.duration}분 · {record.calories} kcal
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">{record.date}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
