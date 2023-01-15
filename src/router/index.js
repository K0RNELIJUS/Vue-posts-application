import PostsPage from '../views/PostsPage.vue';
import SinglePostPage from '../views/SinglePostPage.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    name: 'posts-page',
    path: '/',
    component: PostsPage
  },
  {
    name: 'single-post-page',
    path: '/article/:id',
    component: SinglePostPage
    // beforeEnter(to) {
    //   const id = parseInt(to.params.id);
    //   const articles = allPosts.articles;

    //   const exists = articles.some(article => article.id === id);

    //   if (!exists) return { name: 'not-found' };
    // }
  },

  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
];

export default routes;
