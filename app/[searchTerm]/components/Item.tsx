import Link from "next/link";
import Image from "next/image";

import noImage from "../../../public/no-image.png";

type Props = {
  result: Result;
};

export default function Item({ result }: Props) {
  const itemTextCol = (
    <div className="flex flex-col justify-center">
      <h2>
        <Link
          href={`https://tr.wikipedia.org/?curid=${result.pageid}`}
          target="_blank"
          className="text-2xl font-bold underline"
        >
          {result.title}
        </Link>
      </h2>
      <p>{result.extract}</p>
    </div>
  );

  const content = result?.thumbnail?.source ? (
    <article className="m-4 max-w-2xl">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col justify-center">
          {
            <Image
              src={result.thumbnail.source || noImage}
              alt={result.title}
              width={100}
              height={100}
              loading="lazy"
            />
          }
        </div>
        {itemTextCol}
      </div>
    </article>
  ) : (
    <article className="m-4 max-w-2xl">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col justify-center">
          {
            <Image
              src={noImage}
              alt={result.title}
              width={100}
              height={100}
              loading="lazy"
            />
          }
        </div>
        {itemTextCol}
      </div>
    </article>
  );

  return content;
}
