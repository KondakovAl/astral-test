export interface ICard {
  id: number;
  word: string;
  meaning: string;
  translation: string;
  unique: string;
}

export interface IEditView {
  id: number;
  name: editViewType;
  value?: string;
  type: string;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  options?: OptionsProps[];
}

export interface OptionsProps {
  id: number;
  value: string;
  selected: boolean;
  checked?: boolean;
  disabled?: boolean;
}

export interface INavigation {
  id: number;
  name: string;
  link: string;
  needAccess: boolean;
}

export type editViewType =
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'age'
  | 'tel'
  | 'birthTime'
  | 'hobby'
  | 'country'
  | 'greeting'
  | 'employee'
  | 'salary'
  | 'competence';
