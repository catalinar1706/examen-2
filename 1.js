// Ejercicio 2: Restaurante de Comidas
// Desarrolla un sistema básico de pedidos para un restaurante. Crea una clase Plato con nombre y
// precio. Crea una clase Menu que gestione una lista de platos. Implementa una clase Pedido para
// añadir platos y calcular el total a pagar. Finalmente, crea una clase Restaurante que permita
// gestionar menús y pedidos de diferentes mesas.

class Plato {
    // Constructor que recibe el nombre y el precio del plato
    constructor(nombre, precio) {
        this.nombre = nombre; // Asigna el nombre a la propiedad 'nombre'
        this.precio = precio; // Asigna el precio a la propiedad 'precio'
    }
}

// Clase que representa un menu que contiene platos
class Menu {
    // Constructor que inicializa una lista vacia de platos
    constructor() {
        this.platos = []; // Inicializa la propiedad 'platos' como un arreglo vacío
    }

    // agregar un plato al menú
    agregarPlato(plato) {
        this.platos.push(plato); // Agrega el plato al arreglo de platos
    }

    //  mostrar el menú con los platos disponibles
    mostrarMenu() {
        console.log("Menú del Restaurante:"); // Imprime el título del menú
        this.platos.forEach(plato => { // Recorre cada plato en el menú
            console.log(`${plato.nombre}: $${plato.precio}`); // Imprime el nombre y precio de cada plato
        });
    }
}

// Clase que representa un pedido en el restaurante
class Pedido {
    // Constructor que inicializa una lista vacia de platos en el pedido
    constructor() {
        this.platosPedido = []; // Inicializa la propiedad 'platosPedido' como un arreglo vacío
    }

    //  agregar un plato al pedido
    agregarPlato(plato) {
        this.platosPedido.push(plato); // Agrega el plato al arreglo de platos del pedido
    }

    // calcular el total a pagar por el pedido
    calcularTotal() {
        return this.platosPedido.reduce((total, plato) => total + plato.precio, 0); // Suma los precios de todos los platos en el pedido
    }

    //  mostrar el detalle del pedido
    mostrarPedido() {
        console.log("Pedido Actual:"); // Imprime el titulo del pedido
        this.platosPedido.forEach(plato => { // Recorre cada plato en el pedido
            console.log(`${plato.nombre}: $${plato.precio}`); // Imprime el nombre y precio de cada plato
        });
        // Imprime el total a pagar
        console.log(`Total a Pagar: $${this.calcularTotal()}`); 
    }
}

// Clase que representa un restaurante que gestiona menus y pedidos
class Restaurante {
    // Constructor que inicializa el nombre del restaurante y las propiedades de menús y pedidos
    constructor(nombre) {
        this.nombre = nombre; // Asigna el nombre del restaurante a la propiedad 'nombre'
        this.menus = {}; // Inicializa la propiedad 'menus' como un objeto vacio para almacenar los menus
        this.pedidos = {}; // Inicializa la propiedad 'pedidos' como un objeto vacio para almacenar los pedidos
    }

    // agregar un menú al restaurante
    agregarMenu(nombreMenu, menu) {
        this.menus[nombreMenu] = menu; // Asigna el menú al objeto 'menus' con el nombre proporcionado
    }

    // crear un nuevo pedido para una mesa específica
    crearPedido(mesa) {
        this.pedidos[mesa] = new Pedido(); // Crea un nuevo pedido y lo asigna a la mesa en el objeto 'pedidos'
    }

    //  agregar un plato a un pedido existente
    agregarPlatoAPedido(mesa, plato) {
        if (this.pedidos[mesa]) { // Verifica si hay un pedido para la mesa
            this.pedidos[mesa].agregarPlato(plato); // Agrega el plato al pedido de la mesa
        } else {
            console.log(`No hay un pedido creado para la mesa ${mesa}.`); // Mensaje si no hay pedido para la mesa
        }
    }

    // mostrar el pedido de una mesa específica
    mostrarPedido(mesa) {
        if (this.pedidos[mesa]) { // Verifica si hay un pedido para la mesa
            this.pedidos[mesa].mostrarPedido(); // Muestra el detalle del pedido de la mesa
        } else {
            console.log(`No hay un pedido creado para la mesa ${mesa}.`); // Mensaje si no hay pedido para la mesa
        }
    }
}



// Creo un nuevo restaurante
let restaurante = new Restaurante("Mi Restaurante");

// Creo un menú y agrego platos
let menuDesayuno = new Menu();
menuDesayuno.agregarPlato(new Plato("Tostadas", 5));
menuDesayuno.agregarPlato(new Plato("Cafe", 2));
menuDesayuno.agregarPlato(new Plato("Huevos Revueltos", 6));

// Agrego el menu al restaurante
restaurante.agregarMenu("Desayuno", menuDesayuno);

// Muestra el menú del restaurante
menuDesayuno.mostrarMenu();

// Creo un pedido para la mesa 1
restaurante.crearPedido(1);

// Agrego platos al pedido de la mesa 1
restaurante.agregarPlatoAPedido(1, new Plato("Tostadas", 5));
restaurante.agregarPlatoAPedido(1, new Plato("Cafe", 2));

// Muestra el pedido de la mesa 1
restaurante.mostrarPedido(1);