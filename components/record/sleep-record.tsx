"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Plus, Moon } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const recentRecords = [
  { date: "2025-01-27", start: "23:00", end: "06:30", quality: "좋음", hours: 7.5 },
  { date: "2025-01-26", start: "23:30", end: "06:00", quality: "보통", hours: 6.5 },
  { date: "2025-01-25", start: "22:30", end: "06:30", quality: "좋음", hours: 8 },
]

export function SleepRecord() {
  const [open, setOpen] = useState(false)

  return (
    <div className="space-y-4">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="w-full" size="lg">
            <Plus className="mr-2 h-5 w-5" />
            수면 기록 추가
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>수면 기록</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="sleep-start">취침 시간</Label>
              <Input id="sleep-start" type="time" defaultValue="23:00" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sleep-end">기상 시간</Label>
              <Input id="sleep-end" type="time" defaultValue="06:30" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sleep-quality">수면 질</Label>
              <Select defaultValue="good">
                <SelectTrigger id="sleep-quality">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="excellent">매우 좋음</SelectItem>
                  <SelectItem value="good">좋음</SelectItem>
                  <SelectItem value="fair">보통</SelectItem>
                  <SelectItem value="poor">나쁨</SelectItem>
                </SelectContent>
              </Select>
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
                <div className="rounded-full bg-chart-2/10 p-2">
                  <Moon className="h-4 w-4 text-chart-2" />
                </div>
                <div>
                  <p className="font-medium">{record.hours}시간</p>
                  <p className="text-xs text-muted-foreground">
                    {record.start} - {record.end}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">{record.quality}</p>
                <p className="text-xs text-muted-foreground">{record.date}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
