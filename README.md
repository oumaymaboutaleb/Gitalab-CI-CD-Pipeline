# nodejs-express-mysql
#### A simple CRUD implementation of REST API using Nodejs, Express, seqealize and Mysql. This repo also includes the test cases which is executed using Mocha and Chai and code coverage is taken care by nyc. This readme file is divided into three different section.
##### 1. Installation : Deploying the development version of api
##### 2. Developing API : To dive into the code blocks of api development
##### 3. Writing Test cases : Writing test cases and execute it 
###### Note: The development of api had been done in CentOS7 and deployed using node:10 docker image backed by AWS RDS MYSQL and called via Postman. 

### Installation
1. Clone the repository ```https://github.com/nikitsrj/nodejs-rest-student.git``` and navigate to that directory
2. Create the Database in Mysql with the name  ``student_dev``.</br>
   ```$ mysql -u <username> -p <password> ``` </br>
   ```mysql> create DATABASE student_dev```</br>
   ```mysql> exit```</br>
 Note: Pls make sure the db user should have access to the database, incase you are using root user to create db and trying to use another db user for application.</br>
3. Modify the ```config/config.json``` file (Need to install ```jq``` and ```sponge``` incase it's not present in your OS, else you can manually modify the file as well) </br>
    ```$ jq '.development.username = "<dbuser>"' config/config.json  | sponge config/config.json ``` </br>
    ```$ jq '.development.password = "<dbpassword>"' config/config.json  | sponge config/config.json```</br>
    ```$ jq '.development.host = "<databasehost.rds.amazonaws.com>"' config/config.json  | sponge config/config.json```</br>
It is recommended to use any secret management like vault or cyberark for any secrets</br>
###### Incase you want to deploy it in docker image, then jump directly to step 7.
4. Install the necessary modules</br>
    ```$ npm install -g sequelize-cli```</br>
    ```$ npm install```</br>
5. Migrate the DB schema in RDS Mysql
    ```$ npm run db:migrate```</br>
6. Now to deploy it into dev.</br>
    ```$ npm start```</br>
7. (Only for docker deployment)</br>
    ``` docker build -t nodejs-express-mysql:v1 .```</br>
    ``` docker run -d -p 80:3000 -p 3306:3306 --name nodejs-api-app nodejs-express-mysql:v1```</br>
#### API Endpoints </br>
1> **GET  /students** </br>
     Incase you have ingested some data in the database during the development of code, then you will be able to see the students details like below</br>
     ![get/students](https://github.com/nikitsrj/nodejs-rest-student/blob/main/images/Screenshot_20201031_065113.png) </br>
     else you will be able to have **200 status OK** with output **[]**. 
###### You can use hostname or IP of server inplace of locahost.

2> **POST /students** </br>
     You need to pass json body with students details to push the data in database.
     
