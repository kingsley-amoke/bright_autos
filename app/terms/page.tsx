import TermsAndConditions from "./terms_and_conditions";

import Header from "../components/header";
import Footer from "../components/footer";
import { termsData } from "../constants/terms";

const TermsPage = () => {
  return (
    <div className="bg-white text-black">
      <Header />
      <TermsAndConditions
        title="TERMS & CONDITIONS"
        sections={termsData}
        contactEmail="contact@dealership.com"
        contactWebsite="://dealership.com"
      />
      <Footer />
    </div>
  );
};

export default TermsPage;
