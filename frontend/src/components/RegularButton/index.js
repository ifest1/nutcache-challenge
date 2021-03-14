import styles from './styles.module.css';

function RegularButton({children, ...props}) {
  return (
    <button className={styles.regularBtn} {...props}>
      {children}
    </button>
  )
}

export default RegularButton;
