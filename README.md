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
- Responsive CSS (Flex o Grid Layout): Pendiente
- PostCSS u otro: Pendiente
- Perfeccionar el CSS: Pendiente
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
- Testing sobre los Reducers: Se ha decidido hacer testing únicamente del testing de account debido a que es el más complejo.

No se ha buscado alcanzar una cobertura completa por falta de tiempo, se ha priorizado incoporar otras metodologías y tecnologías antes pero si dejando una base de testing bien asentada.

Para lanzar los teses únicamente es necesario lanzar la siguiente línea de comandos en la raiz del proyecto..

```
npm test
```

### React

- Se ha decidido prescindir de las clases de react para optar por un modelo funcional de cara a los hooks
- La estructura del proyecto separa en función de las páginas los componentes dejando en cada carpeta dentro de cada pod las dependencias que no se usan en otras páginas
- Se ha aplicado Atomic-Design en la componentización de la aplicación


### Redux

Se ha implementado un reducer por cada página

Para las llamadas API he diseñado un APIMiddleware para controlar todo el flujo de la aplicación más fácilmente que con redux-thunk. Esta estructura da un mayor control sobre los Promise que se lanzan

También he diseñado un APIMiddlewareResponse para aquellos casos concretos en los que hay que hacer un dispatch de una nueva acción justo después de la llegada de la respuesta.

Se ha conectado el react-router a redux mediante la librería de connected-react-router

## Implementaciones pendientes

Todas las implementaciones que se tenían pensadas para la demo se encuentran registradas como Issues abiertos en el propio repositorio de Github. Es posible que no de tiempo a implementarlas todas.

En caso de haber tenido más tiempo hubiese montado una infraestructura para un lanzamiento de teses automatizado al subir a github y un hook para el linter de typescript.

Otro punto de mejora hubiese sido meter en un contenedor de docker el frontend y mediante un docker-compose desplegarlo junto con un nginx o un apache.