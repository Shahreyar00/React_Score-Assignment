import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    score: null,
    loading: false,
    error: false,
};

export const ScoreContext = createContext(INITIAL_STATE);

export const ScoreReducer = (state, action) => {
    switch (action.type) {
        case "LOADING_START":
            return {
                score: null,
                loading: true,
                error: false,
            };

        case "LOADING_SUCCESS":
            return {
                score: action.payload,
                loading: false,
                error: false,
            };

        case "LOADING_FAILURE":
            return {
                score: null,
                loading: false,
                error: true,
            };

        default:
            return state;
    }
};

export const ScoreContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ScoreReducer, INITIAL_STATE);

    return (
        <ScoreContext.Provider
            value={{
                score: state.score,
                loading: state.loading,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </ScoreContext.Provider>
    );
};

