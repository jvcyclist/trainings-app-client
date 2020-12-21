import {User} from './User';
import {TrainingType} from './TrainingType';

export interface Training {
  id: number;
  description: string;
  created_by: User;
  assigned_to: User;
  training_type: TrainingType;
  training_date: string;
}
