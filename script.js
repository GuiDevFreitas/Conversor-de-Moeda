const convertButton = document.querySelector(".convert-button")
const currencySelectOf = document.querySelector("#of")
const currencySelectTo = document.querySelector("#to")

function convertValues() {
    const inputCurrencyValue = Number(document.querySelector(".input-currency").value.replace(/\./g, "").replace(",","."))
    const currecyValueToConvert = document.querySelector(".value-first") // primeiro real
    const currecyValueConverted = document.querySelector(".value-second") // outras mopedas



    const realToday = 1
    const dolarToday = 5.44
    const euroToday = 6.19
    const libraToday = 7.26
    const bitcoinToday = 486926.50
    let valueinit = ""



    if (currencySelectOf.value == "real") {
        valueinit = realToday
        currecyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

    }

    else if (currencySelectOf.value == "dolar") {
        valueinit = dolarToday
        currecyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    else if (currencySelectOf.value == "euro") {
        valueinit = euroToday
        currecyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)


    }

    else if (currencySelectOf.value == "libra") {
        valueinit = libraToday
        currecyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)


    }

    else if (currencySelectOf.value == "bitcoin") {
        valueinit = bitcoinToday
        currecyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)

    }




    if (currencySelectTo.value == "bitcoin") {
        currecyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format((valueinit * inputCurrencyValue) / bitcoinToday)
    }

    else if  (currencySelectTo.value == "libra") {
        currecyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format((valueinit * inputCurrencyValue) / libraToday)
    }


    else if  (currencySelectTo.value == "real") {
        currecyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format((valueinit * inputCurrencyValue) / realToday)
    }

    else if  (currencySelectTo.value == "dolar") {
        currecyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format((valueinit * inputCurrencyValue) / dolarToday)

    }

    else if  (currencySelectTo.value == "euro") {
        currecyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format((valueinit * inputCurrencyValue) / euroToday)

    }



}


function changeCurrencyOf() {
    const currencyfirst = document.querySelector(".currency-first")
    const currencyImgFirst = document.querySelector(".img-first")

    if (currencySelectOf.value == "real") {
        currencyfirst.innerHTML = "Real Brasileiro"
        currencyImgFirst.src = "./assets/brasil 2.png"

    }

    if (currencySelectOf.value == "dolar") {
        currencyfirst.innerHTML = "Dólar Americano"
        currencyImgFirst.src = "./assets/estados-unidos (1) 1.png"
    }

    if (currencySelectOf.value == "euro") {
        currencyfirst.innerHTML = "Euro"
        currencyImgFirst.src = "./assets/euro.png"
    }

    if (currencySelectOf.value == "libra") {
        currencyfirst.innerHTML = "Libra Esterlina"
        currencyImgFirst.src = "./assets/libra.png"
    }

    if (currencySelectOf.value == "bitcoin") {
        currencyfirst.innerHTML = "Bitcoin - Criptomoeda"
        currencyImgFirst.src = "./assets/bitcoin 1.png"
    }

    convertValues()

}


function changeCurrencyTo() {
    const currencySecond = document.querySelector(".currency-second")
    const currencyImgSecond = document.querySelector(".img-second")

    if (currencySelectTo.value == "dolar") {
        currencySecond.innerHTML = "Dólar Americano"
        currencyImgSecond.src = "./assets/estados-unidos (1) 1.png"
    }

    if (currencySelectTo.value == "real") {
        currencySecond.innerHTML = "Real Brasileiro"
        currencyImgSecond.src = "./assets/brasil 2.png"
    }

    if (currencySelectTo.value == "euro") {
        currencySecond.innerHTML = "Euro"
        currencyImgSecond.src = "./assets/euro.png"
    }

    if (currencySelectTo.value == "libra") {
        currencySecond.innerHTML = "Libra Esterlina"
        currencyImgSecond.src = "./assets/libra.png"
    }

    if (currencySelectTo.value == "bitcoin") {
        currencySecond.innerHTML = "Bitcoin - Criptomoeda"
        currencyImgSecond.src = "./assets/bitcoin 1.png"
    }

    convertValues()

}

convertButton.addEventListener("click", convertValues)
currencySelectOf.addEventListener("change", changeCurrencyOf)
currencySelectTo.addEventListener("change", changeCurrencyTo)

