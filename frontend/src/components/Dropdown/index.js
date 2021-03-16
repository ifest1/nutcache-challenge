import { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import styles from './styles.module.css'

function Dropdown({options, ...props}) {
  const [selected, setSelected] = useState(props.value);
  const [toggle, setToggle] = useState(false);

  const toggleSelected = (e) => {
    setToggle(!toggle);
    setSelected(e.target.value);
    props.onChange(e);
  }

  return (
    <div className={styles.dropdown}>
      <div className={styles.header} onClick={() => setToggle(!toggle)}>
        <div className={styles.selectedItem}>
          <h3>{selected}</h3>
        </div>
        <div className={styles.dropdownIcon}>
          {toggle ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
        </div>
      </div>


      {toggle &&
        <div className={styles.options}>
          {options.map(option => (
            <button
              name={props.name}
              key={Math.random}
              value={option}
              className={styles.option}
              onClick={(e) => toggleSelected(e)}
              >
              {option}
            </button>
          ))}
        </div>
      }
    </div>
  )
}

export default Dropdown;
