install: # установка зависимостей при первом клонировании репо
	npm ci

publish: # отладка публикации без добавления в основной каталог
	npm publish --dry-run

make lint: # запуск eslint
	npx eslint .
