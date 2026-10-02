import TermsAndConditions from "./terms_and_conditions";

import Header from "../components/header";
import Footer from "../components/footer";
import { termsData } from "../constants/terms";
import { email, homepage } from "../constants/contact_info";

const TermsPage = () => {
  return (
    <div className="bg-white text-black">
      <Header />
      <TermsAndConditions
        title="TERMS & CONDITIONS"
        sections={termsData}
        contactEmail={email}
        contactWebsite={homepage}
      />
      <Footer />
    </div>
  );
};

export default TermsPage;
