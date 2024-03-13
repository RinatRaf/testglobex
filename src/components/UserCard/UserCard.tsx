import classes from "./UserCard.module.css";

interface IUserCardProps {
  name: string;
  phone: string;
  email: string;
  onClick(): void;
}
const UserCard = (props: IUserCardProps) => {
  return (
    <div onClick={props.onClick} className={classes.userCard}>
      <h3>{props.name}</h3>
      <div className={classes.info}>
        <img width={24} height={24} src="./img/icons/phone.svg" />
        <a href={`tel:${props.phone}`}> {props.phone} </a>
      </div>
      <div className={classes.info}>
        <img width={24} height={24} src="./img/icons/mail.svg" />
        <a href={`mailto:${props.email}`}>{props.email}</a>
      </div>
    </div>
  );
};

export default UserCard;
