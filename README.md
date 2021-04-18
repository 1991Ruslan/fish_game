 поставить все пакеты  
```console
$ npm install
```

 стартует скрипт с названием start  в файле package.json
```console
$ npm start
```

 установка postgresql и зависимостей
```console
$ sudo apt update
$ sudo apt install postgresql postgresql-contrib
```

Посмотреть версию СУБД
```console
$ psql -V
```
Статус postgresql и управление
```console
$ sudo systemctl status postgresql
$ sudo systemctl stop postgresql
$ sudo systemctl start postgresql
```
Вход в psql СУБД
```console
$ sudo -u postgres -i
psql
```
посмотреть список бд
 ```console
postgres=# \l
```
посмотреть всех пользователей
 ```console
postgres=# \du
```
создать бд
```console
CREATE DATABASE имя_бд;
```
посмотреть все таблицы в БД
```console
postgres=#  \dt
```

создать нового пользователя в СУБД
 ```console
postgres=# CREATE USER имя_пользователя WITH password 'пароль'
```
добавление прав пользователю
```console
postgres=# ALTER USER имя_пользователя WITH CREATEDB;
postgres=# ALTER USER имя_пользователя WITH SUPERUSER;
```
смена владельца бд
```console
postgres=# ALTER DATABASE имя_бд OWNER TO имя_пользователя;
```
пример создания таблиц в бд
```console
CREATE TABLE users(ID INT PRIMARY KEY, LOGIN TEXT, PASSWORD TEXT);
```
войти в БД под пользователем
```console
psql -U gus fish_game
```
шаблон создания записи в таблицу
```console
NSERT INTO users (id, login, password) VALUES (1, gus, 0550);
```