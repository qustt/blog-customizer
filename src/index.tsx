import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState} from './constants/articleProps';
import { useState} from 'react';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const [article, setArticle] = useState({
		fontFamilyOption: defaultArticleState.fontFamilyOption,
    	fontColor: defaultArticleState.fontColor,
    	backgroundColor: defaultArticleState.backgroundColor,
    	contentWidth: defaultArticleState.contentWidth,
    	fontSizeOption: defaultArticleState.fontSizeOption
	})

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': article.fontFamilyOption.value,
					'--font-size': article.fontSizeOption.value,
					'--font-color': article.fontColor.value,
					'--container-width': article.contentWidth.value,
					'--bg-color': article.backgroundColor.value,
				} as CSSProperties
			}
			>
			<ArticleParamsForm
			state = {isOpen}
			setState={setIsOpen}
			articleSettings={setArticle}
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
