# cloud-03
Сравнение git-клиентов для Windows

## Создать репозиторий

- Войти на сайт GitHub
- Создать репозиторий (рекомендуемое имя `cloud-03`)
- Задать Description
- Создать README, .gitignore (любой, например Jekyll) и лицензию (например MIT)
- После создания задать метки (хотя бы `urfu` и номер группы)

## Знакомство с Markdown

Найти краткую справку по Markdown (лучше всего GitHub Flavored Markdown)

## Поиск образа ВМ

Найти страницу загрузки бесплатных образов ВМ Microsoft
(подсказка: `google` + microsoft images virtualbox)

Подготовить два списка:

1. Список доступных ОС
2. Список видов ВМ

Сами образы не качать!

## Установка ВМ

- Развернуть ВМ из файла `IE11 - Win7.ova`
- Немедленно (до запуска) сделать снимок
- Склонировать снимок в новую ВМ (связное клонирование)

## Доступ по RDP

*Необязательно*: настроить доступ к ВМ по протоколу RDP:

- Завести внутри ВМ пользователя (например, `vagrant`/`vagrant`)
- Дать ему права администратора (или хотя бы Remote Desktop User)
- Пробросить порт 3389 ВМ на хост (например, на порт 3400)
- Зайти на ВМ клиентом RDP (`mstsc` на адрес localhost:3400)

## Русская клавиатура

Добавить русскую клавиатуру в Windows
(Control Panel / Change keyboard...)

## Установка редактора

Рекомендуется установить хороший текстовый редактор:

- Поддержкой кодировки UTF-8
- Автоматическое обновление текста файлов
- Просмотром списка файлов
- Файловые операции
- Работа с файлами любых расширений

Предлагается попробовать `Sublime Text 3`, возможны варианты:

- Notepad++
- Atom.io
- Visual Studio Code

## Список git-клиентов для Windows

Поиском в Интернет обнаружить известные GUI-клиенты git для Windows,
с упором на бесплатные.

## Тестирование git-клиентов

Устанавливать git-клиенты по одному и пробовать в них работать.

Рекомендуется начать с `Git Extensions`,
поскольку вместе с ним ставится консольный git.

В одном из клиентов, где есть git-console
(терминал git)
также запустить git-gui
(GUI входящий в стандартную поставку)
и проделать с ним то же,
что и с другими клиентами.

Что сделать с каждым клиентом:

- Найти сайт
- Скачать (обратите внимание: используется 32-битная Windows)
- Настроить
- Осмотреться в интерфейсе
- Внести имя пользователя и e-mail для сообщений коммита (при  необходимости)
- Склонировать свой репозиторий `cloud-03` (используйте `HTTPS` с сайта GitHub)
- Внести в файл README подраздел про данный клиент
- Сделать commit
- Сделать скриншот окна клиента (Snipping Tool), положить в репозиторий (в папку `images`) и вставить в README
- Попробовать создавать метки, ветки, сливать их
- Отправить все изменения во внешний репозиторий (push)
- Сформулировать своё мнение про данный клиент и тоже отразить его в README

## Отчёт

В качестве отчёта используется файл README в репо.

Необходимые разделы:

- Список найденых образов ВМ

- Список найденных git-клиентов

- Основной раздел, где каждый протестированный клиент оформлен как подраздел:

  * Ссылка на сайт
  * Ссылка на страницу закачки
  * Скриншот экрана
  * Мнение о данном клиенте
  * А также всё, что понадобится впредь (ц)

- Заключение

Убедитесь, что все сделанные изменения во всех клиентах закоммичены,
и если они делались в разных ветках, 
то слиты в ветку `master`.
