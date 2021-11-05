install: # установка зависимостей при первом клонировании репо
	npm ci

wbg: # вывод в консоль строки "Welcome to the Brain Games!"
	node bin/brain-games.js

publish: # отладка публикации без добавления в основной каталог
	npm publish --dry-run

make lint: # запуск eslint
	npx eslint .

be: # игра "brain-even проверка на четность"
	node bin/games/brain-even.js