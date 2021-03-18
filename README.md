# jest-tinkoff-api

`npm ci`

## Документация

Доступна по [ссылке](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/master/doc/classes/openapi.md)

[Swagger](https://tinkoffcreditsystems.github.io/invest-openapi/swagger-ui/)

## Авторизация

Более полную информацию можно просмотреть в [документации](https://tinkoffcreditsystems.github.io/invest-openapi/auth/)

1. Перейдите в [настройки](https://www.tinkoff.ru/invest/settings/) блок "Токен для OpenAPI"
2. Функция "Подтверждение сделок кодом" должна быть отключена
3. Выпустите токен OpenApi для биржи и Sandbox. Возможно система
   попросит вас авторизоваться еще раз, не беспокойтесь, это необходимо
   для подключения робота к торговой платформе.
4. Скопируйте токен и сохраните, токен отображается только один раз, просмотреть
   его позже не получится, тем не менее вы можете выпускать неограниченное количество токенов.
5. Создайте `.env` файл и запишите токен для песочницы OpenAPI в `OPEN_API_SANDBOX_TOKEN`
