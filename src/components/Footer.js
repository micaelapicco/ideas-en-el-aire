import Image from "next/image";
import { Coffee, Facebook, Twitter, Instagram } from "./Icons";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between p-8">
      <div>
        <h3 className="uppercase">Contacto</h3>
        <p>mensajeroradioquilpo@gmail.com</p>
        <p>(03549) 475474</p>
      </div>

      <div className="text-center">
        <Image
          className="mx-auto"
          src="/logo.svg"
          alt="Ideas en el Aire"
          width={32}
          height={32}
        />
        <p className="mt-2">@ 2024 Ideas en el aire</p>
      </div>

      <ul className="flex space-x-5">
        <li>
          <Coffee />
        </li>
        <li>
          <Facebook />
        </li>
        <li>
          <Twitter />
        </li>
        <li>
          <Instagram />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
