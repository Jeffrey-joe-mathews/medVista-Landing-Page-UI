import { platformLinks, communityLinks } from "../constants";
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700" id="contact" >
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 text-center">
        <div>
          <h3 className="text-md font-semibold mb-4">Get in Touch</h3>
          <ul className="space-y-2">
            <li>
              <input type="text" placeholder="Enter your Name" className="text-center rounded-xl w-60"/>
            </li>
            <li>
              <input type="text" placeholder="Enter your Email" className="text-center rounded-xl w-60" />
            </li>
            <li>
            <textarea name="" id="" placeholder="Enter your Query" className="text-center rounded-xl w-60" ></textarea>
            </li>
          </ul>
          <button>SUBMIT</button>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Links</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
  <h3 className="text-md font-semibold mb-4">Contact Us</h3>
  <ul className="space-y-2">
    <div className="flex justify-center">
      <img src={logo} className="w-20" alt="Logo" />
    </div>
    <li>Phone : xxxxxxxxxx</li>
    <li>Phone : xxxxxxxxxx</li>
    <li>Email : abc@gmail.com</li>
  </ul>
</div>

      </div>
    </footer>
  );
};

export default Footer;
