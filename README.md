
## To run this app it is necesary to fun the following commands in order:

Install Cors unblock to accept Cross origin calls  at https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=en
`npm install`
`npm start`


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

## Preguntas Teoricas

1. Explique la diferencia entre inputs controlados y no controlados.
.
  La diferencia entre un input controlado y no controlado es que los controlados poseen una funcion bindeada al evento que producen que maneja el estado de la misma, controlando la data a tiempo real y de esta forma podemos utilizar estos datos obtenidos sin necesidad de refrescar la pagina. Los no controlados funcionan en html porque anteriormente cuando se hacia submit de esta data, toda la pagina refrescaba para hacer la peticion o presentar un output.

2. ¿Cómo prevenir que los componentes vuelvan a ser re-renderizados?
.
  Hay varias formas de hacer que un componente no se re-renderize, la mas popular siendo la memoizacion de la data que este maneja, esto se puede logar utilizando el hook useMemo() o tambien useCallback(), como tambien hay otras librerias de terceros que nos ayudan a optimizar las llamadas que se hacen a las APis retornando un cache si se evalua que esta se ha realizado anteriormente con los mismos parametros.

3. ¿Qué son los HOC? Agregar ejemplo.
.
  El significado mas basico que Higher Order Component son aquellos componentes lo cuales como aprametros aceptan una funcion y retornan una o mas funciones, esto se puede utilizar a nivel estructural para sacar logica de componentes que no necesitan manejarla, esto quiere decir que nos permite la creacion de componentes mas puros.

  Los ejemplos mas populares y utilizados a costumbre son las funcionen map, filter y forEach, las cuales aceptan una funcion como parametros para retornar resultados sobre los arrays que se estan manejando.


4. ¿Que es React Redux?
. 
  Redux es una libreria de terceros, la cual nos provee una cantidad de soluciones para el manejo de estado global en los proyectos desarrollados en react, la cual maneja un modelo de data basado en View-Actions-State la cual nos permite crear una estructura de codigo mas declarativa, asi como tambien nos permite tomar accion antes el problema de mutabilidad y esta se volvio una necesidad antes de la implementacion de un relativamente nuevo hook llamado useContext() con el cual tambien se puede manejar un estado global con menos restricciones que redux.

5. ¿Para qué sirven las ‘Arrow function’ en react?
.
Esta se utilizan para la creacion de componentes puros, con los cuales luego de la implementacion de la version 18 de react podemos utilizar hooks, con estos podemos crear componentes puramente funcionales los cuales pueden manejar estar local y recibir props sin la necesidad de una clase. Estas tambien nos permiten un mejor manejo del scope lo cual separa cada variable y funcion del estado global, lo que solia generar problemas logicos en la app debido al hoisting y la declaracion de variables repetidas. 