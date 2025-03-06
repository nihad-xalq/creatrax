"use client"

import { InputTextareaField } from "@/components/form/InputTextareaField";
import { InputTextField } from "@/components/form/InputTextField";
import { CFormProvider } from "@/components/form/CFormProvider";
import { yupResolver } from "@hookform/resolvers/yup";
import { PageTitle } from "@/components/PageTitle";
import { FaPen, FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import * as yup from "yup";

// TODO: change storage logic to API

const schema = yup.object().shape({
    name: yup.string(),
    surname: yup.string(),
    email: yup.string(),
    phone_number: yup.string(),
    organisation: yup.string(),
    position: yup.string(),
    bio: yup.string().optional(),
    profilePic: yup.string().optional(),
});

type FormValues = yup.InferType<typeof schema>;

export const ProfileView = () => {
    const storedData = typeof window !== "undefined" ? sessionStorage.getItem("profileData") : null;
    const parsedData = storedData ? JSON.parse(storedData) : {};

    const [profilePic, setProfilePic] = useState<string | null>(parsedData.profilePic || null);
    const [, setSelectedFile] = useState<File | null>(null);

    const [, setHasData] = useState<boolean>(
        !!(parsedData.name || parsedData.surname || parsedData.email || parsedData.phone_number || parsedData.organisation || parsedData.position || parsedData.bio || parsedData.profilePic)
    );

    const router = useRouter()

    const methods = useForm<FormValues>({
        resolver: yupResolver(schema),
        defaultValues: {
            name: parsedData.name || "",
            surname: parsedData.surname || "",
            email: parsedData.email || "",
            phone_number: parsedData.phone_number || "",
            organisation: parsedData.organisation || "",
            position: parsedData.position || "",
            bio: parsedData.bio || "",
            profilePic: parsedData.profilePic || "",
        },
    });

    const { isDirty } = methods.formState;

    const handleProfilePicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageUrl = e.target?.result as string;
                setProfilePic(imageUrl);
                methods.setValue("profilePic", imageUrl, { shouldDirty: true });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDeleteProfilePic = () => {
        setProfilePic(null);
        methods.setValue("profilePic", "", { shouldDirty: true });
        sessionStorage.removeItem("profilePic");

        console.log("Profile picture removed");
    };

    const handleClearData = () => {
        sessionStorage.removeItem("profileData");
        setProfilePic(null);

        methods.reset({
            name: "",
            surname: "",
            email: "",
            phone_number: "",
            organisation: "",
            position: "",
            bio: "",
            profilePic: "",
        });

        setHasData(false);
    };

    const handleSubmit = (formData: FormValues) => {
        const updatedData = {
            ...formData,
            profilePic: profilePic || "",
        };

        sessionStorage.setItem("profileData", JSON.stringify(updatedData));
        setHasData(true);

        methods.reset(updatedData);

        router.refresh();
    };

    return (
        <section className="flex flex-col lg:flex-row justify-center gap-10">
            {/* Left Side - Profile Form */}
            <div className="w-full lg:w-full">
                <PageTitle title="Mənim Profilim" />

                <CFormProvider methods={methods} onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row items-center justify-between gap-3">
                            <header className="profile_header flex flex-col lg:flex-row gap-6 self-start w-full lg:w-max items-center border border-gray-200 rounded-[12px] px-8 py-4 shadow-md">
                                {/* Profile Picture Upload */}
                                <div className="flex flex-col items-center gap-2 my-4">
                                    <div className="w-40 h-40 bg-gray-200 rounded-full relative group overflow-hidden">
                                        {profilePic ? (
                                            <Image
                                                src={profilePic}
                                                alt="Profile Preview"
                                                width={0}
                                                height={0}
                                                className="w-full h-full rounded-full object-contain"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-500 text-base lg:text-sm">
                                                Şəkil yoxdur
                                            </div>
                                        )}
                                        <label
                                            htmlFor="profilePic"
                                            className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white cursor-pointer transition"
                                        >
                                            <input
                                                type="file"
                                                id="profilePic"
                                                className="hidden"
                                                accept="image/*"
                                                onChange={handleProfilePicChange}
                                            />

                                            <div className="flex gap-4">
                                                <label htmlFor="profilePic" className="cursor-pointer text-blue-500 hover:underline">
                                                    <FaPen />
                                                </label>
                                                {profilePic && (
                                                    <button
                                                        type="button"
                                                        onClick={handleDeleteProfilePic}
                                                        className="text-red-500 hover:underline"
                                                    >
                                                        <FaTrash />
                                                    </button>
                                                )}
                                            </div>
                                        </label>
                                    </div>

                                </div>

                                <div className="self-center flex flex-col">
                                    <h1 className="text-3xl font-semibold text-slate-800 italic text-center lg:text-left">
                                        {parsedData?.name || ""} {parsedData?.surname || ""}
                                    </h1>
                                    <h1 className="text-lg text-blue-950 font-medium italic flex flex-col items-start gap-0 uppercase text-center lg:text-left">
                                        {parsedData?.position || ""}
                                        <span className="text-sm text-gray-400 font-light capitalize">{parsedData?.organisation || ""}</span>
                                    </h1>

                                </div>
                            </header>

                            <div className="personal_infos_wrapper border border-gray-200 rounded-[12px] p-4 w-[65%] shadow-md grid gap-3">
                                {/* Input Fields */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
                                    <InputTextField name="name" label="Ad" placeholder="Abchdfd" />
                                    <InputTextField name="surname" label="Soyad" placeholder="Abchdfd" />
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
                                    <InputTextField name="email" label="Email" placeholder="test@gmail.com" />
                                    <InputTextField name="phone_number" label="Telefon" placeholder="000 000 00 00" />
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
                                    <InputTextField name="organisation" label="Şirkət" placeholder="XXX LLC" />
                                    <InputTextField name="position" label="Vəzifə" placeholder="Abcbhscb" />
                                </div>

                                <div className="w-full">
                                    <InputTextareaField name="bio" label="Haqqında" placeholder="Write something about yourself" />
                                </div>

                                <div className="grid grid-cols-2 items-center gap-3 w-full lg:w-max">
                                    {/* Save Button */}
                                    <input
                                        type="submit"
                                        value="Save"
                                        disabled={!isDirty}
                                        className={`w-full lg:w-full self-end py-4 px-4 lg:py-2 lg:px-4 rounded-[12px] transition duration-150 cursor-pointer
                                        ${isDirty ? "bg-green-500 hover:bg-green-600 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
                                    />

                                    <button
                                        type="button"
                                        onClick={handleClearData}
                                        className="block self-end text-red-500 hover:underline rounded-[12px] py-4 px-4 lg:py-2 lg:px-4"
                                    >
                                        Clear Data
                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>
                </CFormProvider>
            </div>

            {/* Right Side - Additional Section */}
            {/* <div className="hidden lg:flex lg:w-1/2 flex-col items-center justify-center p-6 bg-gray-50 rounded-xl shadow-md">
                <h2 className="text-lg font-semibold">Profil haqqında məlumat</h2>
                <p className="text-sm text-gray-600 mt-2">Burada profil məlumatlarınızı idarə edə və şəxsi məlumatlarınızı yeniləyə bilərsiniz.</p>
                <Image width={0} height={0} sizes="100vw" src="/undraw_pic-profile_nr49.svg" alt="Profile Illustration" className="w-40 mt-4" />
            </div> */}
        </section>
    );
}