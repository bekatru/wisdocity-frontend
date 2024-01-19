import { FunctionComponent, PropsWithChildren } from "react";
import styles from "./PublicLayout.module.css";
import Topbar from "./Topbar/Topbar";
import Footer from "./Footer/Footer";

const PublicLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Topbar />
      {children}
      <Footer />
    </div>
  );
};

export default PublicLayout;
