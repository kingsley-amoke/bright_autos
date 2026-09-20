import Header from "../components/header";
import Footer from "../components/footer";
import TermsAndConditions from "../terms/terms_and_conditions";
import { privacyData } from "../constants/privacy";

const TermsPage = () => {
  return (
    <div className="bg-white text-black">
      <Header />
      <TermsAndConditions
        title="TERMS & CONDITIONS"
        subtitle="About"
        sections={privacyData}
        contactEmail="contact@dealership.com"
        contactWebsite="://dealership.com"
      />
      <Footer />
    </div>
  );
};

export default TermsPage;
