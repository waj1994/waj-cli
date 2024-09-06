import { IConfigFromPlugins } from '@@/core/pluginConfig';

const routes: IConfigFromPlugins['routes'] = [
  { path: '/', component: 'index' },
  { path: '/docs', component: 'docs', hidden: true},
];

export default routes;
