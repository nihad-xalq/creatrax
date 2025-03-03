"use client";

import { InputPasswordField } from "@/components/form/InputPasswordField";
import { InputCheckboxField } from "@/components/form/InputCheckboxField";
import { InputTextField } from "@/components/form/InputTextField";
import { CFormProvider } from "@/components/form/CFormProvider";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Bu xana vacibdir")
    .email("Düzgün email formatı daxil edin"),
  password: yup
    .string()
    .required("Bu xana vacibdir")
    .min(8, "Şifrə ən az 8 simvol olmalıdır")
    .matches(/[A-Z]/, "Şifrə ən az bir böyük hərf olmalıdır")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Şifrə ən az bir xüsusi simvol olmalıdır"
    ),
  rememberMe: yup.boolean(),
});

type FormValues = yup.InferType<typeof schema>;

export const HomeView = () => {
  const router = useRouter();

  const methods = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const handleSubmit = (formData: FormValues) => {
    console.log(formData);

    // TODO: Add server-side validation and authentication logic here
    // For example, you can use an API call to a server-side endpoint to validate the user's credentials
    // If the credentials are valid, you can redirect the user to the "/dashboard" page
    // Otherwise, you can display an error message or provide a retry mechanism
    router.push("/app/finances");
  };

  return (
    <section className="py-8 lg:py-12 flex items-center my-auto h-screen willFadeFromAbove">
      <div className="container mx-auto max-w-4xl px-2 lg:px-12">
        <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-xl overflow-hidden">
          {/* Visual Section */}
          <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-tl from-blue-500 to-blue-400 text-white p-8 justify-center items-center">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">
                Məlumatlarınızı daha rahat idarə edin!
              </h3>
              <p className="text-sm leading-relaxed">
                CreaTrax, kiçik bizneslərə əməliyyatlarını asanlaşdırmaq üçün
                nəzərdə tutulmuş müasir bir platformadır.
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-1/2 p-4 lg:p-8">
            <h2 className="text-xl lg:text-3xl font-semibold text-gray-800 text-center mb-4">
              Hesabınıza Daxil Olun
            </h2>
            <CFormProvider methods={methods} onSubmit={handleSubmit}>
              <div className="space-y-4 lg:space-y-6">
                <InputTextField
                  name="email"
                  label="Email"
                  placeholder="abbasovabbas@gmail.com"
                  className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                />

                <InputPasswordField
                  name="password"
                  label="Şifrə"
                  placeholder="Şifrənizi daxil edin"
                  className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                />

                <div className="flex justify-between items-center">
                  {/* TODO: Replace it with custom checkbox input */}
                  {/* <label className="text-sm text-gray-600 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      className="mr-2 rounded border-gray-300 focus:ring-2 focus:ring-blue-400 cursor-pointer"
                    />
                    Məni xatırla
                  </label> */}

                  <InputCheckboxField name="rememeberMe" label="Məni xatırla" />
                  <a
                    // think about if it should be a tag or next/link element, and if it should be blank or not
                    href="/app/forgot-password"
                    className="block w-max text-sm text-blue-500 hover:underline"
                  >
                    Şifrəni unutdunuz?
                  </a>
                </div>

                <div className="mt-4">
                  <input
                    type="submit"
                    value="Daxil ol"
                    className="w-full bg-gradient-to-tl from-blue-500 to-blue-400 text-white font-semibold py-3 px-4 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
                  />
                </div>
              </div>
            </CFormProvider>
          </div>
        </div>
      </div>
    </section>
  );
};
