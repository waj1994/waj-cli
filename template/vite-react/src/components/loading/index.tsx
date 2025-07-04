/**
 * 切换路由展示的loading页面
 */
import styles from './index.module.less';

function Loading() {
  return (
    <div className={styles.loading}>
      <ul className={styles['loading-box']}>
        <li className={styles['loading-item']} />
        <li className={styles['loading-item']} />
        <li className={styles['loading-item']} />
        <li className={styles['loading-item']} />
      </ul>
    </div>
  );
}

export default Loading;
