export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/index_d7d7a0fe.mjs').then(n => n.i);

export { page };