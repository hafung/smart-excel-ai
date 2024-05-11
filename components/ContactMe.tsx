import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import { SiBuymeacoffee } from "react-icons/si";

const ContactMe = () => {
  return (
    <div className="mx-auto flex flex-row items-center">
      <Link
        href="mailto:zybeuqal@duck.com"
        target="_blank"
        rel="noopener norefferer nofollow"
        className="mx-3 flex max-w-[24px] flex-col items-center justify-center"
      >
        <MdEmail className="text-lg" />
      </Link>
      <Link
        href="https://twitter.com/hafung1987"
        target="_blank"
        rel="noopener norefferer nofollow"
        className="mx-3 flex max-w-[24px] flex-col items-center justify-center"
      >
        <BsTwitterX className="text-lg" />
      </Link>
      <Link
        href="https://buymeacoffee.com/hafung"
        target="_blank"
        rel="noopener norefferer nofollow"
        className="mx-3 flex max-w-[24px] flex-col items-center justify-center"
      >
        <SiBuymeacoffee className="text-lg" />
      </Link>
    </div>
  );
};
export default ContactMe;
