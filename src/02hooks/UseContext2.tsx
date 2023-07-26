import { useState, createContext, useReducer, useContext, Dispatch, ReactNode } from "react";

//context advance

type ThemeContext = "light" | "dark";

type ThemeContextType = {
  theme: ThemeContext;
  setTheme: Dispatch<ThemeContext>;
};

interface User {
  name: string;
}

type UserContextType = {
  user: User | null;
  dispatchUser: Dispatch<UserActions>;
};

const ThemeContext = createContext<ThemeContextType | null>(null);
const UserContext = createContext<UserContextType | null>(null);

const userInitialState = null;

type UserState = User | null;

type UserActions = { type: "set"; payload: { name: string } };

function userReducer(state: UserState, action: UserActions): UserState {
  switch (action.type) {
    case "set": {
      return {
        ...state,
        name: action.payload.name,
      };
    }
    default: {
      throw new Error();
    }
  }
}

function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeContext>("light");
  const [user, dispatchUser] = useReducer(userReducer, userInitialState);

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme: setTheme,
      }}>
      <UserContext.Provider
        value={{
          user: user,
          dispatchUser: dispatchUser,
        }}>
        {children}
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

function Button({ user, children }: { user: string; children: ReactNode }) {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const { dispatchUser } = useContext(UserContext) as UserContextType;

  return (
    <button
      className={"theme-" + theme}
      onClick={() => {
        dispatchUser({ type: "set", payload: { name: user } });
      }}>
      {children}
    </button>
  );
}

function Panel({ title, children }: { title: string; children: ReactNode }) {
  const { theme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <div className={"theme-" + theme}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

function Form() {
  const { user } = useContext(UserContext) as UserContextType;

  return (
    <>
      <Panel title="Welcome">
        <Button user="User 1">Log in as 'User 1'</Button>
        &nbsp;
        <Button user="User 2">Log in as 'User 2'</Button>
        &nbsp;
        {user && <span>You logged as {user?.name}.</span>}
      </Panel>
    </>
  );
}

function Theme() {
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <p>
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={(e) => {
          setTheme(e.target.checked ? "dark" : "light");
        }}
      />
      &nbsp;
      <span>Dark</span>
    </p>
  );
}

export const UseContext2 = () => {
  return (
    <>
      <p>context advance:</p>
      <AppProvider>
        <Form />
        <Theme />
      </AppProvider>
    </>
  );
};
