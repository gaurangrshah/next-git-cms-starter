import { promises as fsPromises } from 'fs';

export async function getPostList() {
  const markdownFiles = await fsPromises.readdir('data');

  const postList = markdownFiles.map((filename) => {
    const slug = filename.replace(/.md$/, '');
    const [year, month, date, ...rest] = slug.split('-');
    const createdAt = new Date(`${year} ${month} ${date}`).getTime();
    const title = rest.join(' ');

    return {
      slug,
      createdAt,
      title
    };
  });

  return postList;
}

export async function getPost(slug) {
  const [year, month, day, ...rest] = slug.split('-');
  const createdAt = new Date(`${year} ${month} ${day}`).getTime();
  const title = rest.join(' ');
  const content = await fsPromises.readFile(`data/${slug}.md`, 'utf8');

  return {
    slug: slug,
    title,
    content,
    createdAt
  };
}
