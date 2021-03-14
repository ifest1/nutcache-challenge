import styles from './styles.module.css';

function FormInput({icon, ...props }) {

  const Icon = icon;

  return (
    <div className={styles.container}>
      <Icon size={20} />

      <input color="#fffff" {...props}/>
    </div>
  )
}

export default FormInput;
