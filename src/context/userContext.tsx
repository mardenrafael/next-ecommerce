import { PropsWithChildren, createContext, useEffect, useState } from "react";

export interface UserContext {
  name: string | null;
  setName: (name: string) => void;
  id: string | null;
  setId: (id: string) => void;
  token: string | null;
  setToken: (token: string) => void;
}

export interface UserProviderProps extends PropsWithChildren {}

export const UserContext = createContext<UserContext>({
  id: null,
  setId: id => {},
  name: null,
  setName: name => {},
  token: null,
  setToken: token => {},
});

export default function UserProvider({
  children,
}: UserProviderProps): JSX.Element {
  const [userId, setUserId] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const localUserId = localStorage.getItem("userID");

    if (localUserId == null) {
      return;
    }

    setUserId(localUserId);
  }, []);

  return (
    <UserContext.Provider
      value={{
        id: userId,
        setId: (id: string) => {
          const localUserId = localStorage.getItem("userID");

          if (localUserId == null) {
            localStorage.setItem("userID", id);
            setUserId(id);

            return;
          }

          setUserId(id);
        },
        name: userName,
        setName: setUserName,
        token: token,
        setToken: setToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
