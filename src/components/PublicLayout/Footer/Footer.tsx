import styles from "./Footer.module.css";
import LinksSection from "./LinksSection";
import TermsSection from "./TermsSection";
const Footer = () => {
  return (
    <footer className={styles.bg}>
      <LinksSection></LinksSection>
      <TermsSection></TermsSection>
    </footer>
  );
};

export default Footer;
