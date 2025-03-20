import Link from "next/link";

// TODO: extract navItems
// TODO: extract whyUsItems
// TODO: extract keyFeaturesItems
// TODO: extract pricintItems
// TODO: extract faqItems

export const HomeView = () => {
  return (
    <div className="flex flex-col items-center justify-center text-gray-900 bg-gray-50">
      <header className="py-5 w-full bg-gray-50 shadow-md">
        <div className="home_header_inner flex flex-row justify-between items-center w-[85%] lg:w-[70%] mx-auto">
          {/* Logo Placeholder */}
          <div className="text-xl font-bold text-gray-800">CreaTrax</div>

          {/* Navigation Menu */}
          <nav>
            <ul className="flex flex-row items-center gap-6 text-gray-700 font-medium">
              <li className="hover:text-blue-600 transition duration-200 cursor-pointer">
                <a href="#why_us_section">Niyə biz?</a>
              </li>
              <li className="hover:text-blue-600 transition duration-200 cursor-pointer">
                <a href="#pricing_section">Qiymətlər</a>
              </li>
              <li className="hover:text-blue-600 transition duration-200 cursor-pointer">
                <a href="#faq_section">Tez-tez verilən suallar</a>
              </li>
              <li className="hover:text-blue-600 transition duration-200 cursor-pointer">
                <a href="/contact">Əlaqə</a>
              </li>
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
          {[
            {
              title: "Sadələşdirilmiş Sifariş İdarəetməsi",
              desc: "Biznes sifarişlərinizi asanlıqla izləyin, idarə edin və optimallaşdırın.",
            },
            {
              title: "Real Vaxtda Müştəri Analitikası",
              desc: "Müştəri fəaliyyətini, seçimlərini və satışlarını bir platformada izləyin.",
            },
            {
              title: "Avtomatlaşdırılmış Hesabatlar",
              desc: "Biznes inkişafınız üçün güclü analitikalar və hesabatlar yaradın.",
            },
            {
              title: "Təhlükəsiz və Ölçülənən",
              desc: "Məlumatlarınız qorunur və Creatrax biznesiniz böyüdükcə genişlənir.",
            },
            {
              title: "Çoxistifadəçili Əməkdaşlıq",
              desc: "Komandanıza rol əsaslı giriş və əməkdaşlıq vasitələri ilə güc verin.",
            },
            {
              title: "Fərdiləşdirilə bilən Həllər",
              desc: "Portalı unikal biznes ehtiyaclarınıza uyğunlaşdırın.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-sm bg-white"
            >
              <h3 className="text-xl font-semibold text-blue-600">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2">{feature.desc}</p>
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
          <div>
            <span className="text-5xl">10K+</span>
            <p className="text-gray-600 text-sm">İdarə Edilən Müştərilər</p>
          </div>
          <div>
            <span className="text-5xl">50M+</span>
            <p className="text-gray-600 text-sm">Emal Edilmiş Sifarişlər</p>
          </div>
          <div>
            <span className="text-5xl">99.9%</span>
            <p className="text-gray-600 text-sm">Davamlı İşləmə Zəmanəti</p>
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
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {[
            {
              name: "Başlanğıc",
              price: "Pulsuz",
              desc: "Creatrax funksiyalarına əsas giriş.",
            },
            {
              name: "İnkişaf",
              price: "$19/ay",
              desc: "Böyüyən bizneslər üçün qabaqcıl alətlər.",
            },
            {
              name: "Biznes",
              price: "$49/ay",
              desc: "Premium funksiyalara tam giriş.",
            },
            {
              name: "Korporativ",
              price: "Fərdi",
              desc: "Böyük müəssisələr üçün xüsusi həllər.",
            },
          ].map((plan, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg bg-white shadow-md max-w-xs text-center"
            >
              <h3 className="text-2xl font-bold text-blue-600">{plan.name}</h3>
              <p className="text-3xl font-semibold mt-2">{plan.price}</p>
              <p className="text-gray-600 mt-2">{plan.desc}</p>
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
          {[
            {
              question: "Creatrax nədir?",
              answer:
                "Creatrax sifarişləri, müştəriləri və biznes əməliyyatlarını idarə etməyə kömək edən biznes portalıdır.",
            },
            {
              question: "Planımı fərdiləşdirə bilərəmmi?",
              answer:
                "Bəli! Xüsusi ehtiyacları olan bizneslər üçün fərdi qiymət təklif edirik.",
            },
            {
              question: "Başlamaq üçün nə etməliyəm?",
              answer:
                "'Üzv ol' düyməsinə klikləyin və fərdi quraşdırma üçün bizimlə əlaqə saxlayın.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg bg-white shadow-sm"
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-gray-100 py-6 text-center">
        <p className="text-blue-900 text-sm">
          &copy; {new Date().getFullYear()} Creadive. Bütün hüquqlar qorunur.
        </p>
      </footer>
    </div>
  );
};
