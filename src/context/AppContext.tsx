import { ActionTypes, AppAction, AppState } from "@/types";
import React, { createContext, ReactNode, useReducer } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FetchHotelDetailsParams } from "@/services";

const initialState: AppState = {
  attractions: [],
  flights: [],
  hotels: [],
};

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case ActionTypes.ADD_FLIGHT:
      return {
        ...state,
        flights: [...state.flights, action.payload as string],
      };
    case ActionTypes.REMOVE_FLIGHT:
      return {
        ...state,
        flights: state.flights.filter((id) => id !== action.type),
      };
    case ActionTypes.ADD_HOTEL:
      return {
        ...state,
        hotels: [
          ...state.hotels,
          action.payload as unknown as FetchHotelDetailsParams,
        ],
      };
    case ActionTypes.REMOVE_HOTEL:
      return {
        ...state,
        hotels: state.hotels.filter(
          (hotel) => hotel.hotel_id !== action.payload,
        ),
      };
    case ActionTypes.ADD_ATTRACTION:
      return {
        ...state,
        attractions: [...state.attractions, action.payload as string],
      };
    case ActionTypes.REMOVE_ATTRACTION:
      return {
        ...state,
        attractions: state.attractions.filter((id) => id !== action.type),
      };
    default:
      return state;
  }
};

interface AppContextProps {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      cacheTime: 24 * 60 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 1,
      refetchOnReconnect: false,
    },
  },
});

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{ state, dispatch }}>
        {children}
      </AppContext.Provider>
    </QueryClientProvider>
  );
};
