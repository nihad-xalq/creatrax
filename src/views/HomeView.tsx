"use client";

import { InputTextField } from "@/components/form/InputTextField";
import { CFormProvider } from "@/components/form/CFormProvider";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useRouter } from "next/navigation";

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
    // methods.reset();
    console.log(formData);
    router.push("/orders");
  };
  return (
    <section className="py-5">
      <div className="home_inner flex flex-col items-center gap-12">
        <div className="home-top_content flex flex-col items-center justify-center gap-3">
          <h1 className="text-5xl text-center font-semibold">
            Welcome to CreaTrax!
          </h1>
          <p className="text-md text-center font-normal w-full lg:w-3/4 mx-auto">
            CreaTrax is a modern, user-friendly inventory management system
            designed to help small businesses streamline their operations.
          </p>
        </div>

        <div className="form_container border border-gray-300 p-3 rounded-lg w-full lg:w-1/4 mx-auto">
          <CFormProvider methods={methods} onSubmit={handleSubmit}>
            <div className="space-y-4">
              <InputTextField
                name="email"
                label="Email"
                placeholder="abbasovabbas@gmail.com"
              />

              <InputTextField
                name="password"
                label="Şifrə"
                placeholder="Şifrənizi daxil edin"
              />

              <div className="flex flex-row justify-center items-center">
                <input
                  type="submit"
                  value="Göndər"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                />
              </div>
            </div>
          </CFormProvider>
        </div>
      </div>
    </section>
  );
};
