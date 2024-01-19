import styles from "./QuoteCard.module.css";
import Quote from "../../img/website/quote.svg";
import Typography from "../../Typography";
import Stack from "../../Stack";
import Avatar from "../../img/website/avatar.svg";

const QuoteCard = () => {
  return (
    <div className={styles.cardBg}>
      <img style={{ maxHeight: "48px", maxWidth: "48px" }} src={Quote} alt="" />
      <Typography variant="h3" sx={{ textAlign: "start" }}>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo con. Ut enim ad minim veniam, quis nostrud
        exercitation. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo con.
      </Typography>
      <Stack direction="row" gap="16px" sx={{ width: "fit-content" }}>
        <img
          src={Avatar}
          alt=""
          style={{ maxHeight: "84px", maxWidth: "84px" }}
        />
        <Stack gap="16" sx={{ width: "150px" }} justify="center" align="center">
          <Typography variant="h1" bold sx={{ width: "fit-content" }}>
            John Doe
          </Typography>
          <Typography variant="p2">Ai Expert</Typography>
        </Stack>
      </Stack>
    </div>
  );
};

export default QuoteCard;
