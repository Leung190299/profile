const Footer = () => {
  return (
    <footer className="c-space mt-40 pt-3  pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/Leung190299" target="_blank" rel="noopener noreferrer">
          <div className="social-icon">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/lee-leung99" target="_blank" rel="noopener noreferrer">
          <div className="social-icon">
            <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2" />
          </div>
        </a>
        <a href="https://www.facebook.com/le.ung.190299" target="_blank" rel="noopener noreferrer">
          <div className="social-icon">
            <img src="/assets/facebook.svg" alt="facebook" className="w-1/2 h-1/2" />
          </div>
        </a>
        {/* <div className="social-icon">
          <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
        </div>
        <div className="social-icon">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </div> */}
      </div>

      <p className="text-white-500">© 2024 Adrian Hajdin. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
