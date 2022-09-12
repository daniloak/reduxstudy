import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Results } from "../../types/Beer";
import { apiSlice } from "../api/apiSlice";

interface Beer {
    id: number,
    name: string,
    link: string,
    available: boolean,
    brand: string,
    category: string,
}

const endpointUrl = "/beers";

export const beerApiSlice = apiSlice.injectEndpoints({
    endpoints: ({ query }) => ({
        getBeers: query<Results, void>({
            query: () => endpointUrl,
            providesTags: ["Beer"],
        })
    })
})

export const beer: Beer = {
    "id": 0,
    "name": "memminger weissbier - 500ml",
    "link": "https://www.beer4u.com.br/paises/alemanha/memminger-weissbier-500ml",
    "available": false,
    "category": "others",
    "brand": "memminger"
}

const initialState = [
    { ...beer, id: 1 },
    { ...beer, id: 2 },
    { ...beer, id: 3 },
];

const beersSlice = createSlice({
    name: "beers",
    initialState: initialState,
    reducers: {

    }
})

export const selectBeers = (state: RootState) => state.beers;

export default beersSlice.reducer;

export const { useGetBeersQuery } = beerApiSlice;