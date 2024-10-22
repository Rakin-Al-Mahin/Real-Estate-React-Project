export default function FooterLinkGroup({ title, links }) {
  return (
    <div className="mb-10 w-full">
      <h4 className="mb-9 text-lg font-semibold text-white">{title}</h4>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
            >
              {item.topic}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
