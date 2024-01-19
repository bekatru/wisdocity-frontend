import Stack from "../../Stack";
import Typography from "../../Typography";
import Card from "./Card";
import styles from "./DiscoverWisdocity.module.css";
import Fire from "../../../assets/img/website/fire.svg";
import Community from "../../../assets/img/website/community.svg";
import Message from "../../../assets/img/website/message.svg";

const cards = [
  {
    icon: Fire,
    text: "Virtual Avatar",
    secondary:
      "Interact with industry experts through lifelike virtual avatars for personalized guidance.",
  },
  {
    icon: Community,
    text: "Wisdom Repository",
    secondary:
      "Access a continually updated repository of expert knowledge for up-to-date insights.",
  },
  {
    icon: Message,
    text: "Rating System",
    secondary:
      "Rate expert responses and contribute to the improvement of the platform.",
  },
  {
    icon: Fire,
    text: "Community Support",
    secondary:
      "Join a supportive community of learners and experts to nurture your growth.",
  },
  {
    icon: Community,
    text: "Continuous Learning",
    secondary: "Keep up with the latest industry trends and best practices.",
  },
  {
    icon: Message,
    text: "Feedback Loop",
    secondary:
      "Provide constructive feedback to help experts refine their advisory skills.",
  },
];

const DiscoverWisdocity = () => {
  return (
    <div className={styles.bg}>
      <Stack align="flex-start" gap="24">
        <Typography
          sx={{
            color: "#321841",
            fontFamily: "PP Telegraf",
            fontSize: "64px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          Discover Wisdocity
        </Typography>
        <Typography
          sx={{
            color: "#321841",
            fontFamily: "PP Telegraf",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          Wisdocity offers a range of powerful features designed to enhance your
          learning experience:
        </Typography>
      </Stack>
      <Stack
        gap="32"
        wrap="wrap"
        direction="row"
        sx={{ width: "100%" }}
        justify="space-around"
        align="center"
      >
        {cards.map((e: any) => {
          return <Card text={e.text} icon={e.icon} secondary={e.secondary} />;
        })}
      </Stack>
    </div>
  );
};

export default DiscoverWisdocity;
