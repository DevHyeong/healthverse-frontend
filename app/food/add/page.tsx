"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function AddFoodPage() {
  const [calories, setCalories] = useState("")

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary px-4 py-4 text-primary-foreground">
        <div className="flex items-center gap-3">
          <Link href="/food">
            <Button variant="ghost" size="icon" className="text-primary-foreground">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold">식사 추가</h1>
        </div>
      </header>

      <main className="px-4 py-6">
        <Card>
          <CardHeader>
            <CardTitle>식사 정보 입력</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="meal-type">식사 종류</Label>
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
              <Label htmlFor="food-name">음식 이름</Label>
              <Input id="food-name" placeholder="예: 닭가슴살 샐러드" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="calories">칼로리 (kcal)</Label>
              <Input
                id="calories"
                type="number"
                placeholder="450"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="space-y-2">
                <Label htmlFor="protein" className="text-xs">
                  단백질 (g)
                </Label>
                <Input id="protein" type="number" placeholder="30" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="carbs" className="text-xs">
                  탄수화물 (g)
                </Label>
                <Input id="carbs" type="number" placeholder="45" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fat" className="text-xs">
                  지방 (g)
                </Label>
                <Input id="fat" type="number" placeholder="12" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">메모 (선택)</Label>
              <Textarea id="notes" placeholder="식사에 대한 메모를 입력하세요" rows={3} />
            </div>

            <div className="flex gap-3 pt-4">
              <Link href="/food" className="flex-1">
                <Button variant="outline" className="w-full bg-transparent">
                  취소
                </Button>
              </Link>
              <Button className="flex-1">저장</Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
