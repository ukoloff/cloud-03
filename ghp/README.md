# Знакомство с GitHub Pages

## Быстрое создание сайта GitHub Pages

- Создайте новый репозиторий на GitHub
    * Не забудьте заполнить:
        + Description
        + .gitignore (теперь точно для `Jekyll`)
        + License
        + README (*не обязательно*)
- Settings / GitHub Pages / Choose a theme
- Выберите себе тему и создайте сайт
- Убедитесь, что сайт работает ;-)
- Сколонируйте репозиторий локально

## Установка Ruby

- Найдите сайты [Ruby][] и [Ruby Installer][] (для Windows)
- Скачайте:
    + Ruby 
        * Вероятно, portable
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

[Ruby]: https://www.ruby-lang.org/
[Ruby Installer]: https://rubyinstaller.org/
[DevKit.wiki]: https://github.com/oneclick/rubyinstaller/wiki/Development-Kit

