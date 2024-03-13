import classes from "./UserModal.module.css";

interface IRowProps {
  label: string;
  text: string;
  textType?: "mailto" | "tel";
}

const Row = (props: IRowProps) => {
  return (
    <>
      <span className={classes.info_items}>{props.label}</span>
      <span className={classes.info_items}>
        {props.textType ? (
          <a href={`${props.textType}:${props.text}`}> {props.text} </a>
        ) : (
          props.text
        )}
      </span>
    </>
  );
};

export default Row;
