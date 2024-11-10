import { useContext } from "react";
import { AppContext } from "@/context";
import { ActionTypes } from "@/types";
import { FetchHotelDetailsParams } from "@/services";

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  const { state, dispatch } = context;

  const addFlight = (id: string) => {
    dispatch({
      type: ActionTypes.ADD_FLIGHT,
      payload: id,
    });
  };

  const addHotel = (payload: FetchHotelDetailsParams) => {
    dispatch({
      type: ActionTypes.ADD_HOTEL,
      payload: payload,
    });
  };

  const addAttraction = (id: string) => {
    dispatch({
      type: ActionTypes.ADD_ATTRACTION,
      payload: id,
    });
  };

  const removeFlight = (id: string) => {
    dispatch({
      type: ActionTypes.REMOVE_FLIGHT,
      payload: id,
    });
  };

  const removeHotel = (id: string) => {
    dispatch({
      type: ActionTypes.REMOVE_HOTEL,
      payload: id,
    });
  };

  const removeAttraction = (id: string) => {
    dispatch({
      type: ActionTypes.REMOVE_ATTRACTION,
      payload: id,
    });
  };

  return {
    ...state,
    addFlight,
    addHotel,
    addAttraction,
    removeFlight,
    removeHotel,
    removeAttraction,
  };
};
