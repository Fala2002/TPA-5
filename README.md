# **Web Service & RESTful API for ToDoList Application**

## **Built With**
- express.js
- mongoose
- mongodb
- jsonwebtoken
- bcrypt
- dotev

## **How To Use**
- Clone repository
 ``git clone https://github.com/Fala2002/TPA-5``
- Menginstall semua dependencies, seperti express, mongoose, nodemon, jsonwebtoken, bcrypt, dotev dengan cara
 ```
 npm install express
 npm install mongoose
 npm install -D nodemon
 npm install jsonwebtoken
 npm install bcrypt
 npm install dotev
 ```
- Menjalankan project
 ``npm run dev``

## **Spesifikasi API**
### **User**
1. **Get All User**, Untuk mendapatkan semua data user
    - Methods : get
    - Endpoint : /user
    - Body :
      ```
      {
        "name": "String",
        "email": "String",
        "password": "String"  
      } 
      ```
    - Respons :
      ```
      {
        Jika berhasil :
        "managed to get data"

        Jika gagal :
        console.log(error)
      }
      ```

2. **Get User By Id**, Untuk mendapatkan data user berdasarkan id
    - Methods : get
    - Endpoint : /user/id
    - Body :
      ```
      {
        "name": "String",
        "email": "String",
        "password": "String"  
      } 
      ```
    - Respons :
      ```
      {
        Jika berhasil :
        "managed to get data"

        Jika gagal :
        "failed to get data"
      }
      ```

3. **Register**, untuk membuat data user baru
    - Methods : post
    - Endpoint : /user/register
    - Body :
      ```
      {
        "name": "String",
        "email": "String",
        "password": "String"  
      } 
      ```
    - Respons :
      ```
      {
        message: "successfully added data"
      }
      ```

4. **Login**, Masuk ke aplikasi  saat sudah mendapat akses
    - Methods : post
    - Endpoint : /user/login
    - Body :
      ```
      {
        "name": "String",
        "email": "String",
        "password": "String"  
      } 
      ```
    - Respons :
      ```
      {
        Jika berhasil :
        message: "logged in successfully", token

        Jika gagal :
        message:"failed login"
      }
      ```

### **Tugas**
1. **Get All Tugas**, untuk mendapatkan semua data tugas
    - Methods : get
    - Endpoint : /tugas
    - HTTP Header:
     - authorization: token
    - Respons :
      ```
      {
        "message": "string",
        "data":[
            {
                "tittle": "String",
            "description": "String",
            "isDone": "Boolean",
            "user": {
                "_id": "ObjectId",
                "name": "string"
            }
            }
        ]
      } 
      ```
  
2. **Get All Tugas**, untuk mendapatkan data tugas berdasarkan id
    - Methods : get
    - Endpoint : /tugas/id
    - HTTP Header:
     - authorization: token
    - Respons :
      ```
      {
        "message": "string",
        "data": {
            "_id": "ObjectID",
            "tittle": "String",
            "description": "String",
            "isDone": Boolean,
            "user": "ObjectID"
        }
      }
      ```

3. **Add Tugas**, untuk menambahkan data tugas
    - Methods : post
    - Endpoint : /tugas
    - HTTP Header:
     - authorization: token
    - Respons :
      ```
        {
            "message": "successfully added data"
        }
      ```

4. **Delete Tugas By ID**, untuk menghapus data tugas berdasarkan id
    - Methods : delete
    - Endpoint : /tugas/id
    - HTTP Header:
     - authorization: token
    - Respons :
      ```
      {
        "message":"successfully deleted data",
        "data":{
            "_id": "ObjectID",
            "tittle": "String",
            "description": "String",
            "isDone": Boolean,
            "user": "ObjectID"
        }
      }
      ```

5. **Delete All Tugas**, untuk menghapus semua data tugas
    - Methods : delete
    - Endpoint : /tugas
    - HTTP Header:
     - authorization: token
    - Respons :
      ```
      {
        "message":"successfully deleted data",
        "data":{
            "_id": "ObjectID",
            "tittle": "String",
            "description": "String",
            "isDone": Boolean,
            "user": "ObjectID"
        }
      }
      ```

6. **Update Tugas By ID**, untuk update data tugas berdasarkan id
    - Methods : put
    - Endpoint : /tugas/id
    - HTTP Header:
     - authorization: token
    - Respons :
      ```
      {
        "message": "Succes updated tugas"
      }
      ```
