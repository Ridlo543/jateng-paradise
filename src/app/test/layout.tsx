type MDXLayoutProps = {
  children: React.ReactNode;
};

export default function MDXLayout(props: MDXLayoutProps) {
  return (
    <>
      <div className="pt-16">
        {/* header */}
        <p>MDX Layout</p>

        {/* content */}
        <div className="prose max-w-[640px] mx-auto">{props.children}</div>

        {/* comment section, etc */}
        <div>
          <p>Ini adalah comment section</p>
        </div>
      </div>
    </>
  );
}
