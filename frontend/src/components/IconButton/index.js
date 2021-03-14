import styles from './styles.module.css';

function IconButton({children, ...props}) {
  return (
    <button type="button" className={styles.iconBtn} {...props}>
      {children}
    </button>
  )
}

export default IconButton;
