document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".city");
    const cityName = document.getElementById("city-name");
    const temperature = document.getElementById("temperature");
    const suggestion = document.getElementById("suggestion");
    const annualAverage = document.getElementById("annual-average");

    buttons.forEach(button => {
        button.addEventListener("click", async () => {
            const city = button.getAttribute("data-city");
            const url = `/api/weather?city=${city}`;

            try {
                const response = await fetch(url);
                const data = await response.json();

                if (data.cod !== 200) {
                    throw new Error("Erro ao obter dados");
                }

                const temp = data.main.temp;
                cityName.textContent = `${city}`;
                temperature.textContent = `🌡 Temperatura atual: ${temp}°C`;
                suggestion.textContent = getClothingSuggestion(temp);

                // Buscar dados de médias anuais
                const avgData = await fetch("./data/cityData.json");
                const avgJson = await avgData.json();
                annualAverage.textContent = `Média anual: ${avgJson[city]}°C`;

            } catch (error) {
                cityName.textContent = "Erro ao buscar clima!";
                temperature.textContent = "";
                suggestion.textContent = "";
                annualAverage.textContent = "";
            }
        });
    });

    function getClothingSuggestion(temp) {
        if (temp >= 30) return "Roupas leves e frescas são recomendadas!";
        if (temp >= 20) return "Uma roupa confortável e leve!";
        if (temp >= 10) return "Leve um casaco!";
        return "Use roupas quentes e um casaco!";
    }
});
