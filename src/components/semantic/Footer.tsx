import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
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
    title: "Xidmətlər",
    href: "/services",
  },
  {
    title: "Bizimlə əlaqə",
    href: "/contact",
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
];

const socialMediaAccounts: SocialMediaAccounts[] = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    icon: <FaFacebook className="w-5 h-5" />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: <FaInstagram className="w-5 h-5" />,
  },
  {
    name: "Twitter",
    url: "https://www.twitter.com/",
    icon: <FaX className="w-5 h-5" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    icon: <FaLinkedin className="w-5 h-5" />,
  },
];

export const Footer = () => {
  const fullYear: number = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white pt-12 pb-4">
      <div className="footer_inner myContainer mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
                  <li key={index} className="text-sm text-gray-300 font-light">
                    <Link href={data.href}>
                      {data.title}: {data.value}
                    </Link>
                  </li>
                );
              })}

              <li className="text-sm text-gray-300 font-light mt-3">
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
          {fullYear} Creadive &copy; Bütün hüquqlar qorunur.
        </div>
      </div>
    </footer>
  );
};
