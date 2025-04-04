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
import { motion, AnimatePresence } from "framer-motion";

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
  features: string[];
}
const pricingItems: PricingItem[] = [
  {
    id: 1,
    name: "Başlanğıc",
    price: "₼19",
    desc: "Böyüyən bizneslər üçün qabaqcıl alətlər.",
    features: [
      "Access to basic features",
      "Basic reporting and analytics",
      "Up to 10 individual users",
      "10GB individual data each user",
      "Basic chat and email support",
    ],
  },
  {
    id: 2,
    name: "Biznes",
    price: "₼49",
    desc: "Premium funksiyalara tam giriş.",
    features: [
      "Access to basic features",
      "Basic reporting and analytics",
      "Up to 10 individual users",
      "10GB individual data each user",
      "Basic chat and email support",
    ],
  },
  {
    id: 3,
    name: "Korporativ",
    price: "Fərdi",
    desc: "Böyük müəssisələr üçün xüsusi həllər.",
    features: [
      "Access to basic features",
      "Basic reporting and analytics",
      "Up to 10 individual users",
      "10GB individual data each user",
      "Basic chat and email support",
    ],
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

interface TestimonialItem {
  id: number;
  companyLogo: string;
  companyName: string;
}

const testimonialItems: TestimonialItem[] = [
  {
    id: 1,
    companyLogo: "/old-logo.svg",
    companyName: "Company One",
  },
  {
    id: 2,
    companyLogo: "/old-logo.svg",
    companyName: "Company Two",
  },
  {
    id: 3,
    companyLogo: "/old-logo.svg",
    companyName: "Company Three",
  },
  {
    id: 4,
    companyLogo: "/old-logo.svg",
    companyName: "Company Four",
  },
  {
    id: 5,
    companyLogo: "/old-logo.svg",
    companyName: "Company Five",
  },
];

const copyrights_text = `${new Date().getFullYear()} Creadive. Bütün hüquqlar qorunur.`;

interface ExpandedState {
  [key: number]: boolean;
}

export const HomeView = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean | null>(false);
  const [expandedFaqs, setExpandedFaqs] = useState<ExpandedState>({});

  const methods = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  // const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleSubmit = (formData: FormValues) => {
    console.log(formData);
  };

  const toggleFaq = (id: number) => {
    setExpandedFaqs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center text-gray-900 bg-gray-50">
      <header className="py-3 w-full bg-[rgba(255,255,255,1)] shadow-md relative">
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* <Link href="/contact"> */}
            <Link href="#pricing_section">
              <button className="bg-[rgba(244,244,244,1)] hover:bg-[#e2e2e2] text-[rgba(34,34,34,1)] px-8 py-2.5 rounded-lg text-sm font-semibold transition w-full md:w-max">
                Üzv ol
              </button>
            </Link>
            <Link href="/login">
              <button className="border bg-[rgba(34,34,34,1)] hover:bg-[rgba(34,34,34,1)] px-8 py-2.5 rounded-lg text-[rgba(255,255,255,1)] text-sm font-semibold transition w-full md:w-max">
                Daxil ol
              </button>
            </Link>
          </div>
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
          className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
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
      <div className="w-full py-20 px-6 text-center flex flex-col items-center gap-3">
        <span className="text-sm text-[rgba(16,137,41,1)]">
          Built for Growing Businesses
        </span>
        <h1 className="text-4xl md:text-5xl text-gray-900 font-normal tracking-wide max-w-3xl mx-auto">
          Manage Everything in One Intuitive Dashboard
        </h1>
        <p className="text-lg md:text-sm text-gray-600 font-normal mt-4">
          Control workflows, track orders, and manage customer data through a
          sleek and simple interface.
        </p>
      </div>

      {/* TESTIMONIALS SECTION */}
      <section className="w-full py-16 px-6">
        <h2 className="text-xl text-gray-900 text-center mb-12">
          Hundreds of startups have already saved thousands of hours
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-16 max-w-4xl mx-auto">
          {testimonialItems.map(({ id, companyLogo, companyName }) => (
            <Image
              key={id}
              src={companyLogo}
              alt={`${companyName} Logo`}
              width={120}
              height={30}
            // className="opacity-60 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </section>

      {/* MAIN HERO SECTION */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-6">
            <span className="text-sm text-[#108929]">Built for Growing Businesses</span>
            <h2 className="text-4xl font-medium text-gray-900">
              Manage Everything in One Intuitive Dashboard
            </h2>
            <p className="text-gray-600">
              Control workflows, track orders, and manage customer data through a sleek and simple interface.
            </p>
            <div>
              <button className="bg-[rgba(244,244,244,1)] text-black px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#c5c5c5] transition-colors">
                Learn more
              </button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg h-[400px]">
            {/* Placeholder for dashboard image/screenshot */}
          </div>
        </div>
      </section>

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
      <section className="w-full bg-[rgba(34,34,34,1)] py-16 text-center">
        <div className="indicators_inner w-[80%] mx-auto flex flex-row justify-between items-center gap-3">
          <div className="text-white">
            <div className="flex flex-col items-start gap-2 w-[60%]">
              <h2 className="text-3xl font-bold text-left">
                Dünya Biznesləri tərəfindən Etibar Edilir
              </h2>
              <p className="text-left">
                Control workflows, track orders, and manage customer data
                through a sleek and simple interface.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-white">
            {keyIndicatorItems.map(({ id, value, label }) => (
              <div
                key={id}
                className="text-center flex flex-col items-start gap-2"
              >
                <span className="text-5xl font-medium">{value}</span>
                <p className="text-sm">{label}</p>
              </div>
            ))}
          </div>
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
        <ul className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-2">
          {pricingItems.map(({ id, name, price, desc, features }) => (
            <li
              key={id}
              className="relative p-6 border rounded-lg bg-white shadow-md w-full text-center"
            >
              {/* #TODO: change this check */}
              {id === 2 && (
                <div className="ribbon absolute -top-4 left-1/2 right-1/2 w-max -translate-x-1/2 bg-[rgba(204,228,227,1)] text-[rgba(1,162,156,1)] text-xs py-2 px-3 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg text-left font-semibold text-slate-900 mb-8">
                {name}
              </h3>
              <div className="flex flex-col items-start gap-2">
                <span className="text-sm font-medium">Starts at</span>
                <p>
                  <span className="text-3xl font-medium mr-1">{price}</span>{" "}
                  <span className="text-sm">per user / per month</span>
                </p>
                <p className="text-xs text-left">{desc}</p>
              </div>
              <Link href="/contact">
                <button className="mt-4 bg-[rgba(34,34,34,1)] hover:scale-105 text-white px-5 py-2 rounded-lg font-semibold transition w-full md:w-full">
                  Let&apos;s start
                </button>
              </Link>
              <div className="mt-3 flex flex-col items-start gap-3">
                <span className="text-xs mt-5 mb-3">What&apos;s included</span>
                <ul className="list-disc pl-6 flex flex-col gap-1">
                  {features.map((feature, index) => (
                    <li key={index} className="text-xs text-left font-medium">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ SECTION */}
      <section id="faq_section" className="w-full px-6 py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-medium text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="mt-8 flex flex-col gap-2 max-w-3xl mx-auto">
            {faqItems.map(({ id, question, answer }) => (
              <motion.div
                key={id}
                className="bg-[rgb(249,249,249)] rounded-lg"
                onClick={() => toggleFaq(id)}
                initial={false}
              >
                <div className="flex justify-between items-center py-4 px-6 cursor-pointer">
                  <h3 className="text-base font-medium text-gray-900">{question}</h3>
                  <motion.button
                    className="flex-shrink-0 ml-4 w-10 h-8 rounded-lg bg-[rgba(34,34,34,1)] flex items-center justify-center"
                    aria-expanded={expandedFaqs[id]}
                    initial={false}
                    // animate={{ rotate: expandedFaqs[id] ? 45 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </motion.button>
                </div>
                <AnimatePresence initial={false}>
                  {expandedFaqs[id] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-base text-gray-600">
                        {answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
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
