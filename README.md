# Photos App Clone

Este proyecto es una recreación de la aplicación de Photos de iOS utilizando React Native y Expo. La aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre fotos y álbumes.

## Requisitos

- Node.js
- Expo CLI
- Git
- Firebase (para el backend)
- Postman (para pruebas de API)

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/ios-photos-clone.git
    cd ios-photos-clone
    ```

2. Instala las dependencias:

    ```bash
    npm install
    npm intall express
    npm install nodemon
    npm install @react-navigation/native-stack
    npm install @react-navigation/bottom-tabs 
    npm install --save react-native-vector-icons
    ```

3. Configura Firebase:

    - Crea un proyecto en Firebase.
    - Configura Firestore en modo de prueba.
    - Agrega las credenciales de Firebase en un archivo `firebaseConfig.js` en el directorio `config`:

    ```javascript
    // config/firebaseConfig.js
    import firebase from 'firebase/app';
    import 'firebase/firestore';

    const firebaseConfig = {
        apiKey: "TU_API_KEY",
        authDomain: "TU_AUTH_DOMAIN",
        projectId: "TU_PROJECT_ID",
        storageBucket: "TU_STORAGE_BUCKET",
        messagingSenderId: "TU_MESSAGING_SENDER_ID",
        appId: "TU_APP_ID"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const db = firebase.firestore();

    export default db;
    ```

4. Ejecuta la aplicación en Expo:

    ```bash
    expo start
    ```

## Uso de Postman para Operaciones CRUD

### Operaciones CRUD para Fotos

#### Crear Foto

- **Método**: POST
- **URL**: `http://localhost:3000/photos`
- **Body**:

    ```json
    {
      "title": "Vacation Photo",
      "description": "Photo from my last vacation",
      "url": "https://example.com/vacation.jpg",
      "albumId": "12345"
    }
    ```

#### Obtener Todas las Fotos

- **Método**: GET
- **URL**: `http://localhost:3000/photos`

#### Obtener Foto por ID

- **Método**: GET
- **URL**: `http://localhost:3000/photos/{id}`

#### Actualizar Foto

- **Método**: PUT
- **URL**: `http://localhost:3000/photos/{id}`
- **Body**:

    ```json
    {
      "title": "Updated Vacation Photo",
      "description": "Updated description for my vacation photo",
      "url": "https://example.com/updated_vacation.jpg"
    }
    ```

#### Eliminar Foto

- **Método**: DELETE
- **URL**: `http://localhost:3000/photos/{id}`

### Operaciones CRUD para Álbumes

#### Crear Álbum

- **Método**: POST
- **URL**: `http://localhost:3000/albums`
- **Body**:

    ```json
    {
      "name": "Family Vacation",
      "description": "Photos from our family vacation",
      "coverPhotoUrl": "https://example.com/cover.jpg"
    }
    ```

#### Obtener Todos los Álbumes

- **Método**: GET
- **URL**: `http://localhost:3000/albums`

#### Obtener Álbum por ID

- **Método**: GET
- **URL**: `http://localhost:3000/albums/{id}`

#### Actualizar Álbum

- **Método**: PUT
- **URL**: `http://localhost:3000/albums/{id}`
- **Body**:

    ```json
    {
      "name": "Updated Family Vacation",
      "description": "Updated description for our family vacation",
      "coverPhotoUrl": "https://example.com/updated_cover.jpg"
    }
    ```

#### Eliminar Álbum

- **Método**: DELETE
- **URL**: `http://localhost:3000/albums/{id}`
