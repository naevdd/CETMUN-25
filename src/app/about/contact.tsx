export default function Contact() {
  return (
    <footer id="contact" className="bg-background text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-gradient mb-2">Contact Us</h3>
          <p>Email: <a href="mailto:muncetdlgt@gmail.com" className="text-gradient">muncetdlgt@gmail.com</a></p>
          <p>Phone: <a href="tel:+91 80783 11418" className="text-gradient">+91 80783 11418</a></p>
          <p>Location: Sreekariyam - Kulathoor Rd, Trivandrum</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-gradient mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="#about" className="hover:text-yellow-500">About</a></li>
            <li><a href="#committee" className="hover:text-yellow-500">Committees</a></li>
            <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gradient mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/cetmun25/" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} CET MUN. All rights reserved.
      </div>
    </footer>
  );
}
