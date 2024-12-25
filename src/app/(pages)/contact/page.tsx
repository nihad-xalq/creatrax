import { IoMdCall, IoMdMail } from "react-icons/io";
import { ContactItem } from "@/types/contactTypes";
import { ContactView } from "@/views/ContactView";
import { IoShareSocial } from "react-icons/io5";

export const contactData: ContactItem[] = [
  {
    id: 1,
    icon: <IoMdCall />,
    title: "Telefon",
    description: "Bizimlə telefon vasitəsilə əlaqə saxlayın:",
    details: ["+994 10 531 99 87"],
  },
  {
    id: 2,
    icon: <IoMdMail />,
    title: "Email",
    description: "Email ünvanımız vasitəsilə suallarınızı göndərin:",
    details: ["info@creadive.az", "support@creadive.az"],
  },
  {
    id: 4,
    icon: <IoShareSocial />,
    title: "Sosial Şəbəkələr",
    description: "Bizim sosial şəbəkə hesablarımız vasitəsilə bizə qoşulun:",
    details: [
      "Facebook: /creadive.az",
      "Instagram: @creadive.az",
      "X: @creadive_az",
    ],
  },
];

export default function ContactPage() {
  return (
    <section className="">
      <div className="lg:max-w-6xl mx-auto px-6">
        <ContactView data={contactData} />
      </div>
    </section>
  );
}
