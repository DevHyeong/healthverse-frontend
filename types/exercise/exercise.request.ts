
export interface PostExerciseRequest{
    startedAt: string; // LocalDateTime is represented as ISO 8601 string
    endedAt?: string;
    memo?: string;
    weightTrainings: WeightTrainingDto[];
}

export interface WeightTrainingDto {
    name: string;
    weight?: number;
    sets?: number;
    reps?: number;
    memo?: string;
}