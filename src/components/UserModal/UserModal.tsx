import { IUser } from "../../App";
import classes from "./UserModal.module.css";
import Row from "./Row";

interface IUserModalProps {
  setCurrentUser(user: IUser | null): void;
  user: IUser | null;
}

const UserModal = ({ user, setCurrentUser }: IUserModalProps) => {
  if (!user) return null;

  return (
    <div className={classes.userModal} onClick={() => setCurrentUser(null)}>
      <div
        className={classes.userModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes.headerModal}>
          <h3>{user.name}</h3>
          <img
            src="./img/icons/close.svg"
            height={20}
            width={20}
            onClick={() => setCurrentUser(null)}
          />
        </div>
        <div className={classes.info}>
          <Row label="Телефон:" text={user.phone} textType="tel" />
          <Row label="Почта:" text={user.phone} textType="mailto" />
          <Row label="Дата приема:" text={user.hire_date} />
          <Row label="Должность:" text={user.position_name} />
          <Row label="Подразделение:" text={user.department} />
        </div>
        <span className={classes.extraInfo}>Дополнительная информация:</span>
        <p className={classes.extraInfo_text}>
          Разработчики используют текст в качестве заполнителя макта страницы.
          Разработчики используют текст в качестве заполнителя макта страницы.
        </p>
      </div>
    </div>
  );
};

export default UserModal;
