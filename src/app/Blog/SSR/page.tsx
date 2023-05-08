import Content from "./SSR.mdx";

export default function Article() {
  return (
    <main className="flex justify-center items-center max-w-2xl mt-16 mb-24 mx-auto px-10">
      <article className=" prose prose-strong:text-white prose-h1:text-blue-100 prose-h1:font-normal prose-h2:text-white prose-h2:font-normal prose-h3:text-blue-100 prose-h3:font-light prose-li:text-blue-100 prose-p:text-blue-100 prose-pre:bg-blue-950 prose-code:text-white">
        <Content />
      </article>
    </main>
  );
}
