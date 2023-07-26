import { useState, createContext, useContext, Dispatch, ReactNode } from "react";

//context basic

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
  setUser: Dispatch<User | null>;
};

const ThemeContext = createContext<ThemeContextType | null>(null);
const UserContext = createContext<UserContextType | null>(null);

function Button({ user, children }: { user: string; children: ReactNode }) {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const { setUser } = useContext(UserContext) as UserContextType;

  return (
    <button
      className={"theme-" + theme}
      onClick={() => {
        setUser({ name: user });
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

export const UseContext1 = () => {
  const [theme, setTheme] = useState<ThemeContext>("light");
  const [user, setUser] = useState<User | null>(null);

  return (
    <>
      <p>context basic:</p>
      <ThemeContext.Provider
        value={{
          theme: theme,
          setTheme: setTheme,
        }}>
        <UserContext.Provider
          value={{
            user: user,
            setUser: setUser,
          }}>
          <Form />
          <Theme />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};
