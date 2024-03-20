import Pdf from '../../assets/MohamedBenomar.pdf';

function Footer() {
  return (
    <ul className="flex pb-8 md:hidden justify-between">
      <li>
        <a href="https://github.com/Phfyx" className="flex ml-8">
          <img
            src="/static/LogoGitHub.png"
            alt="Logo GitHub"
            className="w-10"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/mohamedbenomar/"
          className="flex ml-8"
        >
          <img
            src="/static/Linkedinlogo.png"
            alt="Logo LinkedIn"
            className="w-10"
          />
        </a>
      </li>
      <li>
        <a href={Pdf} className="flex ml-8">
          <img src="/static/Cvlogo.png" alt="Logo CV" className="w-10" />
        </a>
      </li>
    </ul>
  );
}

export default Footer;