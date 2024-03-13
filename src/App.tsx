import { useCallback, useEffect, useState } from "react";
import "./App.css";
import UserModal from "./components/UserModal/UserModal";
import UserCards from "./components/UserCard/UserCards";

export interface IUser {
  name: string;
  phone: string;
  email: string;
  hire_date: string;
  department: string;
  position_name: string;
  address: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const debounce = <T extends (...args: any[]) => void>(func: T, time = 1000) => {
  let timerId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, time);
  };
};

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [debouncedSearchValue, _setDebounced] = useState("");
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const [users, setUsers] = useState([]);

  const setDebounced = useCallback(debounce(_setDebounced), []);

  useEffect(() => {
    setDebounced(searchValue);
  }, [searchValue, setDebounced]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function fetchData() {
      try {
        const url =
          debouncedSearchValue.length > 0
            ? `http://localhost:3000/?term=${debouncedSearchValue}`
            : `http://localhost:3000`;
        const response = await fetch(url, { signal });
        const user = await response.json();
        setUsers(user);
      } catch (e) {
        const err = e instanceof Error ? e : new Error(String(e));
        console.error(err);
      }
    }
    fetchData();

    return () => {
      controller.abort();
    };
  }, [debouncedSearchValue]);

  return (
    <div className="container">
      <input
        className="search"
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.currentTarget.value);
        }}
        placeholder="Поиск..."
      />
      <UserModal user={currentUser} setCurrentUser={setCurrentUser} />
      <UserCards users={users} setCurrentUser={setCurrentUser} />
    </div>
  );
}

export default App;
