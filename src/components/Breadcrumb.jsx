// layout, pages, components and others:
import styles from './Breadcrumb.module.scss';

import { Link, useLocation } from 'react-router-dom';

function Breadcrumb () {

  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav aria-label="breadcrumb" className={styles.breadcrumb}>
      <ol>
        <li>
          <Link to="/">Início</Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          
          return (
            <li key={name} style={{ marginLeft: '10px' }}>
              <span>> </span>
              {isLast ? (
                <span>{name}</span>
              ) : (
                <Link to={routeTo}>{name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb