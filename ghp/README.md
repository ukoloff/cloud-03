# Знакомство с GitHub Pages

## Быстрое создание сайта GitHub Pages

- Создайте новый репозиторий на GitHub
    * Не забудьте заполнить:
        + Description
        + .gitignore (теперь точно для `Jekyll`)
        + License
        + ~~README~~
- Settings / GitHub Pages / Choose a theme
- Выберите себе тему и создайте сайт
- Убедитесь, что сайт работает ;-)
- Сколонируйте репозиторий локально

## Установка Ruby

- Найдите сайты [Ruby][] и [Ruby Installer][] (для Windows)
- Скачайте:
    + Ruby 
        * ~~Вероятно, portable~~
        * Достаточно 32-bit
    + DevKit
        * Той же разрядности, что и Ruby
- Установите (распакуйте) Ruby
    + Лучше всего в %APPDATA%\RubyN.N
    + Но можно просто в C:\RubyN.N
    + Или куда сочтёте удобным
- Вручную добавьте путь к Ruby в PATH
    + My Computer / Properties / Advanced / Environment / User / PATH
- Убедитесь, что Ruby запускается из командной строки
    + irb
    + 2 + 2
    + exit
- Распакуйте DevKit в path/to/RubyN.N/dev
- Настройте [DevKit][DevKit.wiki]
    + ruby dk.rb init
    + ruby dk.rb install
- Установите gem `bundler`
    + gem install bundler

## Установка Jekyll 

- Добавьте в репозиторий файл
```ruby
# Gemfile
gem 'github-pages'
```
- Установите все нужные gem'ы:
    + bundle install
- Запустите:
    + jekyll
    + jekyll build
    + jekyll serve
    + Откройте укзазанный адрес в браузере

## Активизация Jekyll

- Добавьте файл `index.md` в корень сайта
```
---
title: Кошмарная домашняя страница
layout: default
---
Дратути
```
- Убедитесь, что сайт перекомпилировался
- Убедитесь, что сайт изменился
- Отправьте изменения на сервер
- Убедитесь, что изменения видны на сайте

## Добавление ссылки на README

- Добавьте YAML-пролог в README
- Добавьте ссылку из index в README
- Убедитесь, что изменения видны локально
- Push
- Убедитесь, что изменения видны на сайте

## Доменное имя

- Зарегистрируйтесь во [FreeNom][]
- Займите бесплатное доменное имя в одном из доменов
    + .tk
    + .ml
    + .ga
    + .cf
    + .gq
- В списке доменов нажмите `Manage Domain`
- Mange Freenom DNS
- Добавьте запись:
    + Непустое имя (домен третьего уровня) 
    + Type: CNAME
    + Target: *user*.github.io
- Добавьте в корень репозитория файл `CNAME` с новым доменным именем
- Commit + Push
- Убедитесь, что доменное имя принято (Settings)
- Подождите
- Убедитесь, что сайт доступен по новому имени

[Ruby]: https://www.ruby-lang.org/
[Ruby Installer]: https://rubyinstaller.org/
[DevKit.wiki]: https://github.com/oneclick/rubyinstaller/wiki/Development-Kit
[FreeNom]: http://www.dot.tk/
