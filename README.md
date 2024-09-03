# Prueba Técnica para el Rol FRONTEND DEVELOPER Nera

## Descripción

Esta aplicación permite a los usuarios abrir una nueva cuenta bancaria y realizar transacciones bancarias como depósitos y retiros. Utiliza las siguientes tecnologías:

- **Next.js**
- **React**
- **TypeScript**
- **Redux**
- **React Query**

## Características

1. **Crear Nueva Cuenta**: Los usuarios pueden introducir el nombre, el número de cuenta y el saldo inicial.
2. **Realizar Transacciones**: Los usuarios pueden realizar depósitos y retiros, introduciendo el monto de la transacción y seleccionando el tipo de transacción.
3. **Mostrar Balance Actualizado**: La aplicación muestra el balance actualizado de la cuenta después de cada transacción.
4. **Gestión del Estado**: La aplicación utiliza Redux para la gestión del estado.

## Instalación

1. **Clona el Repositorio**

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git

2. **Navega al Directorio del Proyecto**

cd bank-app

3. **Instala las Dependencias**

npm install

4. **Inicia el Servidor de Desarrollo**

npm run dev

La aplicación estará disponible en http://localhost:3000.

## Estructura del Proyecto

/components: Componentes de la interfaz de usuario.
/redux: Configuración de Redux y slices.
/pages: Páginas de Next.js.
/styles: Estilos globales y específicos de componentes.

## Pruebas

Actualmente, no hay pruebas automatizadas configuradas para este proyecto. Si decides agregar pruebas en el futuro, puedes utilizar el comando:

npm test

## Mock de Backend

Como el backend no está implementado, se han utilizado mocks para simular la funcionalidad de las API. Los endpoints mock son:

POST /accounts: Crea una nueva cuenta bancaria.
GET /accounts/<id>/balance: Obtiene el balance de la cuenta bancaria.
POST /transactions: Realiza una transacción bancaria.
