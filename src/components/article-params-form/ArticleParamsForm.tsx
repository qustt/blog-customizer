import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { useState, useRef, FormEvent } from 'react';
import styles from './ArticleParamsForm.module.scss';
import { Select } from '../select';
import { Separator } from '../separator';
import { fontFamilyOptions, fontColors, backgroundColors, contentWidthArr, fontSizeOptions, OptionType, defaultArticleState, ArticleStateType } from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import clsx from 'clsx';





type TArticleParamsFormProps = {
	state: boolean;
	setState: Function;
	articleSettings: React.MutableRefObject<{
		fontFamilyOption: OptionType;
		fontColor: OptionType;
		backgroundColor: OptionType;
		contentWidth: OptionType;
		fontSizeOption: OptionType;
	}>
}

export const ArticleParamsForm = (props:TArticleParamsFormProps) => {


	const [font, setFont] = useState(defaultArticleState.fontFamilyOption);
	const [size, setSize] = useState(defaultArticleState.fontSizeOption);
	const [fontColor, setFontColor] = useState(defaultArticleState.fontColor);
	const [backgroundColor, setBackgroundColor] = useState(defaultArticleState.backgroundColor);
	const [containerSize, setContainerSize] = useState(defaultArticleState.contentWidth);

	const formStyle =clsx({
		[styles.container] : true,
		[styles.container_open] : props.state
	})

	const onChangeFont = (item: OptionType) => {
		setFont(item);
	}

	const onChangeSize = (item: OptionType)=>{
		setSize(item);

	}

	const onChangeFontColor = (item: OptionType)=>{
		setFontColor(item);

	}

	const onChangeBackgroundColor = (item: OptionType)=>{
		setBackgroundColor(item);

	}

	const onChangeContainerSize = (item: OptionType)=>{
		setContainerSize(item);

	}

	const resetForm = (e: FormEvent) => {
		e.preventDefault();
		resetText();
	}


	const submitForm = (e:FormEvent) => {
		e.preventDefault();
		updateText();
	}

	const updateText = () => {
		props.articleSettings.current = {
		  fontFamilyOption: font,
		  fontSizeOption: size,
		  fontColor: fontColor,
		  backgroundColor: backgroundColor,
		  contentWidth: containerSize,
		};

		props.setState(!props.state);
	  };


	  const resetText = () => {
		setFont(defaultArticleState.fontFamilyOption);
		setSize(defaultArticleState.fontSizeOption);
		setFontColor(defaultArticleState.fontColor);
		setBackgroundColor(defaultArticleState.backgroundColor);
		setContainerSize(defaultArticleState.contentWidth);

		props.articleSettings.current = {
			fontFamilyOption: defaultArticleState.fontFamilyOption,
			fontSizeOption: defaultArticleState.fontSizeOption,
			fontColor: defaultArticleState.fontColor,
			backgroundColor: defaultArticleState.backgroundColor,
			contentWidth: defaultArticleState.contentWidth,
		  };
		props.setState(!props.state);
	  };

	return (
		<>
			<ArrowButton state={props.state} setState={props.setState} />
			<aside
				className={formStyle}>
				<form className={styles.form} onSubmit={submitForm} onReset={resetForm}>
					<h2 className={styles.title}>Задайте параметры</h2>
					<Select selected={font} options={fontFamilyOptions} title='Шрифт' onChange={onChangeFont}/>
					<RadioGroup name='Размер' options={fontSizeOptions} selected={size} title='Размер' onChange={onChangeSize} />
					<Select selected={fontColor} options={fontColors} title='Цвет шрифта' onChange={onChangeFontColor}/>
					<Separator />
					<Select selected={backgroundColor} options={backgroundColors} title='Цвет фона' onChange={onChangeBackgroundColor}/>
					<Select selected={containerSize} options={contentWidthArr} title='Ширина контента' onChange={onChangeContainerSize}/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
