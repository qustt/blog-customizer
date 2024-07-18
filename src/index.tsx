import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';
import { fontFamilyOptions, fontColors, backgroundColors, contentWidthArr, fontSizeOptions, OptionType } from 'src/constants/articleProps';
import { useState, useRef, useEffect } from 'react';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [font, setFont] = useState(defaultArticleState.fontFamilyOption);
	const [size, setSize] = useState(defaultArticleState.fontSizeOption);
	const [fontColor, setFontColor] = useState(defaultArticleState.fontColor);
	const [backgroundColor, setBackgroundColor] = useState(defaultArticleState.backgroundColor);
	const [containerSize, setContainerSize] = useState(defaultArticleState.contentWidth);

	const ref = useRef(defaultArticleState);

	const updateText = () => {
		ref.current = {
		  fontFamilyOption: font,
		  fontSizeOption: size,
		  fontColor: fontColor,
		  backgroundColor: backgroundColor,
		  contentWidth: containerSize,
		};

		setIsOpen(!isOpen);
	  };

	  const resetText = () => {
		setFont(defaultArticleState.fontFamilyOption);
		setSize(defaultArticleState.fontSizeOption);
		setFontColor(defaultArticleState.fontColor);
		setBackgroundColor(defaultArticleState.backgroundColor);
		setContainerSize(defaultArticleState.contentWidth);

		ref.current = {
			fontFamilyOption: defaultArticleState.fontFamilyOption,
			fontSizeOption: defaultArticleState.fontSizeOption,
			fontColor: defaultArticleState.fontColor,
			backgroundColor: defaultArticleState.backgroundColor,
			contentWidth: defaultArticleState.contentWidth,
		  };
	  };



	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': ref.current.fontFamilyOption.value,
					'--font-size': ref.current.fontSizeOption.value,
					'--font-color': ref.current.fontColor.value,
					'--container-width': ref.current.contentWidth.value,
					'--bg-color': ref.current.backgroundColor.value,
				} as CSSProperties
			}
			>
			<ArticleParamsForm
			state = {isOpen}
			setState={setIsOpen}
			font={font}
			setFont={setFont}
			backgroundColor={backgroundColor}
			setBackgroundColor={setBackgroundColor}
			fontColor={fontColor}
			setFontColor={setFontColor}
			size={size}
			setSize={setSize}
			containerSize={containerSize}
			setContainerSize={setContainerSize}
			resetText={resetText}
			updateText={updateText}
			/>

			<Article state = {isOpen} setState={setIsOpen}/>
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
