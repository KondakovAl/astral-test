import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IEditView, OptionsProps } from '../types/types';

interface editViewSliceProps {
  data: IEditView[];
}

const editViewSlice = createSlice({
  name: 'editView',
  initialState: {
    data: [
      { id: 1, name: 'firstName', type: 'text', value: 'Alex' },
      { id: 2, name: 'lastName', type: 'text', value: 'Kondakov' },
      {
        id: 3,
        name: 'email',
        type: 'email',
        value: 'kondakovalse99@gmail.com',
      },
      { id: 4, name: 'age', type: 'number', value: '23' },
      { id: 5, name: 'tel', type: 'tel', value: '+79224170901' },
      { id: 6, name: 'birthDate', type: 'date', value: '1999-08-14' },
      { id: 7, name: 'birthTime', type: 'time', value: '04:10' },
      {
        id: 8,
        name: 'hobby',
        type: 'select',
        value: 'tennis',
        options: [
          { id: 1, value: 'volleyball' },
          { id: 2, value: 'swimming' },
          { id: 3, value: 'tennis' },
        ],
      },
      {
        id: 9,
        name: 'country',
        type: 'select',
        value: 'Russia',
        options: [
          { id: 1, value: 'Russia' },
          { id: 2, value: 'Ukraine' },
          { id: 3, value: 'USA' },
          { id: 4, value: 'Canada' },
          { id: 5, value: 'Mexico' },
          { id: 6, value: 'France' },
        ],
      },
      {
        id: 10,
        name: 'greeting',
        type: 'select',
        value: 'Mr.',
        options: [
          { id: 1, value: 'Mr.' },
          { id: 2, value: 'Ms.' },
        ],
      },
      {
        id: 11,
        name: 'employee',
        type: 'radio',
        value: 'Yes',
        options: [
          { id: 1, value: 'Yes' },
          { id: 2, value: 'No' },
        ],
      },
      {
        id: 12,
        name: 'salary',
        type: 'range',
        min: 50,
        max: 120,
        step: 1,
        value: '90',
        disabled: false,
      },
      {
        id: 13,
        name: 'competence',
        type: 'checkbox',

        options: [
          {
            id: 1,
            value: 'Change buttons colors',
            checked: true,
            disabled: false,
          },
          {
            id: 2,
            value: 'Testing and debugging the results of work',
            checked: true,
            disabled: false,
          },
          {
            id: 3,
            value: 'Participation in daily stand-ups',
            checked: true,
            disabled: false,
          },
          {
            id: 4,
            value:
              'Participation in the development of the user interface of the product',
            checked: false,
            disabled: false,
          },
          {
            id: 5,
            value: 'Refactoring existing code',
            checked: false,
            disabled: false,
          },
          {
            id: 6,
            value: 'Participation in the choice of technology stack',
            checked: false,
            disabled: false,
          },
        ],
      },
    ],
  } as editViewSliceProps,
  reducers: {
    setFirstName: (
      state: editViewSliceProps,
      action: PayloadAction<string>
    ) => {
      state.data[0].value = action.payload;
    },
    setLastName: (state: editViewSliceProps, action: PayloadAction<string>) => {
      state.data[1].value = action.payload;
    },
    setEmail: (state: editViewSliceProps, action: PayloadAction<string>) => {
      state.data[2].value = action.payload;
    },
    setAge: (state: editViewSliceProps, action: PayloadAction<string>) => {
      state.data[3].value = action.payload;
    },
    setTel: (state: editViewSliceProps, action: PayloadAction<string>) => {
      state.data[4].value = action.payload;
    },
    setBirthDate: (
      state: editViewSliceProps,
      action: PayloadAction<string>
    ) => {
      state.data[5].value = action.payload;
    },
    setBirthTime: (
      state: editViewSliceProps,
      action: PayloadAction<string>
    ) => {
      state.data[6].value = action.payload;
    },
    setHobby: (state: editViewSliceProps, action: PayloadAction<string>) => {
      state.data[7].value = action.payload;
    },
    setCountry: (state: editViewSliceProps, action: PayloadAction<string>) => {
      state.data[8].value = action.payload;
    },
    setGreeting: (state: editViewSliceProps, action: PayloadAction<string>) => {
      state.data[9].value = action.payload;
    },
    setEmployee: (state: editViewSliceProps, action: PayloadAction<string>) => {
      state.data[10].value = action.payload;
      if (state.data[10].value === 'Yes') {
        state.data[11].disabled = false;
      } else {
        state.data[11].disabled = true;
      }
      state.data[12].options?.forEach((item: OptionsProps) => {
        if (state.data[10].value === 'Yes') {
          item.disabled = false;
        }
        if (state.data[10].value === 'No') {
          item.disabled = true;
        }
      });
    },
    setSalary: (state: editViewSliceProps, action: PayloadAction<string>) => {
      state.data[11].value = action.payload;
      state.data[12].options?.forEach((item: OptionsProps) => {
        if (Number(state.data[11].value) <= 60) {
          if (item.id !== 1) {
            item.disabled = true;
            item.checked = false;
          } else {
            item.disabled = false;
            item.checked = true;
          }
        } else if (
          Number(state.data[11].value) > 60 &&
          Number(state.data[11].value) <= 90
        ) {
          if (item.id > 3) {
            item.disabled = true;
            item.checked = false;
          } else {
            item.disabled = false;
            item.checked = true;
          }
        } else if (
          Number(state.data[11].value) > 90 &&
          Number(state.data[11].value) <= 120
        ) {
          if (item.id > 6) {
            item.disabled = true;
            item.checked = false;
          } else {
            item.disabled = false;
            item.checked = true;
          }
        }
      });
    },
    setCompetence: (
      state: editViewSliceProps,
      action: PayloadAction<OptionsProps>
    ) => {
      if (state.data[12].options) {
        const index = state.data[12].options?.findIndex(
          (item: OptionsProps) => item.id === action.payload.id
        );
        console.log(action.payload);

        state.data[12].options[index].checked =
          !state.data[12].options[index].checked;
      }
    },
  },
});

export const {
  setFirstName,
  setLastName,
  setAge,
  setEmail,
  setTel,
  setBirthDate,
  setBirthTime,
  setHobby,
  setCountry,
  setGreeting,
  setEmployee,
  setSalary,
  setCompetence,
} = editViewSlice.actions;

export default editViewSlice.reducer;
