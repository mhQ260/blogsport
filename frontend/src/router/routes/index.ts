import { RouteName } from '../models';

const routes = [
  {
    path: '/',
    name: RouteName.POSTS,
    component: () => import('../../views/Posts'),
  },
];

export default routes;