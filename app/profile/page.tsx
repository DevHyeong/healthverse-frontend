"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BottomNav } from "@/components/bottom-nav"
import { User, Target, Bell, Settings, LogOut } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function ProfilePage() {
  const [goalDialogOpen, setGoalDialogOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-gradient-to-br from-primary to-accent px-4 py-8 text-white">
        <div className="flex items-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur">
            <User className="h-10 w-10" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">홍길동</h1>
            <p className="text-sm opacity-90">hong@example.com</p>
          </div>
        </div>
      </header>

      <main className="px-4 py-6 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">내 정보</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">나이</span>
              <span className="font-medium">28세</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">키</span>
              <span className="font-medium">175 cm</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">현재 체중</span>
              <span className="font-medium">70.5 kg</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">BMI</span>
              <span className="font-medium text-chart-3">23.0 (정상)</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg">건강 목표</CardTitle>
            <Dialog open={goalDialogOpen} onOpenChange={setGoalDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm">
                  수정
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>목표 설정</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="goal-weight">목표 체중 (kg)</Label>
                    <Input id="goal-weight" type="number" step="0.1" defaultValue="68" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="goal-sleep">수면 목표 (시간)</Label>
                    <Input id="goal-sleep" type="number" step="0.5" defaultValue="8" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="goal-exercise">운동 목표 (분/일)</Label>
                    <Input id="goal-exercise" type="number" defaultValue="60" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="goal-calories">칼로리 목표 (kcal/일)</Label>
                    <Input id="goal-calories" type="number" defaultValue="2000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="goal-water">물 섭취 목표 (L/일)</Label>
                    <Input id="goal-water" type="number" step="0.1" defaultValue="2.0" />
                  </div>
                  <Button className="w-full" onClick={() => setGoalDialogOpen(false)}>
                    저장
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">목표 체중</span>
              <span className="font-medium">68.0 kg</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">수면 목표</span>
              <span className="font-medium">8시간</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">운동 목표</span>
              <span className="font-medium">60분/일</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">칼로리 목표</span>
              <span className="font-medium">2,000 kcal/일</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">물 섭취 목표</span>
              <span className="font-medium">2.0 L/일</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">일일 목표</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">칼로리</span>
              <span className="font-medium">2,000 kcal</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">운동 시간</span>
              <span className="font-medium">60 분</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">물 섭취</span>
              <span className="font-medium">2.0 L</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">걸음 수</span>
              <span className="font-medium">10,000 걸음</span>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-2">
          <Button variant="outline" className="w-full justify-start bg-transparent" size="lg">
            <Target className="mr-3 h-5 w-5" />
            목표 설정
          </Button>
          <Button variant="outline" className="w-full justify-start bg-transparent" size="lg">
            <Bell className="mr-3 h-5 w-5" />
            알림 설정
          </Button>
          <Button variant="outline" className="w-full justify-start bg-transparent" size="lg">
            <Settings className="mr-3 h-5 w-5" />앱 설정
          </Button>
          <Button
            variant="outline"
            className="w-full justify-start text-destructive hover:text-destructive bg-transparent"
            size="lg"
          >
            <LogOut className="mr-3 h-5 w-5" />
            로그아웃
          </Button>
        </div>
      </main>

      <BottomNav />
    </div>
  )
}
