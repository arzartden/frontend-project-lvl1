install: # установка зависимостей при первом клонировании репо
	npm ci

wbg: # вывод в консоль строки "Welcome to the Brain Games!"
	node bin/brain-games.js

publish:
	npm publish --dry-run