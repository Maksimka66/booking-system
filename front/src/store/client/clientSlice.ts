import { createSlice } from '@reduxjs/toolkit';
import { clientApi } from './clientApi';
import { IResponse } from '@/components/UserMainInfo/UserMainInfo';

interface IClientState {
    allUsers: IResponse[];
    allConsultants: IResponse[];
    reserved: IResponse[];
}

const initialState: IClientState = {
    allUsers: [],
    allConsultants: [],
    reserved: []
};

export const clientSlice = createSlice({
    name: 'client',
    initialState,
    selectors: {
        selectAllConsultants: (state) => state.allConsultants,
        selectReserved: (state) => state.reserved
    },
    reducers: {
        reserveBusinessConsultant: (state, { payload }) => {
            console.log(payload);

            if (payload.reserved) {
                state.reserved.push(payload);
            } else {
                state.reserved = state.reserved.filter((item) => item._id !== payload._id);
            }
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            clientApi.endpoints.getAllBusiness.matchFulfilled,
            (state, { payload }) => {
                payload = payload.map((item: IResponse) => ({ ...item, reserved: false }));

                state.allConsultants = payload;
            }
        );
    }
});

export const { reserveBusinessConsultant } = clientSlice.actions;

export const { selectAllConsultants, selectReserved } = clientSlice.selectors;

export const clientReducer = clientSlice.reducer;
