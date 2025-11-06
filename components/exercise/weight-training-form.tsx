import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { WeightTrainingT } from "@/types/exercise/exercise"

interface WeightTrainingFormProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    onSave: (exercise: WeightTrainingT) => void
    initialData?: WeightTrainingT
}

export function WeightTrainingForm({ open, onOpenChange, onSave, initialData }: WeightTrainingFormProps) {
    const [exerciseName, setExerciseName] = useState(initialData?.name || "")
    const [weight, setWeight] = useState<number>(initialData?.weight || 0)
    const [sets, setSets] = useState<number>(initialData?.sets || 0)
    const [reps, setReps] = useState<number>(initialData?.reps || 0)
    const [memo, setMemo] = useState(initialData?.memo || "")

    const handleSave = () => {
        onSave({
            name: exerciseName,
            weight,
            sets,
            reps,
            memo
        });
        // 폼 초기화
        setExerciseName("");
        setWeight(0);
        setSets(0);
        setReps(0);
        setMemo("");
    };

    useEffect(() => {
        if (initialData) {
            setExerciseName(initialData.name)
            setWeight(initialData.weight)
            setSets(initialData.sets)
            setReps(initialData.reps)
            setMemo(initialData.memo)
        }
    }, [initialData])

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>운동 기록</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="exercise-name">운동명</Label>
                            <Input
                                id="exercise-name"
                                placeholder="벤치프레스"
                                value={exerciseName}
                                onChange={(e) => setExerciseName(e.target.value)}
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            <div className="space-y-2">
                                <Label htmlFor="weight">무게 (kg)</Label>
                                <Input
                                    id="weight"
                                    type="number"
                                    placeholder="60"
                                    value={weight}
                                    onChange={(e) => setWeight(Number(e.target.value))}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="sets">세트</Label>
                                <Input
                                    id="sets"
                                    type="number"
                                    placeholder="3"
                                    value={sets}
                                    onChange={(e) => setSets(Number(e.target.value))}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="reps">횟수</Label>
                                <Input
                                    id="reps"
                                    type="number"
                                    placeholder="12"
                                    value={reps}
                                    onChange={(e) => setReps(Number(e.target.value))}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="memo">메모</Label>
                            <Input
                                id="memo"
                                placeholder="가슴 운동"
                                value={memo}
                                onChange={(e) => setMemo(e.target.value)}
                            />
                        </div>
                    </div>
                    <Button className="w-full" onClick={handleSave}>
                        저장
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}