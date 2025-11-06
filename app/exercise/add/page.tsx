"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {ArrowLeft, DeleteIcon, Plus, PlusIcon, Trash2Icon} from "lucide-react"
import Link from "next/link"
import {useState} from "react";
import {WeightTrainingT} from "@/types/exercise/exercise";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {WeightTrainingForm} from "@/components/exercise/weight-training-form";
import DeleteDialog from "@/components/exercise/delete-dialog";
import { useExerciseMutation } from "@/application/hooks/exercise/useExerciseMutation";


export default function AddExercisePage() {
  const [open, setOpen] = useState<boolean>(false);
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const [startDate, setStartDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [startTime, setStartTime] = useState<string>("09:00");
  const [endDate, setEndDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [endTime, setEndTime] = useState<string>("10:00");
  const [memo, setMemo] = useState<string>("");

  const mutation = useExerciseMutation();

  const [weightTrainins, setWeightTrainins] = useState<WeightTrainingT>([
    { name: "벤치프레스", weight: 60, sets: 3, reps: 12, memo: "가슴 운동" },
    { name: "스쿼트", weight: 80, sets: 4, reps: 10, memo: "하체 운동" },
    { name: "데드리프트", weight: 100, sets: 3, reps: 8, memo: "등 운동" }
  ]);

  const handleAddWeightTraining = (exercise: WeightTrainingT) => {
    if (activeIndex !== -1) {
      const updatedTrainings = weightTrainins.map((item, index) =>
        index === activeIndex ? exercise : item
      );
      setWeightTrainins(updatedTrainings);
      setActiveIndex(-1);
      setOpen(false);
      return;
    }

    setWeightTrainins([...weightTrainins, exercise]);
    setOpen(false);
    setActiveIndex(-1);
  };

  const handleModifyWeightTraining = (index: number) => {
    setActiveIndex(index);
    // const updatedTrainings = weightTrainins.filter((_, i) => i !== index);
    // setWeightTrainins(updatedTrainings);
    setOpen(true);
  }

  const handleDeleteWeightTraining = (index: number) => {
    setActiveIndex(index);
    setDeleteOpen(true);
  }

  const handleSave = async () => {
    try {
      await mutation.mutateAsync({
        startDateTime: `${startDate} ${startTime}`,
        endDateTime: `${endDate} ${endTime}`,
        memo,
        exercises: weightTrainins
      })
    } catch (error) {
      console.error('Error saving exercise:', error);
    }
  };


  return (
    <>
      <WeightTrainingForm
        open={open}
        onOpenChange={setOpen}
        onSave={handleAddWeightTraining}
        initialData={activeIndex !== -1 ? weightTrainins[activeIndex] : undefined}
      />
      <DeleteDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        onDelete={() => {}}
      />

      <div className="min-h-screen bg-background">
        <header className="bg-accent px-4 py-4 text-accent-foreground">
          <div className="flex items-center gap-3">
            <Link href="/exercise">
              <Button variant="ghost" size="icon" className="text-accent-foreground">
                <ArrowLeft className="h-5 w-5"/>
              </Button>
            </Link>
            <h1 className="text-xl font-bold">운동 추가</h1>
          </div>
        </header>

        <main className="px-4 py-6">
          <Card>
            <CardHeader>
              <CardTitle>운동 정보 입력</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="exercise-type">운동 종류</Label>
                <Select defaultValue="running">
                  <SelectTrigger id="exercise-type">
                    <SelectValue/>
                  </SelectTrigger>
                  <SelectContent>
                    {/*<SelectItem value="running">런닝</SelectItem>*/}
                    {/*<SelectItem value="walking">걷기</SelectItem>*/}
                    {/*<SelectItem value="cycling">사이클</SelectItem>*/}
                    {/*<SelectItem value="swimming">수영</SelectItem>*/}
                    <SelectItem value="weight">웨이트 트레이닝</SelectItem>
                    {/*<SelectItem value="yoga">요가</SelectItem>*/}
                    {/*<SelectItem value="other">기타</SelectItem>*/}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="start-date">시작 날짜</Label>
                    <Input
                        id="start-date"
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="start-time">시작 시간</Label>
                    <Input
                        id="start-time"
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="end-date">종료 날짜</Label>
                    <Input
                        id="end-date"
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="end-time">종료 시간</Label>
                    <Input
                        id="end-time"
                        type="time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-flex">
                  <label className="inline-flex items-center space-x-2">종목</label>
                  <Button onClick={() => setOpen(true)} className="ml-4">
                    <Plus className="mr-2 h-5 w-5"/>
                  </Button>
                </div>
                <div className="mt-2 flex flex-wrap gap-2 flex-col">
                  {
                    weightTrainins.length > 0 ? (
                            weightTrainins.map((training, index) => (
                                <div key={index} className="flex items-center border p-3"
                                     onClick={() => handleModifyWeightTraining(index)}>
                                  <span className="font-medium">{training.name}</span>
                                  <span className="text-sm text-muted-foreground flex items-center ml-2">
                          {training.sets} 세트 · {training.reps} 회 · {training.weight} kg
                        </span>
                                  <Trash2Icon className="h-4 w-4 ml-auto cursor-pointer"
                                              onClick={() => handleDeleteWeightTraining(index)}/>
                                </div>
                            )))
                        : (
                            <>등록된 정보가 없습니다.</>
                        )
                  }
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">메모 (선택)</Label>
                <Textarea
                    id="notes"
                    placeholder="운동에 대한 메모를 입력하세요"
                    rows={3}
                    value={memo}
                    onChange={(e) => setMemo(e.target.value)}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Link href="/exercise" className="flex-1">
                  <Button variant="outline" className="w-full bg-transparent">
                    취소
                  </Button>
                </Link>
                <Button className="flex-1" onClick={handleSave}>저장</Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </>
  )
}
