"use client";

import { InputTextareaField } from "@/components/form/InputTextareaField";
import { InputTextField } from "@/components/form/InputTextField";
import { CFormProvider } from "@/components/form/CFormProvider";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { ContactItem } from "@/types/contactTypes";
import { IoShareSocial } from "react-icons/io5";
import { useForm } from "react-hook-form";
import * as yup from "yup";

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

interface ContactViewProps {
  data: ContactItem[];
}

const schema = yup.object().shape({
  name: yup.string().required("Bu xana vacibdir"),
  email: yup.string().required("Bu xana vacibdir"),
  message: yup.string().required("Bu xana vacibdir"),
});

type FormValues = yup.InferType<typeof schema>;

export const ContactView: React.FC<ContactViewProps> = ({ data }) => {
  const methods = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const handleSubmit = (formData: FormValues) => {
    // FIXME: replace alert with toast message
    console.log(formData);
    alert("success");
    methods.reset();
  };

  return (
    <div className="px-0 lg:px-6 flex flex-col lg:flex-col gap-3 lg:gap-6 willFadeFromAbove">
      {/* Contact Info Section */}
      <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-4">
        Bizimlə Əlaqə
      </h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="contact-info w-full lg:w-2/3">
          <ul className="space-y-3">
            {data.map((item) => (
              <li
                key={item.id}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-2 flex flex-row items-center gap-1">
                  {item.icon} {item.title}
                </h2>
                {item.details && (
                  <ul className="space-y-0.5 text-gray-800">
                    {item.details.map((detail, index) => (
                      <li key={index} className="text-sm">
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form w-full h-full lg:w-1/2 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Bizə Yazın
          </h2>
          <CFormProvider onSubmit={handleSubmit} methods={methods}>
            <div className="contact_form_inputs_wrapper flex flex-col space-y-3 mb-3">
              <InputTextField
                name="name"
                label="Adınız"
                placeholder="Adınızı daxil edin"
              />

              <InputTextField
                name="email"
                label="Email"
                placeholder="Email ünvanınızı daxil edin"
              />

              <InputTextareaField
                name="message"
                label="Mesajınız"
                placeholder="Mesajınızı buraya yazın"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="w-max bg-gradient-to-tl from-green-500 to-teal-400 text-white font-semibold py-2 px-4 rounded-lg transition-transform transform hover:scale-105 cursor-pointer"
              >
                Göndər
              </button>
            </div>
          </CFormProvider>
        </div>
      </div>
    </div>
  );
};
