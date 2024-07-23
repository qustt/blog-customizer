import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { useState, FormEvent, useRef, useEffect } from 'react';
import styles from './ArticleParamsForm.module.scss';
import { Select } from '../select';
import { Separator } from '../separator';
import { fontFamilyOptions, fontColors, backgroundColors, contentWidthArr, fontSizeOptions, OptionType, defaultArticleState } from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import clsx from 'clsx';





type TArticleParamsFormProps = {
	articleSettings: Function;
  };

  export const ArticleParamsForm = (props: TArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [font, setFont] = useState(defaultArticleState.fontFamilyOption);
	const [size, setSize] = useState(defaultArticleState.fontSizeOption);
	const [fontColor, setFontColor] = useState(defaultArticleState.fontColor);
	const [backgroundColor, setBackgroundColor] = useState(defaultArticleState.backgroundColor);
	const [containerSize, setContainerSize] = useState(defaultArticleState.contentWidth);

	const formRef = useRef<HTMLDivElement>(null);

	const formStyle = clsx({
	  [styles.container]: true,
	  [styles.container_open]: isOpen,
	});

	const onChangeFont = (item: OptionType) => {
	  setFont(item);
	};

	const onChangeSize = (item: OptionType) => {
	  setSize(item);
	};

	const onChangeFontColor = (item: OptionType) => {
	  setFontColor(item);
	};

	const onChangeBackgroundColor = (item: OptionType) => {
	  setBackgroundColor(item);
	};

	const onChangeContainerSize = (item: OptionType) => {
	  setContainerSize(item);
	};


	const handleClickOutside = (event: MouseEvent) => {
		if (formRef.current && !formRef.current.contains(event.target as Node)) {
		  setIsOpen(false);
		}
	  };


	const resetForm = (e: FormEvent) => {
	  e.preventDefault();
	  resetText();
	};

	const submitForm = (e: FormEvent) => {
	  e.preventDefault();
	  updateText();
	};

	const updateText = () => {
	  props.articleSettings({
		fontFamilyOption: font,
		fontSizeOption: size,
		fontColor: fontColor,
		backgroundColor: backgroundColor,
		contentWidth: containerSize,
	  });

	  setIsOpen(false);
	};

	const resetText = () => {
	  setFont(defaultArticleState.fontFamilyOption);
	  setSize(defaultArticleState.fontSizeOption);
	  setFontColor(defaultArticleState.fontColor);
	  setBackgroundColor(defaultArticleState.backgroundColor);
	  setContainerSize(defaultArticleState.contentWidth);

	  props.articleSettings({
		fontFamilyOption: defaultArticleState.fontFamilyOption,
		fontSizeOption: defaultArticleState.fontSizeOption,
		fontColor: defaultArticleState.fontColor,
		backgroundColor: defaultArticleState.backgroundColor,
		contentWidth: defaultArticleState.contentWidth,
	  });

	  setIsOpen(false);
	};

	useEffect(() => {
		if (isOpen) {
		  document.addEventListener('mousedown', handleClickOutside);
		} else {
		  document.removeEventListener('mousedown', handleClickOutside);
		}
		return () => {
		  document.removeEventListener('mousedown', handleClickOutside);
		};
	  }, [isOpen]);

	return (
		<>
			<ArrowButton formState={isOpen} setFormState={setIsOpen} />
			<aside
				className={formStyle}
				ref={formRef}
				>
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
