// Crear un array de objetos de componentes de hardware
const hardwareComponents = [
  {name: "Tarjeta gráfica", type: "GPU", brand: "Nvidia", price: 300},
  {name: "Procesador", type: "CPU", brand: "Intel", price: 200},
  {name: "Placa madre", type: "Motherboard", brand: "ASUS", price: 150},
  {name: "Memoria RAM", type: "RAM", brand: "Corsair", price: 100},
  {name: "Disco duro", type: "Storage", brand: "Seagate", price: 50}
];

// Crear un array vacío para almacenar los componentes agregados al carrito de compras
let shoppingCart = [];

// Función para buscar componentes de hardware por tipo
function searchByType(type) {
  return hardwareComponents.filter(component => component.type === type);
}

// Función para buscar componentes de hardware por marca
function searchByBrand(brand) {
  return hardwareComponents.filter(component => component.brand === brand);
}

// Función para buscar componentes de hardware por precio
function searchByPrice(price) {
  return hardwareComponents.filter(component => component.price <= price);
}

// Función para agregar componentes al carrito de compras
function addToCart(component) {
  shoppingCart.push(component);
}

// Bucle para navegar por el menú
while (true) {
  // Pedir al usuario que seleccione una opción
  const option = prompt("Seleccione una opción: 1) Buscar por tipo 2) Buscar por marca 3) Buscar por precio 4) Agregar al carrito 5) Ver carrito 6) Salir");

  // Condicional para ejecutar la acción seleccionada
  if (option === "1") {
      const type = prompt("Ingrese el tipo de componente que desea buscar (GPU, CPU, Motherboard, RAM, Storage)");
      const results = searchByType(type);
      console.log(results);
  } else if (option === "2") {
      const brand = prompt("Ingrese la marca del componente que desea buscar (Nvidia, Intel, ASUS, Corsair, Seagate)");
      const results = searchByBrand(brand);
      console.log(results);
  } else if (option === "3") {
      const price = prompt("Ingrese el precio máximo del componente que desea buscar");
      const results = searchByPrice(price);
      console.log(results);
  } else if (option === "4") {
      const componentIndex = prompt("Ingrese el número del componente que desea agregar al carrito, 0 (Tarjeta Grafica), 1(Procesador), 2(Motherboard), 3(RAM), 4(Disco Duro))");
      const component = hardwareComponents[componentIndex];
      addToCart(component);
      console.log("Componente agregado al carrito");
  } else if (option === "5") {
      console.log
      (shoppingCart);
    } else if (option === "6") {
    break;
    } else {
    console.log("Opción inválida, por favor seleccione una opción válida.");
    }
    }