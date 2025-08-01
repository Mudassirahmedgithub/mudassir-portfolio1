import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        {/* Name */}
        <h2 className="text-lg font-semibold mb-2">Mudassir Ahmed</h2>

        {/* Contact Info */}
        <p className="text-sm">Email: <a href="mailto:mudassirahmed915171@gmail.com" className="underline">mudassirahmed915171@gmail.com</a></p>
        <p className="text-sm mb-4">Phone: <a href="tel:+918522915171" className="underline">+91 8522915171</a></p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-4">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/mudassir-ahmed" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Image src="/images/linkedin.svg" alt="LinkedIn" width={30} height={30} />
          </a>
          {/* GitHub */}
          <a href="https://github.com/mudassirahmed915171" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Image src="/images/github.svg" alt="GitHub" width={30} height={30} />
          </a>
          {/* WhatsApp */}
          <a href="https://wa.me/918522915171" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <Image src="/images/whatsapp.svg" alt="WhatsApp" width={30} height={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}
