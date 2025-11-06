import { ExerciseRepository } from "@/domain/exercise/repositories/ExerciseRepository";
import { Exercise } from "@/domain/exercise/entities/Exercise";

export class GetExerciseSummaryUseCase {
  constructor(private repository: ExerciseRepository) {}

  async execute(startDate: string, endDate: string) {
    return await this.repository.findByDateRange(startDate, endDate);
  }

  private groupByCategory(exercises: Exercise[]) {
    // 카테고리별 운동 통계 계산 로직
  }

  private calculateWeeklyProgress(exercises: Exercise[]) {
    // 주간 진행 상황 계산 로직
  }
}