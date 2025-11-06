import { useExerciseMutation } from "@/application/hooks/exercise/useExerciseMutation";
import { useState } from "react";
import { PostExerciseRequest } from "@/types/exercise/exercise.request";

export const useExerciseHandlers = () => {
  const { mutate } = useExerciseMutation();
  const [open, setOpen] = useState(false);

  const handleSave = async (exerciseData: PostExerciseRequest) => {
    mutate(exerciseData, {
      onSuccess: () => {
        setOpen(false);
      },
      onError: (error) => {
        // 에러 처리
      }
    });
  };

  return {
    open,
    setOpen,
    handleSave,
  };
};