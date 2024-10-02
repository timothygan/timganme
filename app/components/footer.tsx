import { FiGithub, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi';
import { TbBallVolleyball } from 'react-icons/tb';

export default function Footer() {
  return (
    <footer>
        <div className={`py-8 px-4 flex justify-center items-center text-md` }>
          <Socials/>
        </div>
    </footer>
  );
}


function Socials() {
  return (
    <div className="flex gap-x-4 text-black">
      <a
        href="https://www.linkedin.com/in/timothy-herng-yih-gan-b8b5b714b"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiLinkedin className="logo logo-enlarge" />
      </a>
      <a
        href="https://github.com/timothygan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiGithub className="logo logo-enlarge" />
      </a>
      <a
        href="https://www.youtube.com/@moomoocowtimmy2905"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TbBallVolleyball className=" logo logo-enlarge" />
      </a>
      <a
        href="https://www.youtube.com/@timothygan2916"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiYoutube className="logo logo-enlarge" />
      </a>
      <a
        href="https://www.instagram.com/timhygan/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiInstagram className=" logo logo-enlarge" />
      </a>
    </div>
  );
}