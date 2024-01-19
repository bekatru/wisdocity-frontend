import styles from "./Topbar.module.css";
import logo from "../../img/logo.svg";
import Typography from "../../Typography";
import { useNavigate } from "react-router";
// import Experts from "../../img/website/experts.svg";
// import WebsiteMenu from "../../WebsiteMenu/WebsiteMenu";
import { Routes } from "modules/routing/types";

const Topbar = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.bg}>
      <div
        className={styles.homeButton}
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={logo} alt="Home" />
        <Typography
          sx={{
            color: "#64108F",
            fontFamily: "Futura",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          Wisdocity
        </Typography>
      </div>
      {/* <div className={styles.signup}>
        <div
          className={styles.signupButton}
          onClick={() => {
            // navigate("/become-an-expert/registration");
          }}
        >
          <img src={Experts} alt="" />
          <Typography variant="p2">Experts</Typography>
        </div>
        <div
          className={styles.signupButton}
          onClick={() => {
            // navigate("/become-a-learner/registration");
          }}
        >
          <img src={Learners} alt="" />
          <Typography variant="p2">Learners</Typography>
        </div>
      </div> */}
      <div className="flex flex-row space-x-4 text-xl font-sans">
        <div
          className="cursor-pointer hover:underline hover:text-purple-500"
          onClick={() => {
            navigate(Routes.SignIn);
          }}
        >
          <Typography variant="p2">Sign in</Typography>
        </div>
        <div>|</div>
        <div

          className="cursor-pointer hover:underline hover:text-purple-500"
          onClick={() => {
            navigate(Routes.SignUp);
          }}
        >
          <Typography variant="p2">Sign up</Typography>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
