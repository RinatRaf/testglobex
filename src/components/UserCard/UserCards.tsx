import { memo } from "react";
import { IUser } from "../../App";
import UserCard from "./UserCard";

interface IUserCardsProps {
  users: IUser[];
  setCurrentUser: (user: IUser) => void;
}

const UserCards = memo((props: IUserCardsProps) => {
  return (
    <div className="userCards">
      {props.users.map((user: IUser) => (
        <UserCard
          onClick={() => {
            props.setCurrentUser(user);
          }}
          key={user.email}
          name={user.name}
          email={user.email}
          phone={user.phone}
        />
      ))}
    </div>
  );
});
UserCards.displayName = "UserCards";
export default UserCards;
