<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repo
2. Ejecutar

```
yarn install
````
3. Tener Nest CLI instalado
```
npm -i @nestjs/cli
```

4. Levantar la base de datos
```
docker-compose up -d
```

5. Clonar archivo __.env.template__ y renombrar la copia a __.env__

6. Llenar las variables de entorno definidas en __.env__

7. Ejecutar la la aplicación en dev
```
yarn start:dev
```

8. Reconstruir base de datos con semilla
```
http://localhost:3000/api/v2/seed
``````

## Stack usado
* MongoDB
* Nest


# Production Build
1. Crear el archivo ```.env.prod```
2. Llenar las variables de entorno de prod
3. Crear la nueva imagen
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```