import githubCms from './github-cms';
import * as fsCms from './fs-cms';

function canUseGitHub() {
  return Boolean(process.env.GITHUB_PAT);
}

export async function getPostList() {
  if (canUseGitHub()) {
    return githubCms.getPostList();
  }

  return fsCms.getPostList();
}

export async function getPost(slug) {
  if (canUseGitHub()) {
    return githubCms.getPost(slug);
  }

  return fsCms.getPost(slug);
}
