# Descripción de la prueba

## Tecnologías elegidas
- React: Se ha utilizado React para toda la arquitectura de la aplicación mediante componentes
- Redux: Para la lógica y el estado de la aplicación se ha hecho uso de Redux, que haciendo uso de event sourcing nos proporciona una capa muy eficaz para manejar toda la lógica y refrescar las páginas de Redux.
- Typescript: Con el objetivo de ahorrar tiempo en el desarrollo y evitar errores se ha hecho uso de Typescript, de esta forma tenemos tipados tanto los componentes como la lógica de la aplicación en Redux.
- Typelint: Se ha incorporado un linter de Typescript para mantener una cierta uniformidad en el código.
- WebPack: Se hace uso de el para pasar de ES6 a ES5
- Axios: Se ha hecho uso de la librería de axios debido a que podemos gestionar Promises y con Typescript tiparlas, aunque de momento queda pendiente de integrar este tipado mediante genéricos con el APIMiddleware.
- Testing:  Se han usado las siguientes tecnologías
    - Jest: como sistema de testing base para los componentes
    - Enzyme: Como una librería de apoyo para hacer teses más sencillos
    - Sion: Librería para emular fácilmente los eventos de los componentes y saber si se han llamado
- Perfeccionar el CSS: Se ha aplicado BEM y se ha anidado usando SCSS los estilos de los componentes junto con mejoras para hacer el diseño responsivo.
- InmutableJS e incrementar el tipado: Pendiente

## Estructura del proyecto

- docs: Documentación inicial que venía con la prueba
- src: Código del proyecto
    - common: Componentes de UI de uso general sin importar la página en la que nos encontremos
    - core: Clases de apoyo para uso global en el proyecto
    - pages: Las páginas que se cargan en el App.tsx en función del routing
    - pods: Con sus subcarpetas contienen todos los componentes de uso exclusivo de cada página.
    - state: Todos los ficheros relacionados con la lógica de la aplicación y redux.
- node_modules: Dependencias instaladas
- package.json: Dependencias y script de arranque y transpilación.
- package-lock.json: La versión actual de las dependencias que se instalan en node_modules
- .gitignore: Todos los ficheros que ignorará Git
- tsconfig.josn: La configuración de la transpilación de Typescript a ES6
- webpack.config.js: La configuración de webpack para la transpilación de ES6 a ES5 y también el proxy y otras configuraciones
- tslint.json: Archivo de configuración del linter de typescript

## Descripciones detalladas

### Webpack y Typescript

Se ha decidido no hacer uso de create-react-app para controlar mejor todo el flujo de la transpilación tal y como está configurado.
El transpilador de Typescript es capaz de transpilar a ES5, sin embargo tras investigar descubrí que tenía una serie de fallos muy puntuales y que recomendaban transpilar a ES6 y usar Webpack después para transpilar de ES6 a ES5. Este es el motivo por el que no se ha utilizado la base de código de facebook.
Además para evitar problemas de CORS se ha hecho uso del proxy que incorpora el devServer de Webpack.

Entonces el flujo de transpilación final sería el siguiente.

```
TS y TSX (Uso del transpilador de Typescript)   ->   ES6   (Uso de Webpack)   ->
```

También está acoplado el framework de Jest al flujo de transpilación de modo que podemos usar Typescript en los teses.

### Linter
Se ha hecho uso del linter de typescript llamado TSLinter al cual se le han excluido algunos parametros por defecto debido a la naturaleza del proyecto y otros se han eliminado mediante comentarios como los fallos que saltaban al hacer import de imagenes que se han reemplazado por require.


El linter se puede lanzar así.
```
tslint -c tslint.json 'src/**/*.tsx'
tslint -c tslint.json 'src/**/*.ts'
```

### Testing
Con el objetivo de realizar unos teses ágiles se ha decidido hacer uso de Jest, junto con Enzyme para buscar en esos teses los compomentes que vamos a testear y Sion para hacer unos mejores teses de los eventos que mandamos.

El resultado de estas decisiones son unos teses muy legibles y fácilmente mantenibles.

Se ha decidido hacer un testing limitado debido a la falta de tiempo únicamente como demostrador tecnológico. Los teses que se han aplicado han sido los siguientes.

- Teses puros de componentes: Se ha testeado el componente del SearchBox debido a que es el que más lógica incorpora;
- Testing sobre los Reducers: En los  teses de reducers he realizado la comprobación de una vez modificado el estado, comprobar el estado anterior para garantizar que no se ha visto alterado.

No se ha buscado alcanzar una cobertura completa por falta de tiempo, se ha priorizado incoporar otras metodologías y tecnologías antes pero si dejando una base de testing bien asentada.

Para lanzar los teses únicamente es necesario lanzar la siguiente línea de comandos en la raiz del proyecto..

```
npm test
```

## React

- Se ha decidido prescindir de las clases de react para optar por un modelo funcional de cara a los hooks
- La estructura del proyecto separa en función de las páginas los componentes dejando en cada carpeta dentro de cada pod las dependencias que no se usan en otras páginas
- Se ha aplicado Atomic-Design en la componentización de la aplicación


## Redux
### Reducers
Se ha implementado un reducer por cada página, a quedado pendiente de poder tipar las respuestas que llegan desde API y en caso de dar tiempo se implementará alguna solución como ImmutableJS o similares para garantizar el estado de la aplicación.

Para garantizar el correcto funcionamiento de los reducers, dado que es la lógica del negocio se ha incorporado teses a ellos comprobando el estado previo y el estado posterior.

### Middlewares
Para las llamadas API he diseñado un APIMiddleware para controlar todo el flujo de la aplicación más fácilmente que con redux-thunk. Esta estructura da un mayor control sobre los Promise que se lanzan

También he diseñado un APIMiddlewareResponse para aquellos casos concretos en los que hay que hacer un dispatch de una nueva acción justo después de la llegada de la respuesta.

Se ha conectado el react-router a redux mediante la librería de connected-react-router.

El APIMiddleware está fuertemente tipado para poder transferirle mediante tipos que respuesta va a tener a axios y luego redirigirla, sin embargo, aun no he conseguido acoplar el tipado a todo el flujo, tengo intención de una vez logrado extraerlo a una librería.
### CQS
Se ha separado las consultas al estado de la aplicación mediante queries para implementar así CQS. Si bien es cierto que las consultas son extremadamente simples y no hubiesen requerido de esta implementación, se ha decidido hacerlo así por mantener una estrucutra clara y segregada.

## CSS

A continuación explicaré todas las decisiones tomadas con respecto al CSS

### SCSS

Se ha incorporado a webpack la transpilación de SCSS a CSS. De esta forma hemos podido hacer uso de SCSS para anidar y hacer el CSS de los componentes mucho más legibles, lo que ayudará a mantener el código a largo plazo.

Por falta de tiempo no he conseguido sacar las variables globales a un SCSS del que todos puedan heredar. Esto quería hacerlo para poder sacar los colores generales y para definir la distancia mínima de margin y padding entre componentes y para estandarizar los tamaños y tipos de letra de todo el proyecto.

He hecho uso de una librería pública de la empresa Lin3s que tiene una serie de variables y métodos para scss ya definidos para poder definir fácilmente los tamaños mediante constantes y métodos que la librería ya tiene definidos.

### Atomic Design

Se ha distribuido el código seguiendo atomic design separando cada componente mediante react y cada uno tiene así un fichero SCSS que lo define.

### Responsive

Se ha incorporado el funcionamiento responsivo para funcionar con móviles, para ello se ha hecho uso de grid layout en la vista de eventos y en los botones de tickets de la cuenta. Además se ha cuidado otros aspectos de la interfaz como el botón de desactivar.

## Implementaciones pendientes

Todas las implementaciones que se tenían pensadas para la demo se encuentran registradas como Issues abiertos en el propio repositorio de Github. Es posible que no de tiempo a implementarlas todas.

Para organizar mejor el código me hubiese gustado crear archivos de index.ts y así poder modularizar más las dependencias.

En caso de haber tenido más tiempo hubiese montado una infraestructura para un lanzamiento de teses automatizado al subir a github y un hook para el linter de typescript.

Otro punto de mejora hubiese sido meter en un contenedor de docker el frontend y mediante un docker-compose desplegarlo junto con un nginx o un apache.
