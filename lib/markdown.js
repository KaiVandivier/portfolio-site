import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

export function getSortedMdData(dirName) {
  // Get file names under /dirName
  const mdDirectory = path.join(process.cwd(), dirName);
  const fileNames = fs.readdirSync(mdDirectory);
  const allMdData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(mdDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the file's metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  });
  // Sort md by date
  return allMdData.sort((a, b) => {
    return (a.date < b.date) ? 1 : -1;
  });
}

// for use in `getStaticPaths()`
export function getAllMdIds(dirName) {
  const mdDirectory = path.join(process.cwd(), dirName);
  const fileNames = fs.readdirSync(mdDirectory);

  // returns an array that looks like this:
  // [{ params: { id: "ssg-ssr" } }, { params: { id: "pre-rendering" } }]
  return fileNames.map(fileName => {
    return { params: { id: fileName.replace(/\.md$/, "")} };
  });
}

// for use in `getStaticProps`
export async function getMdData(id, dirName) {
  const mdDirectory = path.join(process.cwd(), dirName);
  const fullPath = path.join(mdDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use `gray-matter` to parse the file's metadata section
  const matterResult = matter(fileContents);

  // Use `remark` to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
