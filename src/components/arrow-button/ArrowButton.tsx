import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

type TArrowButtonProps = {
	formState: boolean,
	setFormState: Function
}


export const ArrowButton = (props: TArrowButtonProps) => {

	const divStyle = clsx({
		[styles.container] : true,
		[styles.container_open] : props.formState
	})

	const imgStyle = clsx({
		[styles.arrow] : true,
		[styles.arrow_open] : props.formState
	})

	function clickHandler() {
		props.setFormState((prevState: boolean) => !prevState )
	}

		return (
			/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
			<div
				role='button'
				aria-label='Открыть/Закрыть форму параметров статьи'
				tabIndex={0}
				className={divStyle}
				onClick={clickHandler}
				>
				<img src={arrow} alt='иконка стрелочки' className={imgStyle}  />
			</div>
		);
};
