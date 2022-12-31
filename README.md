### Base Project

-   This project is base to ready!!

Proyecto base con un diseño de arquitectura MVC
└── base-project
├── src ............................ Carpeta raiz de la aplicacion backend.
│ ├── app.js ...................... Aplicacion principal, punto de entrada a las metodos del api que incluye su configuracion y rutas.
│ ├── index.js .................... Inicializacion de la aplicacion, aqui deberia ir tambien la Inicializacion e invocacion de conexion a BD.
│ ├── components .................. Folder que agrupa las funcionalidades por "componentes" o unidades de responsabilidad.
│ │ ├── auth .................... Ejemplo de un componente llamado Test.
│ │ │ ├── auth.controller.js .... Controlador de las peticiones del cliente, contiene la firma de los metodos disponibles para consumir en el api.
│ │ │ ├── auth.model.js .......... Representacion del modelo o unidad logica de negocio del componente
│ │ │ ├── auth.route.js .......... Configuracion de las rutas para el componente dentro del api, asi como la proteccion y uso de los middleware requeridos
│ │ │ └── auth.service.js ........ Logica y algoritmos para el correcto funcionamiento de los casos de uso del componente
│ │ └── test .................... Ejemplo de un componente llamado Test.
│ │ ├── test.controller.js .... Controlador de las peticiones del cliente, contiene la firma de los metodos disponibles para consumir en el api y se encarga de gestionar los recursos solicitados al service
│ │ ├── test.model.js .......... Representacion del modelo o unidad logica de negocio del componente
│ │ ├── test.route.js .......... Configuracion de las rutas para el componente dentro del api, asi como la proteccion y uso de los middleware requeridos
│ │ └── test.service.js ........ Logica y algoritmos para el correcto funcionamiento de los casos de uso del componente
│ ├── config ...................... Folder o agrupacion de configuraciones generales para el funcionamiento del app
│ │ ├── endpoints.js ............ example
│ │ └── secrets.js .............. Representacion de los parametros de configuracion especial o delicada presentes en el .env ó configuraciones de entorno, esto para delegar esta lectura desde este archivo
│ ├── enums ...................... Folder con la agrupacion de Enumeradores de la aplicaciones
│ │ └── httpCodes.js ............ enumerador con los codigos http
│ ├── helpers .................... Agrupacion de archivos utilitarios y de forma global para la aplicacion
│ │ ├── cryptography.js .......... Metodos utilitarios de encriptacion y relacionados
│ │ ├── jwt.js .................. Contiene los metodos para control de acceso mediante json web token, se puede reemplazar o agregar oauth
│ │ └── utils.js ................ metodos utilitarios transaversales, ejemplo conversiones, formateo.
│ └── network .................... Metodos de capa de red o configuracion, ejemplo cors, rutas, respuestas, seguridad de capa de red
│ ├── cors.js .................. Configuracion de CORS de la aplicacion
│ ├── middleware.js ............ Configuracion de seguridad para controlar el consumo de los recursos del api
│ ├── response.js .............. Metodos de respuesta normalizados para la aplicacion, estandar de respuesta.
│ └── routes.js ................ Configuracion de rutas, aqui se agregan las rutas especificas de cada componente.
├── .env .......................... Configuracion especial del entorno, manejo de secretos.
├── .gitignore ....................
├── LICENSE ........................ Datos de licencia.
├── package-lock.json ..............
├── package.json .................. Configuracion general de la app y gestion de paquetes.
├── CHANGELOG.md .................. Control de camnbios.
├── README.md ...................... Informacion general del proyecto, informacion relevante para su funcionamiento y funcionalidades.
└── TODO.md ........................ Control de cosas por hacer o pendientes.
