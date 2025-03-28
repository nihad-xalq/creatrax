"use client";

import { InputTextareaField } from "@/components/form/InputTextareaField";
import { InputTextField } from "@/components/form/InputTextField";
import { CFormProvider } from "@/components/form/CFormProvider";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiMenu, FiX } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as yup from "yup";

const schema = yup.object().shape({
  fullname: yup.string().required("Bu xana vacibdir"),
  companyName: yup.string().required("Bu xana vacibdir"),
  email: yup.string().required("Bu xana vacibdir"),
  message: yup.string().optional(),
});

type FormValues = yup.InferType<typeof schema>;

interface NavItem {
  id: number;
  title: string;
  url: string;
}
const navItems: NavItem[] = [
  { id: 1, title: "Niyə biz?", url: "#why_us_section" },
  { id: 2, title: "Qiymətlər", url: "#pricing_section" },
  { id: 3, title: "Tez-tez verilən suallar", url: "#faq_section" },
  { id: 4, title: "Əlaqə", url: "#contact_cta_section" },
];

interface WhyUsItem {
  id: number;
  title: string;
  desc: string;
}
const whyUsItems: WhyUsItem[] = [
  {
    id: 1,
    title: "Sadələşdirilmiş Sifariş İdarəetməsi",
    desc: "Biznes sifarişlərinizi asanlıqla izləyin, idarə edin və optimallaşdırın.",
  },
  {
    id: 2,
    title: "Real Vaxtda Müştəri Analitikası",
    desc: "Müştəri fəaliyyətini, seçimlərini və satışlarını bir platformada izləyin.",
  },
  {
    id: 3,
    title: "Avtomatlaşdırılmış Hesabatlar",
    desc: "Biznes inkişafınız üçün güclü analitikalar və hesabatlar yaradın.",
  },
  {
    id: 4,
    title: "Təhlükəsiz və Ölçülənən",
    desc: "Məlumatlarınız qorunur və Creatrax biznesiniz böyüdükcə genişlənir.",
  },
  {
    id: 5,
    title: "Çoxistifadəçili Əməkdaşlıq",
    desc: "Komandanıza rol əsaslı giriş və əməkdaşlıq vasitələri ilə güc verin.",
  },
  {
    id: 6,
    title: "Fərdiləşdirilə bilən Həllər",
    desc: "Portalı unikal biznes ehtiyaclarınıza uyğunlaşdırın.",
  },
];

interface KeyIndicatorItem {
  id: number;
  value: string;
  label: string;
}
const keyIndicatorItems: KeyIndicatorItem[] = [
  {
    id: 1,
    value: "10K+",
    label: "İdarə Edilən Müştərilər",
  },
  {
    id: 2,
    value: "50M+",
    label: "Emal Edilmiş Sifarişlər",
  },
  {
    id: 3,
    value: "99.9%",
    label: "Davamlı İşləmə Zəmanəti",
  },
];

interface PricingItem {
  id: number;
  name: string;
  price: string;
  desc: string;
}
const pricingItems: PricingItem[] = [
  {
    id: 1,
    name: "Başlanğıc",
    price: "₼19/ay",
    desc: "Böyüyən bizneslər üçün qabaqcıl alətlər.",
  },
  {
    id: 2,
    name: "Biznes",
    price: "₼49/ay",
    desc: "Premium funksiyalara tam giriş.",
  },
  {
    id: 3,
    name: "Korporativ",
    price: "Fərdi",
    desc: "Böyük müəssisələr üçün xüsusi həllər.",
  },
];

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}
const faqItems: FaqItem[] = [
  {
    id: 1,
    question: "Creatrax nədir?",
    answer:
      "Creatrax sifarişləri, müştəriləri və biznes əməliyyatlarını idarə etməyə kömək edən biznes portalıdır.",
  },
  {
    id: 2,
    question: "Planımı fərdiləşdirə bilərəmmi?",
    answer:
      "Bəli! Xüsusi ehtiyacları olan bizneslər üçün fərdi qiymət təklif edirik.",
  },
  {
    id: 3,
    question: "Başlamaq üçün nə etməliyəm?",
    answer:
      "'Üzv ol' düyməsinə klikləyin və fərdi quraşdırma üçün bizimlə əlaqə saxlayın.",
  },
];

const copyrights_text = `${new Date().getFullYear()} Creadive. Bütün hüquqlar qorunur.`;

export const HomeView = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean | null>(false);

  const methods = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleSubmit = (formData: FormValues) => {
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center text-gray-900 bg-gray-50">
      <header className="py-3 w-full bg-gray-50 shadow-md relative">
        <div className="home_header_inner flex flex-row justify-between items-center w-[85%] lg:w-[70%] mx-auto">
          {/* Logo */}
          <div>
            <Image
              src="/old-logo.svg"
              alt="Creatrax Logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[50%] h-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex flex-row items-center gap-6 text-gray-700 font-medium">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className="hover:text-blue-600 transition duration-200 cursor-pointer"
                >
                  <a href={item.url}>{item.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Burger Button */}
        <button
          className="absolute top-5 right-5 md:hidden text-2xl text-gray-800 z-[60]"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Mobile Sliding Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col gap-6 p-6 pt-20">
            {navItems.map(({ id, title, url }) => (
              <a
                key={id}
                href={url}
                className="text-gray-800 hover:text-blue-600 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {title}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <div className="w-full py-20 px-6 text-center bg-blue-50">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Creatrax –{" "}
          <span className="text-blue-600">
            Biznesinizi Asanlıqla İdarə Edin
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-4">
          İş axınınızı, sifarişlərinizi və müştəri idarəetmənizi asanlaşdırmaq
          üçün güclü, intuitiv portal.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          {/* <Link href="/contact"> */}
          <Link href="#pricing_section">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition w-full md:w-max">
              Üzv ol
            </button>
          </Link>
          <Link href="/login">
            <button className="border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-lg text-lg font-semibold transition w-full md:w-max">
              Daxil ol
            </button>
          </Link>
        </div>
      </div>

      {/* KEY FEATURES */}
      <section id="why_us_section" className="w-full max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center">
          Niyə Creatrax-i seçməlisiniz?
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {whyUsItems.map(({ id, title, desc }) => (
            <div key={id} className="p-6 border rounded-lg shadow-sm bg-white">
              <h3 className="text-xl font-semibold text-blue-600">{title}</h3>
              <p className="text-gray-600 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDICATORS & METRICS */}
      <section className="w-full bg-blue-50 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Dünya Biznesləri tərəfindən Etibar Edilir
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-10 text-blue-600 font-bold text-4xl">
          {keyIndicatorItems.map(({ id, value, label }) => (
            <div key={id} className="text-center">
              <span className="text-5xl">{value}</span>
              <p className="text-gray-600 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING & CTA SECTION */}
      <section
        id="pricing_section"
        className="w-full max-w-6xl px-6 py-16 text-center"
      >
        <h2 className="text-3xl font-bold">Creatrax-dən istifadəyə Başla</h2>
        <p className="text-gray-600 mt-4">
          Sizə uyğun planı seçin və biznesinizi növbəti səviyyəyə aparın.
        </p>
        <ul className="mt-10 flex flex-wrap justify-center gap-2">
          {pricingItems.map(({ id, name, price, desc }) => (
            <li
              key={id}
              className="p-6 border rounded-lg bg-white shadow-md max-w-max md:max-w-xs text-center"
            >
              <h3 className="text-2xl font-bold text-blue-600">{name}</h3>
              <p className="text-3xl font-semibold mt-2">{price}</p>
              <p className="text-gray-600 mt-2">{desc}</p>
              <Link href="/contact">
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-lg font-semibold transition w-full md:w-max">
                  Üzv ol
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ SECTION */}
      <section id="faq_section" className="w-full max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center">
          Tez-tez verilən suallar
        </h2>
        <div className="mt-8 flex flex-col gap-2">
          {faqItems.map(({ id, question, answer }) => (
            <div key={id} className="p-4 border rounded-lg bg-white shadow-sm">
              <h3 className="text-lg font-semibold">{question}</h3>
              <p className="text-gray-600 mt-2">{answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT US SECTION */}
      <section className="w-full max-w-4xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Əlaqə saxla</h2>
        <p className="text-gray-600 mt-4 mb-4 max-w-xl mx-auto">
          Creatrax ilə bağlı ətraflı məlumat almaq, qiymət təklifi və əməkdaşlıq
          üçün bizimlə əlaqə saxlayın.
        </p>

        {/* className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-left" */}
        <div className="w-full md:w-2/3 mx-auto">
          <CFormProvider onSubmit={handleSubmit} methods={methods}>
            <div className="contact_form_wrapper flex flex-col items-center gap-3">
              <InputTextField placeholder="Ad və Soyad" name="fullname" />
              <InputTextField placeholder="Şirkət adı" name="companyName" />
              <InputTextField placeholder="Email ünvanı" name="email" />
              <InputTextareaField placeholder="Qeydləriniz" name="message" />

              <div className="md:col-span-2 w-full md:w-max">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
                >
                  Müraciət et
                </button>
              </div>
            </div>
          </CFormProvider>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-gray-100 py-6 text-center">
        <p className="text-blue-900 text-xs">&copy; {copyrights_text}</p>
      </footer>
    </div>
  );
};
