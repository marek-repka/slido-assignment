import { ReactNode } from 'react';
import * as styles from './PageContainer.module.css';

interface Props {
  children?: ReactNode;
}

const PageContainer = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <header>
        <h1>Slido Sessions Example App</h1>
      </header>
      {children}
    </div>
  );
};

export default PageContainer;
