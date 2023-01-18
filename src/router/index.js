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
    // beforeRouerEnter(to, from, next) {
    //   const postExists = this.allPosts.some(post => post.id === this.id);
    //   if (!postExists) {
    //     next({ name: 'not-found' });
    //   } else {
    //     next();
    //   }
    // },
  },

  {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    component: NotFound
  },
  {
    name: '404',
    path: '/404',
    component: NotFound
  }
];

export default routes;
