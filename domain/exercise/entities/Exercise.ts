import { WeightTraining } from "@/domain/exercise/entities/WeightTraining";

export interface Exercise {
  id: string;
  name: string;
  weight?: number;
  sets?: number;
  reps?: number;
  memo?: string;
  weightTrainings: WeightTraining[];
}