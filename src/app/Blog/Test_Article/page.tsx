import Content from "./test_article.mdx";

export default function Article() {
  return (
    <main className="flex-none max-w-3xl mx-auto px-10">
      <article className=" prose prose-h1:text-violet-700 prose-h2:text-blue-100 prose-p:text-blue-200 prose-pre:bg-blue-950 prose-code:text-white">
        <Content />
      </article>
    </main>
  );
}
