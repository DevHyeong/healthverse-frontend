import { ExerciseRepository } from "@/domain/exercise/repositories/ExerciseRepository";
import { Exercise } from "@/domain/exercise/entities/Exercise";

export class CreateExerciseUseCase {
  constructor(private repository: ExerciseRepository) {}

  async execute(exercise: Exercise): Promise<Exercise> {
    // 비즈니스 규칙 검증
    this.validateExercise(exercise);

    // 운동 기록 저장
    return this.repository.save(exercise);
  }

  private validateExercise(exercise: Exercise): void {
    if (!exercise.name) {
      throw new Error("운동 이름은 필수입니다.");
    }
    if (exercise.sets && exercise.sets < 0) {
      throw new Error("세트 수는 0보다 작을 수 없습니다.");
    }
  }
}