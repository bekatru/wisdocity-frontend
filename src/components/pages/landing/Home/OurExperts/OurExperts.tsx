import Stack from "../../Stack";
import Typography from "../../Typography";
import styles from "./OurExperts.module.css";

const OurExperts = () => {
  return (
    <div className={styles.bg}>
      <Stack gap="80">
        <Typography sx={{ fontSize: "64px" }}>Our experts</Typography>

        <Stack direction="row" gap="100">
          <Stack gap="20">
            <Typography variant="h1" sx={{ fontSize: "64px" }}>
              120
            </Typography>
            <Typography variant="p2">learners has every expert</Typography>
          </Stack>
          <Stack gap="20">
            <Typography variant="h1" sx={{ fontSize: "64px" }}>
              92%
            </Typography>
            <Typography variant="p2">of learners are satisfied</Typography>
          </Stack>
          <Stack gap="20">
            <Typography variant="h1" sx={{ fontSize: "64px" }}>
              75%
            </Typography>
            <Typography variant="p2">of experts</Typography>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default OurExperts;
