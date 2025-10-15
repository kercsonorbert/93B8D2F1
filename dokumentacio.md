# 93B8D2F1 - Backend Teszt Dokumentáció

Postmanben futtatott teszt dokumentációja a backend projektmunkára.

## Teszt Célja

A teszt célja annak igazolása, hogy a node.js/Express szerver megfelelően fut, a végponton keresztül hibátlanul szolgáltatja a  növény adatokat JSON formátumban a frontend projektmunka számára.

## Használatához kell
npm i express
npm i -D nodemon

## Elindítása
npm run dev

### Végpont

| Paraméter | Érték |
| --- | --- |
| **Tesztelő eszköz** | `Postman` |
| **Metódus** | `GET` |
| **Végpont (URL)** | `http://localhost:3000/` |
| **Elvárt Válasz** | `JSON` formátumú, `200 OK` státuszkód. |
