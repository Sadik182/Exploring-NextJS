import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Contact {
  name: string;
  email: string;
  subject: string;
  message: string;
}
interface ContactState{
    contacts: Contact[];
}

const initialState: ContactState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
  },
});

export const { setContact } = contactSlice.actions;
export default contactSlice.reducer;
