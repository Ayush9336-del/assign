 var temperatureConverter = {
      celsius: 0,

      read: function () {
        celsius = Number(
          document.getElementById("celsius").value
        );
      },

      toFahrenheit: function () {
        return (celsius * 9) / 5 + 32;
      },

      toKelvin: function () {
        return celsius + 273.15;
      },

      display: function () {
        temperatureConverter.read();

        document.getElementById("f").innerText =
          "Fahrenheit: " + temperatureConverter.toFahrenheit();

        document.getElementById("k").innerText =
          "Kelvin: " + temperatureConverter.toKelvin();

        console.log("Celsius:", temperatureConverter.celsius);
        console.log("Fahrenheit:", temperatureConverter.toFahrenheit());
        console.log("Kelvin:", temperatureConverter.toKelvin());
      }
    };