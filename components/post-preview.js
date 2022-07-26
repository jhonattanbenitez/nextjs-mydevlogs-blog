import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className="border border-solid bg-white rounded">
      <div className="mb-5">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <div className="p-8 pt-0">
        <h3 className="text-3xl mb-3 leading-snug">
          <Link href={`/posts/${slug}`}>
            <a
              className="hover:underline text-navy"
              dangerouslySetInnerHTML={{ __html: title }}
            ></a>
          </Link>
        </h3>
        <div className="text-lg mb-4 text-highlight">
          <Date dateString={date} />
        </div>
        <div
          className="text-lg leading-relaxed mb-4 text-navy"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
        <Avatar author={author} />
      </div>
    </div>
  );
}
