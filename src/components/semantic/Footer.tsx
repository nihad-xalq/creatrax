import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { JSX } from "react";

interface SocialMediaAccounts {
  name: string;
  url: string;
  icon: JSX.Element;
}

interface ContactDatas {
  title: string;
  value: string;
  href: string;
}

interface QuickLinks {
  title: string;
  href: string;
}

const quickLinks: QuickLinks[] = [
  {
    title: "Əsas səhifə",
    href: "/",
  },
  {
    title: "Haqqımızda",
    href: "/about",
  },
  {
    title: "Bizimlə əlaqə",
    href: "/contact",
  },
  {
    title: "İstifadə Bələdçisi",
    href: "/guide",
  },
  {
    title: "Məxfilik Siyasəti",
    href: "/privacy-policy",
  },
];

const contactDatas: ContactDatas[] = [
  {
    title: "Telefon",
    value: "+994 10 531 99 87",
    href: "tel:+994105319987",
  },
  {
    title: "Email",
    value: "info@creadive.az",
    href: "mailto:info@creadive.az",
  },
  {
    title: "Address",
    value: "Baku, Azerbaijan",
    href: "https://maps.app.goo.gl/Auq3Whto3PBHawdc7",
  },
];

const socialMediaAccounts: SocialMediaAccounts[] = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/creadive.az",
    icon: <FaFacebook className="w-5 h-5" />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/creadive.az",
    icon: <FaInstagram className="w-5 h-5" />,
  },
  {
    name: "X",
    url: "https://x.com/creadive_az",
    icon: <FaXTwitter className="w-5 h-5" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/creadive-az",
    icon: <FaLinkedin className="w-5 h-5" />,
  },
];

export const Footer = () => {
  const fullYear: number = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white pt-12 pb-4">
      <div className="footer_inner myContainer mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-6">
          {/* Column 1: About Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Haqqımızda</h2>
            <p className="text-sm text-gray-300 font-light">
              Biznesinizin inkişafına kömək edən innovativ həllər təqdim edirik!
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Qısa yollar</h2>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => {
                return (
                  <li
                    key={index}
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    <Link href={link.href}>{link.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Bizimlə əlaqə</h2>
            <ul className="flex flex-col gap-1">
              {contactDatas.map((data, index) => {
                return (
                  <li key={index} className="text-xs text-gray-300 font-light">
                    {data.title}: <Link href={data.href}>{data.value}</Link>
                  </li>
                );
              })}

              <li className="text-sm text-gray-300 font-light mt-6">
                <div className="grid grid-cols-4 gap-3 w-max">
                  {socialMediaAccounts.map((social, index) => {
                    return (
                      <Link key={index} href={social.url} title={social.name}>
                        {social.icon}
                      </Link>
                    );
                  })}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
          {fullYear}{" "}
          <Link
            href="https://creadive.az"
            target="_blank"
            title="Creadive Agency official website"
          >
            Creadive
          </Link>{" "}
          &copy; Bütün hüquqlar qorunur.
        </div>
      </div>
    </footer>
  );
};
