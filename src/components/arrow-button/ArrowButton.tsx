import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import { MouseEventHandler } from 'react';

type TArrowButtonProps = {
	state: boolean,
	setState: Function
}

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

export const ArrowButton = (props: TArrowButtonProps) => {

	function clickHandler() {
		props.setState((prevState: boolean) => !prevState )
	}

	if (props.state){
		return (
			/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
			<div
				role='button'
				aria-label='Открыть/Закрыть форму параметров статьи'
				tabIndex={0}
				className={`${styles.container} ${styles.container_open}`}
				onClick={clickHandler}
				>
				<img src={arrow} alt='иконка стрелочки' className={`${styles.arrow} ${styles.arrow_open}`}  />
			</div>
		);
	}
	else {
		return (
			/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
			<div
				role='button'
				aria-label='Открыть/Закрыть форму параметров статьи'
				tabIndex={0}
				className={styles.container}
				onClick={clickHandler}>
				<img src={arrow} alt='иконка стрелочки' className={styles.arrow}  />
			</div>
		);
	}

};
