import { useState, createContext, useContext, ReactNode } from "react";

/*
useContext is a React Hook that lets you read and subscribe to context from 
your component. 

const value = useContext(SomeContext) 

Parameters 
  * SomeContext: The context that you’ve previously created with createContext. 
  The context itself does not hold the information, it only represents the kind 
  of information you can provide or read from components. 

Returns 
  * useContext returns the context value for the calling component.
*/

type ThemeContext = "light" | "dark";

interface User {
  name: string;
}

type UserContextType = {
  user: User | null;
  setUser: (user: User) => void;
};

const ThemeContext = createContext<ThemeContext | null>(null);
const UserContext = createContext<UserContextType | null>(null);

function Button({ user, children }: { user: string; children: ReactNode }) {
  const theme = useContext(ThemeContext);
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
  const theme = useContext(ThemeContext);

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

//context basic

const Example1 = () => {
  const [theme, setTheme] = useState<ThemeContext>("light");
  const [user, setUser] = useState<User | null>(null);

  return (
    <>
      <p>context basic:</p>
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider
          value={{
            user: user,
            setUser: setUser,
          }}>
          <Form />
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
        </UserContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

//context advance

const Example2 = () => {
  return (
    <>
      <p>context advance:</p>
    </>
  );
};

//default

export const UseContext = () => {
  return (
    <>
      <h2>Hooks / useContext</h2>
      <hr />
      <Example1></Example1>
      <Example2></Example2>
    </>
  );
};
