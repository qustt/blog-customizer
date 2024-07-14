import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';
import { fontFamilyOptions, fontColors, backgroundColors, contentWidthArr, fontSizeOptions, OptionType } from 'src/constants/articleProps';
import { useState } from 'react';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [font, setFont] = useState(fontFamilyOptions[0]);
	const [size, setSize] = useState(fontSizeOptions[0]);
	const [fontColor, setFontColor] = useState(fontColors[0]);
	const [backgroundColor, setBackgroundColor] = useState(backgroundColors[0]);
	const [containerSize, setContainerSize] = useState(contentWidthArr[0]);

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': defaultArticleState.fontFamilyOption.value,
					'--font-size': defaultArticleState.fontSizeOption.value,
					'--font-color': defaultArticleState.fontColor.value,
					'--container-width': defaultArticleState.contentWidth.value,
					'--bg-color': defaultArticleState.backgroundColor.value,
				} as CSSProperties
			}>
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
			setContainerSize={setContainerSize}/>
			<Article state = {isOpen} setState={setIsOpen}/>
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
