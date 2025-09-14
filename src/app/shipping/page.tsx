import Header from "@/app/components/shipping/Header";
import Form from "@/app/components/shipping/Form";
import Footer from "@/app/components/shipping/Footer";

export default function shippingpage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <Form />
      <Footer />
    </div>
  );
}
