import styles from './page.module.css';
import { HelloWorld } from '@root/src/components/HelloWorld';

export default function Home() {
  return (
    <main className={styles.main}>
      <HelloWorld message="Foo" />
    </main>
  );
}
