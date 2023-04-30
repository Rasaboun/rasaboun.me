import type { MDXComponents } from 'mdx/types'


function H1({children}: { children: JSX.Element})
{
  return (<h1 className='text-red-900'>{children}</h1>)
}
// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    h1:H1,
    ...components,
  }
}