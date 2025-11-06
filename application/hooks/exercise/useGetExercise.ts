import { ExerciseRepositoryImpl } from "@/domain/exercise/repositories/ExerciseRepositoryImpl";
import { apiClient } from "@/lib/api/AxiosApiClient";
import { useQuery } from "@tanstack/react-query";
import { GetExerciseSummaryUseCase } from "@/domain/exercise/usecase/GetExerciseSummaryUseCase";
import { Exercise } from "@/domain/exercise/entities/Exercise";

export const useGetExercises = (startDate: string, endDate: string) => {
  const repository = new ExerciseRepositoryImpl(apiClient);
  const getExerciseUseCase = new GetExerciseSummaryUseCase(repository);

  return useQuery<Exercise[]>({
    queryKey: ["exercises", startDate, endDate],
    queryFn: () => getExerciseUseCase.execute(startDate, endDate),
    enabled: true,
  });
};