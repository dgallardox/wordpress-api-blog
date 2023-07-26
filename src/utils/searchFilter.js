export default function searchFilter(allPosts, search) {
  const filteredResults = allPosts.filter((post) =>
    post.title.rendered.toLowerCase().includes(search.toLowerCase())
  );
  return filteredResults;
}
