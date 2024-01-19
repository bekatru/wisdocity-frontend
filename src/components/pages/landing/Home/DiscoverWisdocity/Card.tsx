import { FunctionComponent } from "react";
import styles from "./DiscoverWisdocity.module.css";
import Typography from "../../Typography";

interface Props {
  icon: any;
  text: string;
  secondary: string;
}

const Card: FunctionComponent<Props> = ({ icon, text, secondary }) => {
  return (
    <div className={styles.card}>
      <img src={icon} alt="" />
      <Typography
        sx={{
          color: "#64108F",
          fontFamily: "Nunito Sans",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "38px",
        }}
      >
        {text}
      </Typography>
      <Typography
        variant="p2"
        sx={{
          color: "#64108F",
          fontFamily: "Nunito Sans",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "22px",
        }}
      >
        {secondary}
      </Typography>
    </div>
  );
};

export default Card;
