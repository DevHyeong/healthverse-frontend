import { PostExerciseRequest } from "@/types/exercise/exercise.request";
import { useMutation } from "@tanstack/react-query";
import { ExerciseRepositoryImpl } from "@/domain/exercise/repositories/ExerciseRepositoryImpl";
import { CreateExerciseUseCase } from "@/domain/exercise/usecase/CreateExerciseUseCase";
import { apiClient } from "@/lib/api/AxiosApiClient";

export const useExerciseMutation = () => {
  const repository = new ExerciseRepositoryImpl(apiClient);
  const createExerciseUseCase = new CreateExerciseUseCase(repository);

  return useMutation({
    mutationFn: (data: PostExerciseRequest) => createExerciseUseCase.execute(data),
  });
};