import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // Get file names unnder /postss
  const filenames = fs.readdirSync(postsDirectory);
  const allPostsData = filenames.map((fileName) => {
    // remove .md from the file
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);

    const fileContents = fs.readFileSync(fullPath);

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  //const processedContent = await remark()
  //  .use(html)
  //  .process(matterResult.content);

  //const contentHTML = processedContent.toString();
  const contentHTML = matterResult.content;
  return {
    id,
    contentHTML,
    ...matterResult.data,
  };
}
