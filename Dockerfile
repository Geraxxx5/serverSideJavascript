# get the lastest mysql image
FROM mysql:latest

#Set environment variables for MySQL
ENV MYSQL_DATABASE=blog_zelda
ENV MYSQL_ROOT_PASSWORD=root_password

# USer and password for mysql
ENV MYSQL_USER=blog_user
ENV MYSQL_password=blog_password

COPY schema.sql ./docker-entrypoint-initdb.d/