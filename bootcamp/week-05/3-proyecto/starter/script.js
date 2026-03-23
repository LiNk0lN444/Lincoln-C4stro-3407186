// ============================================
// PROYECTO SEMANA 05: Clasificador LogistiTrack
// Condicionales — if/else, ternario, switch, ??, ?.
// ============================================

// ============================================
// SECCIÓN 1: Datos del elemento de tu dominio
// ============================================

// Definimos los datos de un lote de mercancía
const elementName = "Cemento Gris Estructural"; 
const elementStatus = "active"; // "active" o "archived"
const elementValue = 15;        // Cantidad de unidades (Stock)
const elementType = "construccion"; // Categoría del producto
const elementInfo = {
    detail: "Bultos de 50kg - Almacenar en lugar seco",
    warehouseLocation: "Pasillo A - Estante 4"
};

// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

// Clasificamos el nivel de inventario según la cantidad (elementValue)
let classification;

if (elementValue === 0) {
    classification = "AGOTADO - Pedir urgente";
} else if (elementValue < 20) {
    classification = " STOCK BAJO - Reabastecer pronto";
} else if (elementValue >= 20 && elementValue <= 100) {
    classification = "STOCK NORMAL - Operación estable";
} else {
    classification = "EXCESO DE STOCK - Optimizar espacio";
}

// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

// El ternario es un "if" rápido de una sola línea
const statusLabel = elementStatus === "active" ? "Disponible para Despacho" : "Lote Archivador/Bloqueado";

// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

// Usamos switch para asignar etiquetas según el tipo de producto
let typeLabel;

switch (elementType) {
    case "construccion":
        typeLabel = " Materiales de Obra Pesada";
        break;
    case "herramientas":
        typeLabel = " Equipo y Maquinaria Manual";
        break;
    case "seguridad":
        typeLabel = " Elementos de Protección Personal";
        break;
    default:
        typeLabel = " Categoría General de Bodega";
}

// ============================================
// SECCIÓN 5: Valor por defecto con ?? (Nullish Coalescing)
// ============================================

// El operador ?? asegura que si algo es null o undefined, el sistema no falle
const displayName = elementName ?? "Producto sin Nombre Registrado";
const infoDetail = elementInfo?.detail ?? "Sin detalles técnicos adicionales";

// ============================================
// SECCIÓN 6: Acceso seguro con ?. (Optional Chaining)
// ============================================

// El operador ?. evita que el código se rompa si 'elementInfo' no existiera
const warehouseZone = elementInfo?.warehouseLocation ?? "Zona no especificada";

// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

console.log("=".repeat(45));
console.log("   LOGISTITRACK - FICHA DE CLASIFICACIÓN");
console.log("=".repeat(45));

console.log(` Producto:      ${displayName}`);
console.log(` Estado:        ${statusLabel}`);
console.log(` Clasificación: ${classification}`);
console.log(` Tipo:         ${typeLabel}`);
console.log(` Detalle:       ${infoDetail}`);
console.log(` Ubicación:     ${warehouseZone}`);

console.log("=".repeat(45));
console.log("       REPORTE GENERADO EXITOSAMENTE");
console.log("=".repeat(45));