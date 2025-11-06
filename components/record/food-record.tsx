"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Plus, Utensils } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const recentRecords = [
  { date: "2025-01-27", meal: "아침", food: "토스트, 계란, 우유", calories: 450 },
  { date: "2025-01-27", meal: "점심", food: "비빔밥, 된장국", calories: 650 },
  { date: "2025-01-26", meal: "저녁", food: "샐러드, 닭가슴살", calories: 350 },
]

export function FoodRecord() {
  const [open, setOpen] = useState(false)

  return (
    <div className="space-y-4">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="w-full" size="lg">
            <Plus className="mr-2 h-5 w-5" />
            식사 기록 추가
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>식사 기록</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="meal-type">식사 시간</Label>
              <Select defaultValue="breakfast">
                <SelectTrigger id="meal-type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="breakfast">아침</SelectItem>
                  <SelectItem value="lunch">점심</SelectItem>
                  <SelectItem value="dinner">저녁</SelectItem>
                  <SelectItem value="snack">간식</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="food-name">음식명</Label>
              <Input id="food-name" placeholder="예: 비빔밥, 된장국" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="food-calories">칼로리 (kcal)</Label>
              <Input id="food-calories" type="number" placeholder="650" />
            </div>
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
                <div className="rounded-full bg-chart-1/10 p-2">
                  <Utensils className="h-4 w-4 text-chart-1" />
                </div>
                <div>
                  <p className="font-medium">{record.meal}</p>
                  <p className="text-xs text-muted-foreground">{record.food}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">{record.calories} kcal</p>
                <p className="text-xs text-muted-foreground">{record.date}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
