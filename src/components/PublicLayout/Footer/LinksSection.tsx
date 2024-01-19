import Stack from "../../Stack";
import Typography from "../../Typography";
import styles from "./LinksSection.module.css";
import Inst from "../../../assets/img/website/socials/instagram.svg";
import In from "../../../assets/img/website/socials/linkedin.svg";
import Face from "../../../assets/img/website/socials/facebook.svg";

const LinksSection = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.main}>
        <Typography variant="h1" sx={{ color: "#FFF" }}>
          Wisdocity.ai
        </Typography>
        <Typography
          secondary
          variant="p2"
          sx={{ margin: "0", textAlign: "start", color: "#C2B0D9" }}
        >
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo con. Ut enim ad minim
        </Typography>
        <Stack direction="row" gap="54">
          <img src={In} alt="" />
          <img src={Face} alt="" />
          <img src={Inst} alt="" />
        </Stack>
      </div>
      <Stack gap="24">
        <Typography variant="h3" sx={{ textAlign: "start", color: "white" }}>
          Company
        </Typography>
        <Stack gap="16">
          <Typography
            variant="p2"
            sx={{ textAlign: "start", color: "#C2B0D9" }}
          >
            About us
          </Typography>
          <Typography
            variant="p2"
            sx={{ textAlign: "start", color: "#C2B0D9" }}
          >
            News
          </Typography>
          <Typography
            variant="p2"
            sx={{ textAlign: "start", color: "#C2B0D9" }}
          >
            For Investors
          </Typography>
          <Typography
            variant="p2"
            sx={{ textAlign: "start", color: "#C2B0D9" }}
          >
            Pricing
          </Typography>
          <Typography
            variant="p2"
            sx={{ textAlign: "start", color: "#C2B0D9" }}
          >
            FAQ
          </Typography>
          <Typography
            variant="p2"
            sx={{ textAlign: "start", color: "#C2B0D9" }}
          >
            Contact us
          </Typography>
        </Stack>
      </Stack>
      <Stack gap="24">
        <Typography variant="h3" sx={{ color: "white" }}>
          Our Product
        </Typography>
        <Stack gap="16">
          <Typography
            variant="p2"
            sx={{ textAlign: "start", color: "#C2B0D9" }}
          >
            Expert
          </Typography>
          <Typography
            variant="p2"
            sx={{ textAlign: "start", color: "#C2B0D9" }}
          >
            Learner
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
};

export default LinksSection;
