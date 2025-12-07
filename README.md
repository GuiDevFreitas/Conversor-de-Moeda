# 💱 Conversor de Moedas

Projeto de um **conversor de moedas** desenvolvido com **HTML, CSS e JavaScript puro**, permitindo a conversão entre **Real, Dólar, Euro, Libra e Bitcoin**.

👉 Este projeto foi criado com foco em **prática de lógica, manipulação do DOM, eventos e formatação de moedas** utilizando `Intl.NumberFormat`.

---

## 🚀 Funcionalidades

* ✅ Conversão entre 5 moedas diferentes
* ✅ Atualização dinâmica ao trocar as moedas
* ✅ Formatação correta para cada país/moeda
* ✅ Interface simples e responsiva
* ✅ Utilização apenas de **JavaScript puro (Vanilla JS)**

---

## 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (ES6+)
* API nativa `Intl.NumberFormat`


## 🧠 Lógica de Conversão

A conversão funciona da seguinte forma:

1. O valor é convertido para **Real (BRL)** usando a taxa da moeda de origem.
2. Em seguida, o valor em BRL é convertido para a moeda de destino.

Fórmula utilizada:

```js
(valorDigitado * taxaMoedaOrigem) / taxaMoedaDestino
```

---

## 💰 Moedas Disponíveis

* 🇧🇷 Real Brasileiro (BRL)
* 🇺🇸 Dólar Americano (USD)
* 🇪🇺 Euro (EUR)
* 🇬🇧 Libra Esterlina (GBP)
* ₿ Bitcoin (BTC)

---

## ✅ Aprendizados com o Projeto

* Manipulação do DOM
* Eventos do JavaScript (`click`, `change`, `input`)
* Formatação de valores monetários
* Organização de código
* Lógica de conversão entre moedas

---

## 📌 Melhorias Futuras

* 🔄 Integração com API para cotação em tempo real
* 📱 Totalmente responsivo para mobile
* 🌙 Modo escuro
* 📊 Histórico de conversões

---

## 👤 Autor

Desenvolvido por **Guilherme Leal** 🚀
Estudante de Desenvolvimento Web.

