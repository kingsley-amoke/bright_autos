import Header from "../components/header";
import Footer from "../components/footer";
import ServicesHero from "./hero";
import ServicesStats from "./stats";
import { services } from "../db/services";
import ServiceCard from "./service_card";
import MyVehicle from "./my_vehice";

const Services = () => {
  return (
    <div>
      <Header />
      <main>
        <ServicesHero />
        <ServicesStats />
        <div className="flex flex-col justify-center items-center mx-12 p-12 bg-slate-200 rounded-xl">
          <p className="text-orange-500">What we offer</p>
          <h2 className="text-black font-bold text-2xl my-4">
            Our Core Services
          </h2>
          <p className="text-gray-700 ">
            Every service is built around one goal; making csr ownership easier,
          </p>
          <p className="text-gray-700 ">
            cheaper and more enjoyable for you to use.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {services.map((service) => (
              <ServiceCard service={service} key={service.id} />
            ))}
          </div>
        </div>
        <MyVehicle />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
