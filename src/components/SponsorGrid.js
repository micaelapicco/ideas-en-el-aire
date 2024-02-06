import Link from "next/link";
import Image from "next/image";

const SponsorItem = ({ sponsor }) => {
  return (
    <article key={index}>
      {sponsors.map((sponsor, index) => {
        <div key={index}>
          <Link href={sponsor.link}>
            <Image
              src={sponsor.image}
              alt={sponsor.title}
              width={100}
              height={100}
            />
          </Link>
        </div>;
      })}
    </article>
  );
};

export default SponsorItem;
