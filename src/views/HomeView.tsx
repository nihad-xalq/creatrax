"use client";

import { InputTextField } from "@/components/form/InputTextField";
import { CFormProvider } from "@/components/form/CFormProvider";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
// import Image from "next/image";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().required("Bu xana vacibdir"),
  password: yup.string().required("Bu xana vacibdir"),
});

type FormValues = yup.InferType<typeof schema>;

export const HomeView = () => {
  const router = useRouter();

  const methods = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const handleSubmit = (formData: FormValues) => {
    console.log(formData);
    router.push("/orders");
  };

  return (
    <section className="py-0 lg:py-10 lg:my-auto h-full">
      <div className="home_inner flex flex-col lg:flex-row justify-center items-center gap-16 max-w-6xl mx-auto px-6 h-full">
        {/* Form Section */}
        <div className="form_container bg-white border border-gray-300 p-8 rounded-lg w-full lg:w-1/2 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            Hesabınıza Daxil Olun
          </h2>
          <CFormProvider methods={methods} onSubmit={handleSubmit}>
            <div className="space-y-6">
              <InputTextField
                name="email"
                label="Email"
                placeholder="abbasovabbas@gmail.com"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />

              <InputTextField
                name="password"
                label="Şifrə"
                placeholder="Şifrənizi daxil edin"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />

              <div className="flex justify-center">
                <input
                  type="submit"
                  value="Daxil ol"
                  className="w-full bg-gradient-to-tl from-green-500 to-teal-400 text-white font-semibold py-3 px-4 rounded-lg transition-transform transform hover:scale-105 cursor-pointer"
                />
              </div>
            </div>
          </CFormProvider>
        </div>

        {/* Visual Section */}
        {/* <div className="visual_container w-full lg:w-1/2 flex flex-col items-center justify-center space-y-2 lg:space-y-6">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src="/welcome-illustration.svg"
            alt="Welcome Illustration"
            className="w-[80%] h-auto"
          />
          <div className="text-center space-y-2 lg:space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Bizimlə Stoklama İdarəetməsini Sadələşdirin
            </h3>
            <p className="text-md text-gray-600 leading-relaxed">
              CreaTrax, kiçik bizneslərə əməliyyatlarını asanlaşdırmaq üçün
              nəzərdə tutulmuş müasir bir platformadır.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};
