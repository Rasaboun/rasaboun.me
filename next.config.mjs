import withMdx from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
  pageExtensions: ["ts", "tsx", "mdx"],
};

export default withMdx({
  options: {
	remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        /** @type {import("rehype-pretty-code").Options} */
        ({
          theme: "min-dark",
          
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node, id) {
			node.properties.className = ['word'];
		   
			// `id` will be either 'v', 's', or 'i'.
			// State (v)alue, (s)etter, and (i)nitial value
			if (id) {
			  const backgroundColor = {
				v: 'rgb(196 42 94 / 59%)',
				s: 'rgb(0 103 163 / 56%)',
				i: 'rgb(100 50 255 / 35%)',
			  }[id];
		   
			  const color = {
				v: 'rgb(255 225 225 / 100%)',
				s: 'rgb(175 255 255 / 100%)',
				i: 'rgb(225 200 255 / 100%)',
			  }[id];
		   
			  // If the word spans across syntax boundaries (e.g. punctuation), remove
			  // colors from the child nodes.
			  if (node.properties['data-rehype-pretty-code-wrapper']) {
				node.children.forEach((childNode) => {
				  childNode.properties.style = '';
				});
			  }
		   
			  node.properties.style =
				`background-color: ${backgroundColor}; color: ${color};`;
			}
		  },
        }),
      ],
    ],
  },
})(nextConfig);