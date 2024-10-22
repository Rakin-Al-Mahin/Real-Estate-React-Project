import blogImage1 from "../../assets/images/blog/blog-footer-01.jpg";
import blogImage2 from "../../assets/images/blog/blog-footer-02.jpg";

export default function FooterBlog() {
  const blogPosts = [
    {
      title: "I think really important to design with...",
      imageUrl: blogImage1,
      link: "blog-details.html",
    },
    {
      title: "Recognizing the need is the primary...",
      imageUrl: blogImage2,
      link: "blog-details.html",
    },
  ];

  return (
    <div className="mb-10 w-full">
      <h4 className="mb-9 text-lg font-semibold text-white">Latest blog</h4>
      <div className="flex flex-col gap-8">
        {blogPosts.map((post, index) => (
          <a
            href={post.link}
            key={index}
            className="group flex items-center gap-[22px]"
          >
            <div className="overflow-hidden rounded">
              <img src={post.imageUrl} alt="blog" />
            </div>
            <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
              {post.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
