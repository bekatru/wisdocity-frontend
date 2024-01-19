import Stack from "../../Stack";
import Typography from "../../Typography";

const TermsSection = () => {
  return (
    <Stack gap="61" direction="row" align="center">
      <Typography variant="p1" sx={{ color: "#FFF" }}>
        Copyright © 2023 Wisdocity AI
      </Typography>
      <Stack gap="32" direction="row">
        <Typography variant="p1" sx={{ color: "#FFF" }}>
          Privacy policy
        </Typography>
        <Typography variant="p1" sx={{ color: "#FFF" }}>
          Terms of use
        </Typography>
      </Stack>
    </Stack>
  );
};

export default TermsSection;
