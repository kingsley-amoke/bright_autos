import Header from "@/app/components/header";
import React from "react";
import CarUploadForm from "./car_upload_form";
import Footer from "@/app/components/footer";

const page = () => {
  return (
    <div>
      <Header />
      <CarUploadForm />
      <Footer />
    </div>
  );
};

export default page;
