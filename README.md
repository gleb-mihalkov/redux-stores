# Redux Store

Предоставляет дополнительные методы для работы с Redux.

## Оглавление

- [Причины создания](#причины-создания)
- [Базовые понятия](#базовые-понятия)
  - [Состояние](#состояние)
  - [Селекторы](#селекторы)
  - [Действия](#действия)
  - [Редьюсеры](#редьюсеры)
  - [Дочерние хранилища](#дочерние-хранилища)
- [API](#api)
- [Примеры](#примеры)

## Причины создания

_Раздел находится в разработке_

## Базовые понятия

### Состояние

_Раздел находится в разработке_

### Селекторы

_Раздел находится в разработке_

### Действия

_Раздел находится в разработке_

### Редьюсеры

_Раздел находится в разработке_

### Дочерние хранилища

_Раздел находится в разработке_

## API

_Преамбула находится в разработке_

### createStore(name, initialState)

Возвращает коллекцию свойств и функций хранилища.

_Тип результата:_ **Store**

| Параметр     | Тип    | Описание                      |
| ------------ | ------ | ----------------------------- |
| name         | string | Полное имя хранилища          |
| initialState | any    | Начальное состояние хранилища |

### Store

Коллекция свойств и функций хранилища. Функции, содержащиеся в коллекции, не привязяны к конкретному экземпляру `Store`, то есть, вызовы вида `store.createSelector()` и `const { createSelector } = store; createSelector()` работают одинаково.

#### Store.name

_Тип:_ **string**

Полное имя хранилища. Представляет собой путь к состоянию хранилища в глобальном дереве состояния приложения, записанный через символ `"."`.

_Пример:_

`"messages.counters.unreaded"`

#### Store.path

_Тип_: **string[]**

Путь к состоянию хранилища в глобальном дереве состояний приложения. Получается из полного имени хранилища путем разбивки строки по символу `"."`.

_Пример:_

```
name = "messages.counters.unreaded"
path: ["messages", "counters", "unreaded"]
```

#### Store.baseName

_Тип:_ **string**

Собственное имя хранилища. Последний компонент пути к состоянию хранилища в глобальном дереве состояний.

_Пример:_

```
name = "messages.counters.unreaded"
baseName: "unreaded"
```

#### Store.parentName

_Тип:_ **string**

Полное имя родительского хранилища. Может быть `undefined`, если у хранилища
нет родителя.

_Пример:_

```
name = "messages.counters.unreaded"
parentName: "messages.counters"
```

#### Store.getState(rootState)

Извлекает состояние хранилища из глобального состояния приложения. Выбрасывает исключение, если хранилище еще не было зарегистровано в глобальном хранилище (см. ниже).

_Тип результата:_ **State**

| Параметр  | Тип    | Описание                        |
| --------- | ------ | ------------------------------- |
| rootState | Object | Глобальное состояние приложения |

#### Store.createSelector(getData)

Создает селектор, который извлекает данные из состояния хранилища с помощью указанной функции. Селектор мемоизован, то есть, если состояние хранилища не изменялось, повторных вызовов функции `getData` не происходит.

_Тип результата:_ **Function**

| Параметр | Тип      | Описание                                                                                                                     |
| -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| getData  | Function | Функция получения данных. Принимает на вход состояние хранилища и возвращает данные, которые требуется получить в селекторе. |

_Пример:_

```javascript
// store.name = 'messages.counters';

const rootState = { messages: { counters: { unreaded: 1 } } };
const getUnreadedCount = store.createSelector(counters => counters.unreaded);
getUnreadedCount(rootState); // -> 1
```

_Раздел находится в разработке_

## Примеры

_Раздел находится в разработке_
