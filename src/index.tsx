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

	const ref = useRef(defaultArticleState);

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
			articleSettings={ref}
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
