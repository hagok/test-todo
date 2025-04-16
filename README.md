# Установка проекта с использованием Docker-compose

Конфигурация Docker проекта:
1. php:8.2-fpm
2. nginx:latest
3. mysql:8.0
4. composer
##

<br/>

0. Клонируем на свою машину
```
git clone https://github.com/hagok/test-todo.git
```
1. Через терминал заходим в эту папку. 
2. Поднимаем контейнер через docker-compose:
```
docker-compose up -d
```
3. Переходим на 
```
http://localhost:777/
```
4. Вуаля! Проект на базе! Начинаем управлять миром (: