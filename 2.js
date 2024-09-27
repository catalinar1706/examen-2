
// Ejercicio 1: Calculadora de Gases
// Crea una clase llamada Gas que permita calcular la masa de un gas utilizando la ecuación de los
// gases ideales: PV=nRTPV = nRTPV=nRT. La clase debe tener propiedades para la presión, el
// volumen y la temperatura, así como un método para calcular la masa del gas dado su masa
// molecular. Implementa getters y setters para acceder a estas propiedades.



class Gas {
    // Constructor que inicializa la presion, el volumen y la temperatura
    constructor(presion, volumen, temperatura) {
        this.presion = presion; // Presion del gas en atmosferas
        this.volumen = volumen; // Volumen del gas en litros
        this.temperatura = temperatura; // Temperatura en Kelvin
    }

    // Getter para obtener la presión
    getPresion() {
        return this.presion; // Devuelve la presión
    }

    // Setter para establecer la presión
    setPresion(presion) {
        this.presion = presion; // Establece la presión
    }

    // Getter para obtener el volumen
    getVolumen() {
        return this.volumen; // Devuelve el volumen
    }

    // Setter para establecer el volumen
    setVolumen(volumen) {
        this.volumen = volumen; // Establece el volumen
    }

    // Get para obtener la temperatura
    getTemperatura() {
        return this.temperatura; // Devuelve la temperatura
    }

    // Set para establecer la temperatura
    setTemperatura(temperatura) {
        this.temperatura = temperatura; // Establece la temperatura
    }
}

// Clase derivada que representa un gas específico
class GasIdeal extends Gas {
    // Constructor que inicializa el gas ideal con las propiedades de la clase base y su masa molecular
    constructor(presion, volumen, temperatura, masaMolecular) {
        super(presion, volumen, temperatura); // Llama al constructor de la clase base
        this.masaMolecular = masaMolecular; // Masa molecular del gas en g/mol
    }

    // Metodo para calcular la masa del gas
    calcularMasa() {
        // Constante R en atm·L/(mol·K) = 0.0821
        let R = 0.0821; 
        // Calcula el numero de moles usando la ecuacion PV = nRT
        let n = (this.presion * this.volumen) / (R * this.temperatura);
        // Calcula la masa del gas en gramos
        return n * this.masaMolecular; 
    }
}



// Creo una instancia de GasIdeal
let gas = new GasIdeal(1, 22.4, 273.15, 44.01); // Presión = 1 atm, Volumen = 22.4 L, Temperatura = 273.15 K, Masa molecular = 44.01 g/mol

// Calculo y muestro la masa del gas
let masaGas = gas.calcularMasa(); // Llama al metodo para calcular la masa
console.log(`La masa del gas es: ${masaGas.toFixed(2)} g`); // Imprime la masa calculada