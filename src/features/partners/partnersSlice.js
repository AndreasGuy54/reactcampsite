import { createSlice } from '@reduxjs/toolkit';
import { PARTNERS } from "../../app/shared/PARTNERS";

// initial state object to be passed to create slice
const initialState = {
  partnersArray: PARTNERS
}

const partnersSlice = createSlice({
  name: 'partners',
  initialState
})

export const partnersReducer = partnersSlice.reducer;

export const selectAllPartners = (state) => {
  return state.partners.partnersArray;
}

export const selectFeaturedPartner = (state) => {
    return state.partners.partnersArray.find(partner => partner.featured);
}