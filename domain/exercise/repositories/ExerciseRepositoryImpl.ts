import { Exercise } from "@/domain/exercise/entities/Exercise";
import { ExerciseRepository } from "@/domain/exercise/repositories/ExerciseRepository";
import { ApiClient } from "@/lib/api/ApiClient";

export class ExerciseRepositoryImpl implements ExerciseRepository {
  constructor(private readonly apiClient: ApiClient) {}

  async save(exercise: Exercise): Promise<Exercise> {
    const response = await this.apiClient.post('/api/exercises', exercise);
    return response.data;
  }

  async findByDateRange(startDate: string, endDate: string): Promise<Exercise[]> {
    const response = await this.apiClient.get(`/api/exercises?startDate=${startDate}&endDate=${endDate}`);
    return response.data.data;
  }
}