import logo from "../assets/logo.png";
import { facebook, instagram, twitter } from "../helpers/icon";
const Footer = () => {
  const data = ["Terms & Conditions", "Privacy Policy", " Cookies"];
  const icon = [facebook, instagram, twitter];
  return (
    <footer className="bg-gray-50 px-5">
      <div className="border-b border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between pb-4">
        <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
          {data.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="text-[#4B7755] transition hover:opacity-75"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
          {icon.map((item, index) => (
            <li key={index}>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-center text-sm text-[#4B7755] sm:text-right py-4">
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
