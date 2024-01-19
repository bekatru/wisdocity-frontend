import { Dropdown } from "react-bootstrap";
import styles from "./WebsiteMenu.module.css";
import Menu from "../img/website/menu.svg";
import { forwardRef } from "react";
import Typography from "../Typography";

const WebsiteMenu = () => {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Dropdown>
        <Dropdown.Toggle disabled={true} as={Toggle}></Dropdown.Toggle>
        <Dropdown.Menu className={styles.menu}>
          <Dropdown.Item className={styles.item}>
            <Typography variant="h2" secondary>
              About Us
            </Typography>
          </Dropdown.Item>
          <Dropdown.Item className={styles.item}>
            <Typography variant="h2" secondary>
              For Investors
            </Typography>
          </Dropdown.Item>
          <Dropdown.Item className={styles.item}>
            <Typography variant="h2" secondary>
              Pricing
            </Typography>
          </Dropdown.Item>
          <Dropdown.Item className={styles.item}>
            <Typography variant="h2" secondary>
              FAQ
            </Typography>
          </Dropdown.Item>
          <Dropdown.Item className={styles.item}>
            <Typography variant="h2" secondary>
              Contact Us
            </Typography>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default WebsiteMenu;

const Toggle = forwardRef(({ children }: any) => (
  <button
    type="button"
    onClick={(e) => {
      e.preventDefault();
    }}
  >
    {children}
    <img src={Menu} alt="" />
  </button>
));
