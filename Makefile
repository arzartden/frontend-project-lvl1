install: # установка зависимостей при первом клонировании репозитория
	npm ci

publish: # отладка публикации без добавления в основной каталог
	npm publish --dry-run

lint: # запуск eslint
	npx eslint .
