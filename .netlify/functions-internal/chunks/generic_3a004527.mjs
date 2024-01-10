export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/generic_06e7295a.mjs').then(n => n.g);

export { page };
