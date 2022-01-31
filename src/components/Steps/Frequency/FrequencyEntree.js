import React from 'react'
import { FrequencyWeeklyPrice } from '.'
import { CardCheckMark } from '../../Cards'
import styles from './Frequency.module.scss'

const FrequencyEntree = ({ data, quantity, isSelected, onClick }) => {
  return (
    <CardCheckMark isSelected={isSelected} onClick={onClick}>
      <div className={styles.entreeWrapper}>
        <div className={styles.entree}>
          <div
            className={`${
              isSelected ? styles.isSelected : styles.isUnselected
            } textCenter`}
          >
            <div className={`${styles.title} ${styles.fontBold}`}>
              {data.name}
            </div>
            <div className={styles.xSmallFont}>Meals</div>
          </div>
        </div>
        <div className={styles.centerRow}>
          <div className={`${styles.smallFont} ${styles.fontBold}`}>
            ${data.price}
          </div>
          <div className={`${styles.xSmallFont} mb-1`}>Per Meal</div>
          <div className={styles.xSmallFont}>Total Per Week</div>
          <FrequencyWeeklyPrice price={data.price * quantity} />
        </div>
      </div>
    </CardCheckMark>
  )
}

export default FrequencyEntree
