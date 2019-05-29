# Portal Web para Ticketbis

Ticketbis es un portal para la compra / venta de entradas entre particulares.
Nuestros usuarios se dirigen a nuestra pagina Home (home.html) desde donde se puede buscar la categoría para la que estas buscando comprar una entrada.

![fa5tnEy.png](http://i.imgur.com/9vfBy1W.png)

Al navegar a la pagina de categoría (category.html) se nos muestran todos los eventos relacionados con esa categoría.

![pwNGXg7.png](http://i.imgur.com/fRjezc3.png)

Cuando navegas a una pagina de evento (event.html) puedes ver todas las entradas que se están listando para ese evento.

![RJ8uPDW.png](http://i.imgur.com/GTHl5uT.png)

Por ultimo, nuestros usuarios tienen una sección (account.html) desde donde pueden ver las entradas que tienen a la venta.

![lr5uInW.png](http://i.imgur.com/1qonb1P.png)

Nuestros desarrolladores nos han proporcionado un API desde la cual podemos consultar toda la información de Ticketbis.
https://fake-tb-api.herokuapp.com/

## Requerimientos:

* Nuestros maquetadores nos han entregado las maquetas con todo el CSS embebido en el HTML, pero hay muchos estilos repetidos y esta forma hace que la modificación de los estilos de un elemento sea una tarea muy complicada. Una de las necesidades es organizas todos estos estilos en hojas de estilo.

* El buscador de Ticketbis, presente en la pagina Home y en la pagina de categoría, busca en las categorías disponibles en el API de Ticketbis ( https://fake-tb-api.herokuapp.com/categories ). Completa la funcionalidad para que el buscador ofrezca una funcionalidad _typeahead_ con las distintas categorías de Ticketbis.

* Desde la pagina de categoría (category.html) se han de mostrar los eventos relacionados con esa categoría ( https://fake-tb-api.herokuapp.com/categories/1/events ). Completa la funcionalidad para que los eventos cargados sean los correspondientes a esa categoría.

* Desde la pagina de evento (event.html) se han de mostrar las entradas disponibles (status=true) para ese evento ( https://fake-tb-api.herokuapp.com/tickets?eventId=71&status=true ). Completa la funcionalidad para que las entradas cargadas sean las correspondientes a ese evento.

* Desde la sección del usuario (account.html) se muestran todos las entradas que el usuario a publicado en Ticketbis ( https://fake-tb-api.herokuapp.com/tickets?sellerId=1 ).

* En la sección de usuario (account.html), las entradas se encuentran activas o inactivas (dependiendo del status que tengan, ver la respuesta del API) y esto se debe reflejar oscureciendo la entrada para que el usuario sea consciente del estado de esa entrada.

* En la sección de usuario (account.html), el usuario podrá activar o desactivar entradas y aunque esto no se almacene en ningún lado pero si que debería de reflejarse en el listado de entradas que el usuario esta viendo.

* En la sección de usuario (account.html), ademas nuestros usuarios podrán duplicar y borrar entradas a la venta, una vez mas esto no se almacena en ningún lado pero si que se ve reflejado en el listado de entradas que el usuario esta viendo.

## Necesitamos:
* Necesitamos que adaptes el código que nos han entregado nuestros maquetadores.
* Puedes usar tantos HTMLs como CSSs como JSs que necesites, y que consideres necesarios para el desarrollo de la prueba.
* Debes completar las maquetas con la funcionalidad solicitada en los requerimientos.
* Puedes ayudarte de Frameworks tanto de CSS como de JS, simplemente recuerda utilizar la herramienta adecuada para cada problema.
* Todos los eventos, y entradas mostradas en el HTML que te proporcionamos son estáticos, te proporcionamos un API para hacer que todos esos datos sean dinámicos.

## Bola Extra:
* Que los estilos vinieran proporcionados por un precompilador de CSS.
* En Ticketbis nos encanta que el Javascript sea no intrusivo, ¿te atreves?