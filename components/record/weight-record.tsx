"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Plus, Scale } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const recentRecords = [
  { date: "2025-01-27", weight: 70.5, change: -0.3 },
  { date: "2025-01-26", weight: 70.8, change: -0.2 },
  { date: "2025-01-25", weight: 71.0, change: -0.3 },
]

export function WeightRecord() {
  const [open, setOpen] = useState(false)

  return (
    <div className="space-y-4">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="w-full" size="lg">
            <Plus className="mr-2 h-5 w-5" />
            체중 기록 추가
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>체중 기록</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="weight-date">날짜</Label>
              <Input id="weight-date" type="date" defaultValue="2025-01-27" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="weight-value">체중 (kg)</Label>
              <Input id="weight-value" type="number" step="0.1" placeholder="70.5" />
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
                <div className="rounded-full bg-chart-4/10 p-2">
                  <Scale className="h-4 w-4 text-chart-4" />
                </div>
                <div>
                  <p className="font-medium">{record.weight} kg</p>
                  <p className="text-xs text-muted-foreground">{record.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-sm font-medium ${record.change < 0 ? "text-chart-3" : "text-destructive"}`}>
                  {record.change > 0 ? "+" : ""}
                  {record.change} kg
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
