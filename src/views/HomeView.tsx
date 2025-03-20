import Image from "next/image";
import Link from "next/link";

interface NavItem {
  id: number;
  title: string;
  url: string;
}
const navItems: NavItem[] = [
  { id: 1, title: "Niyə biz?", url: "#why_us_section" },
  { id: 2, title: "Qiymətlər", url: "#pricing_section" },
  { id: 3, title: "Tez-tez verilən suallar", url: "#faq_section" },
  { id: 4, title: "Əlaqə", url: "/contact" },
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
    price: "Pulsuz",
    desc: "Creatrax funksiyalarına əsas giriş.",
  },
  {
    id: 2,
    name: "İnkişaf",
    price: "$19/ay",
    desc: "Böyüyən bizneslər üçün qabaqcıl alətlər.",
  },
  {
    id: 3,
    name: "Biznes",
    price: "$49/ay",
    desc: "Premium funksiyalara tam giriş.",
  },
  {
    id: 4,
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
  return (
    <div className="flex flex-col items-center justify-center text-gray-900 bg-gray-50">
      <header className="py-3 w-full bg-gray-50 shadow-md">
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

          {/* Navigation Menu */}
          <nav>
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
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition">
              Üzv ol
            </button>
          </Link>
          <Link href="/login">
            <button className="border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-lg text-lg font-semibold transition">
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
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {pricingItems.map(({ id, name, price, desc }) => (
            <div
              key={id}
              className="p-6 border rounded-lg bg-white shadow-md max-w-xs text-center"
            >
              <h3 className="text-2xl font-bold text-blue-600">{name}</h3>
              <p className="text-3xl font-semibold mt-2">{price}</p>
              <p className="text-gray-600 mt-2">{desc}</p>
              <Link href="/contact">
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-lg font-semibold transition">
                  Üzv ol
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq_section" className="w-full max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center">
          Tez-tez verilən suallar
        </h2>
        <div className="mt-8 space-y-6">
          {faqItems.map(({ id, question, answer }) => (
            <div key={id} className="p-4 border rounded-lg bg-white shadow-sm">
              <h3 className="text-lg font-semibold">{question}</h3>
              <p className="text-gray-600 mt-2">{answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-gray-100 py-6 text-center">
        <p className="text-blue-900 text-xs">&copy; {copyrights_text}</p>
      </footer>
    </div>
  );
};
