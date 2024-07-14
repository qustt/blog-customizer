import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { useState, useEffect } from 'react';
import styles from './ArticleParamsForm.module.scss';
import { Select } from '../select';
import { Separator } from '../separator';
import { fontFamilyOptions, fontColors, backgroundColors, contentWidthArr, fontSizeOptions, OptionType } from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';





type TArticleParamsFormProps = {
	state: boolean;
	setState: Function;
	font: OptionType;
	setFont: Function;
	size: OptionType;
	setSize: Function;
	fontColor: OptionType;
	setFontColor: Function;
	backgroundColor: OptionType;
	setBackgroundColor: Function;
	containerSize: OptionType;
	setContainerSize: Function;

}

export const ArticleParamsForm = (props:TArticleParamsFormProps) => {

	const onChangeFont = (item: OptionType) => {
		props.setFont(item);
	}

	const onChangeSize = (item: OptionType)=>{
		props.setSize(item);

	}

	const onChangeFontColor = (item: OptionType)=>{
		props.setFontColor(item);

	}

	const onChangeBackgroundColor = (item: OptionType)=>{
		props.setBackgroundColor(item);

	}

	const onChangeContainerSize = (item: OptionType)=>{
		props.setContainerSize(item);

	}

	return (
		<>
			<ArrowButton state={props.state} setState={props.setState} />
			<aside
				className={`${styles.container} ${
					props.state ? styles.container_open : ''
				}`}>
				<form className={styles.form}>
					<h2 className={styles.title}>Задайте параметры</h2>
					<Select selected={props.font} options={fontFamilyOptions} title='Шрифт' onChange={onChangeFont}/>
					<RadioGroup name='Размер' options={fontSizeOptions} selected={props.size} title='Размер' onChange={onChangeSize} />
					<Select selected={props.fontColor} options={fontColors} title='Цвет шрифта' onChange={onChangeFontColor}/>
					<Separator />
					<Select selected={props.backgroundColor} options={backgroundColors} title='Цвет фона' onChange={onChangeBackgroundColor}/>
					<Select selected={props.containerSize} options={contentWidthArr} title='Ширина контента' onChange={onChangeContainerSize}/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
