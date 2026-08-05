# Explicación de cada ejemplo — `objetos-personaje.js`

Repaso línea por línea de cada `console.log` del archivo, con su salida real y el porqué.

---

## Ejemplo 1 — Imprimir el objeto completo

```javascript
console.log(personaje);
```

**Salida:**
```
{
  nombre: 'tony stark',
  codeName: 'iron man',
  vivo: false,
  edad: 40,
  coords: { lat: 34.034, lng: -118.7 },
  trajes: [ 'MARK I', 'MARK V', 'HulkBuster' ],
  direccion: { zip: '10880, 90265', ubicacion: 'malibu, california' },
  'ultima-pelicula': 'infinity war'
}
```

**Qué pasa:** cuando le pasas un objeto completo a `console.log`, lo imprime expandido, con cada clave y su valor. Fíjate que `'ultima-pelicula'` aparece con comillas en la salida — la consola te está mostrando que esa clave necesitó comillas al declararse (por el guion), a diferencia de `nombre` o `edad` que no las necesitan.

---

## Ejemplo 2 — Notación de punto

```javascript
console.log("nombre", personaje.nombre);
```

**Salida:** `nombre tony stark`

**Qué pasa:** `personaje.nombre` entra al objeto y busca la clave `nombre`. Como `"nombre"` es un identificador válido (sin espacios ni caracteres raros), el punto funciona sin problema.

---

## Ejemplo 3 — Notación de corchetes (mismo resultado)

```javascript
console.log("nombre", personaje["nombre"]);
```

**Salida:** `nombre tony stark`

**Qué pasa:** exactamente el mismo resultado que el ejemplo 2. La diferencia no está en el resultado, sino en la sintaxis: aquí le pasas el nombre de la clave como **string literal** entre corchetes. Sirve para demostrar que ambas notaciones son intercambiables cuando la clave es simple.

---

## Ejemplo 4 — Otra propiedad simple

```javascript
console.log("edad", personaje.edad);
```

**Salida:** `edad 40`

**Qué pasa:** acceso directo con punto a una propiedad numérica. Nada distinto a los anteriores, solo confirma que no importa el tipo de dato del valor (string, número, lo que sea), la sintaxis de acceso es la misma.

---

## Ejemplo 5 — Acceso a objeto anidado (nivel 1)

```javascript
console.log("coords", personaje.coords.lat);
```

**Salida:** `coords 34.034`

**Qué pasa:** aquí hay **dos accesos encadenados**. Primero `personaje.coords` entra al objeto anidado (`{ lat: 34.034, lng: -118.70 }`), y luego `.lat` saca la propiedad `lat` de ESE objeto interno. Es como abrir una caja dentro de otra caja.

---

## Ejemplo 6 — Acceso a objeto anidado (otra propiedad)

```javascript
console.log("coords:", personaje.coords.lng);
```

**Salida:** `coords: -118.7`

**Qué pasa:** mismo patrón que el ejemplo 5, pero pidiendo `lng` en vez de `lat`. Nota que `-118.70` se imprime como `-118.7` — JavaScript no guarda ceros decimales innecesarios en los números, es solo una cuestión de representación, el valor sigue siendo el mismo.

---

## Ejemplo 7 — `.length` de un array dentro de un objeto

```javascript
console.log("numero de trajes:", personaje.trajes.length);
```

**Salida:** `numero de trajes: 3`

**Qué pasa:** `personaje.trajes` accede al array `["MARK I", "MARK V", "HulkBuster"]`, y `.length` cuenta cuántos elementos tiene. No importa que el array esté "dentro" de un objeto — una vez que llegas a él, se comporta como cualquier array normal.

---

## Ejemplo 8 — Acceso por índice fijo

```javascript
console.log("ultimo traje:", personaje.trajes[2]);
```

**Salida:** `ultimo traje: HulkBuster`

**Qué pasa:** los arrays se indexan desde `0`. Entonces: índice `0` = `"MARK I"`, índice `1` = `"MARK V"`, índice `2` = `"HulkBuster"`. Como sabes que hay 3 elementos, escribiste `[2]` a mano para llegar al último.

**El problema de este enfoque:** si mañana agregas un cuarto traje, `[2]` ya no apunta al último — apuntaría al tercero. Por eso existe el siguiente ejemplo.

---

## Ejemplo 9 — Acceso al último elemento sin saber cuántos hay

```javascript
console.log("ultimo traje:", personaje.trajes[personaje.trajes.length - 1]);
```

**Salida:** `ultimo traje: HulkBuster`

**Qué pasa (paso a paso):**
1. `personaje.trajes.length` → `3` (hay 3 trajes)
2. `3 - 1` → `2`
3. `personaje.trajes[2]` → `"HulkBuster"`

**Por qué es mejor que el ejemplo 8:** esta fórmula se ajusta sola. Si agregas un cuarto traje, `.length` pasaría a ser `4`, y `4 - 1 = 3` apuntaría automáticamente al nuevo último elemento — sin que tengas que tocar el código. Es el patrón estándar para "dame el último de un array" en JS, cuando no sabes de antemano cuántos elementos va a tener.

---

## Ejemplo 10 — Acceso dinámico con variable

```javascript
const x = "vivo";
console.log("vivo", personaje[x]);
```

**Salida:** `vivo false`

**Qué pasa (el más importante de todos):**
1. JS ve `personaje[x]` y primero necesita saber qué hay dentro de `x`.
2. Evalúa la variable `x` → su valor es el string `"vivo"`.
3. Ahora reemplaza mentalmente `x` por su valor: `personaje["vivo"]`.
4. Busca la clave `"vivo"` en el objeto → encuentra `false`.

**Diferencia con `personaje.x`:** eso buscaría una propiedad llamada literalmente `"x"`, que no existe en el objeto → daría `undefined`. Los corchetes son los únicos que permiten pasar el nombre de la clave **indirectamente**, a través de una variable, en vez de escribirlo fijo en el código.

---

## Ejemplo 11 — Clave con guion, obligatorio usar corchetes

```javascript
console.log("ultima-pelicula", personaje["ultima-pelicula"]);
```

**Salida:** `ultima-pelicula infinity war`

**Qué pasa:** aquí los corchetes no son opcionales, son **obligatorios**. Si escribieras `personaje.ultima-pelicula`, JavaScript interpretaría el guion como el operador de resta, y trataría de hacer `personaje.ultima MENOS pelicula` — un error, porque ni `ultima` ni `pelicula` existen como variables sueltas. Los corchetes con el string completo entre comillas (`"ultima-pelicula"`) son la única forma de acceder a claves que no son identificadores válidos en JS (con guiones, espacios, o que empiecen con número).

---

## Tabla comparativa de los 3 tipos de acceso usados

| Tipo de acceso | Ejemplo | Cuándo usarlo |
|---|---|---|
| Punto | `personaje.nombre` | Clave simple y fija, conocida al escribir el código |
| Corchetes + string fijo | `personaje["ultima-pelicula"]` | Clave con guiones/espacios/número al inicio |
| Corchetes + variable | `personaje[x]` | No sabes el nombre de la clave hasta que el programa corre |

