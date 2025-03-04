"use client"

import { CFormProvider } from "@/components/form/CFormProvider";
import { yupResolver } from "@hookform/resolvers/yup";
import { PageTitle } from "@/components/PageTitle";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { InputTextField } from "@/components/form/InputTextField";

const schema = yup.object().shape({
    name: yup.string().required("Bu xana vacibdir"),
    surname: yup.string().required("Bu xana vacibdir"),
    email: yup.string().required("Bu xana vacibdir"),
    phone_number: yup.string().required("Bu xana vacibdir"),
    message: yup.string().required("Bu xana vacibdir"),
    organisation: yup.string().required("Bu xana vacibdir"),
});

type FormValues = yup.InferType<typeof schema>;

export const ProfileView = () => {

    const methods = useForm<FormValues>({
        resolver: yupResolver(schema),
    });

    const handleSubmit = (formData: FormValues) => {
        console.log(formData)
    }

    return (
        <section>
            <div className="about_inner">
                <PageTitle title="Mənim Profilim" />

                <div className="w-1/4">
                    <CFormProvider methods={methods} onSubmit={handleSubmit}>
                        <InputTextField name="name" label="Adiniz" placeholder="Abchdfd" />
                        <InputTextField name="surname" label="Soyadiniz" placeholder="Abchdfd" />
                        <InputTextField name="email" label="Email" placeholder="test@gmail.com" />
                        <InputTextField name="phone_number" label="Telefon" placeholder="000 000 00 00" />
                        <InputTextField name="organisation" label="Sirket" placeholder="XXX LLC" />
                    </CFormProvider>
                </div>
            </div>
        </section>
    )
}