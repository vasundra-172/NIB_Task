import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-16">
      {/* Top Section */}
      <div className="bg-blue-900 text-white text-center py-10 px-4">
        <h2 className="text-3xl font-bold">For any Enquiry Regarding</h2>
        <p className="text-lg mt-2 mx-auto max-w-3xl">
          At Notion Insurance Broker Pvt Ltd, we understand that choosing the
          right insurance can be overwhelming. That's why we make it easy for
          you to connect with experienced insurance agents who are committed to
          finding the best coverage tailored to your needs.
        </p>
        <button className="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg rounded-md">
          Contact Now
        </button>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-100 py-10 w-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5">
          {/* Company Info */}
          <div className="pr-8 flex flex-col items-start justify-start mt-[-10px]">
            <img
              src="https://www.notioninsurance.com/images/broker-logo.png"
              alt="Notion Insurance Broker"
              className="w-32"
            />
            <p className="text-gray-600 mt-2">
              Notion Insurance Broker Pvt. Ltd. delivers customized insurance
              solutions designed to meet the diverse needs of businesses and
              individuals.
            </p>
          </div>

          {/* License Info */}
          <div className="pl-10">
            <h3 className="text-xl font-semibold">Licence</h3>
            <p className="text-gray-600 mt-2">Licence No. 619</p>
            <p className="text-gray-600">Valid till: 02/10/2026</p>
            <p className="text-gray-600">CIN Number - U66010MP2016PTC041677</p>
          </div>

          {/* Quick Links */}
          <div className="pl-10">
            <h3 className="text-xl font-semibold">Our Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Our Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal and Social Links */}
          <div>
            <h3 className="text-xl font-semibold">Legal and Admin Policies</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  FAQ's
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Career
                </a>
              </li>
            </ul>
          </div>
          {/* Social Media Icons */}
          <div className="pl-16">
            <h3 className="text-xl font-semibold">Get In Touch</h3>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <FaLinkedinIn size={22} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <FaInstagram size={22} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <FaTwitter size={22} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <FaYoutube size={22} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <FaFacebookF size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-600 text-white text-center py-4">
        © 2024 Notion Insurance Broker. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
