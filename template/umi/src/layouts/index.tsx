import classnames from 'classnames';
import { Link, Outlet } from 'umi';

import styles from './index.less';

export default function Layout() {
  return (
    <div className={classnames(styles.navs, 'text-center')}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
