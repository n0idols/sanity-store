const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
          <div className="flex items-center justify-center md:justify-start">
            <a href="/" className="text-2xl font-extrabold  ">
              audiophile
            </a>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
                Contact Us
              </h3>
              <div className="flex items-center mb-2">
                {/* <MailIcon className="h-6 w-6 mr-4" /> */} email
                <a href="mailto:hello@audiophile.com">hello@audiophile.com</a>
              </div>
              <div className="flex items-center">
                {/* <PhoneIcon className="h-6 w-6 mr-4" /> */} phone
                <a href="tel:+1-555-555-5555">+1-555-555-5555</a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com">
                  {/* <FacebookIcon className="h-6 w-6" /> */}fb
                </a>
                <a href="https://twitter.com">
                  {/* <TwitterIcon className="h-6 w-6" /> */}tw
                </a>
                <a href="https://instagram.com">
                  {/* <InstagramIcon className="h-6 w-6" /> */}ig
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
