import React from "react";

interface AppState {
  insuranceProvider: string;
  policyFileName: string;
  complaint: string;
  conditionTag: string;
}

type AppAction =
  | { type: "SET_INSURANCE_PROVIDER"; payload: string }
  | { type: "SET_POLICY_FILE"; payload: string }
  | { type: "SET_COMPLAINT"; payload: string }
  | { type: "SET_CONDITION_TAG"; payload: string }
  | { type: "RESET" };

const initialState: AppState = {
  insuranceProvider: "",
  policyFileName: "",
  complaint: "",
  conditionTag: "",
};

function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "SET_INSURANCE_PROVIDER":
      return { ...state, insuranceProvider: action.payload };
    case "SET_POLICY_FILE":
      return { ...state, policyFileName: action.payload };
    case "SET_COMPLAINT":
      return { ...state, complaint: action.payload };
    case "SET_CONDITION_TAG":
      return { ...state, conditionTag: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

interface AppStateContextValue {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

const AppStateContext = React.createContext<AppStateContextValue | null>(null);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const ctx = React.useContext(AppStateContext);
  if (!ctx) throw new Error("useAppState must be used within AppStateProvider");
  return ctx;
}
