import { Exercise } from "@/domain/exercise/entities/Exercise";

export interface ExerciseRepository {
  save(exercise: Exercise): Promise<Exercise>;
  findByDateRange(startDate: string, endDate: string): Promise<Exercise[]>;
}