# 구동 방법(배포 전)

1. git clone
2. npm i -> cd client -> npm i
3. 최상단 경로에 .env (MONGO_URI: mongoDB 연결 주소 설정, PORT: 7000, JWT_SECRET: 원하는 시크릿 키워드) 설정
4. client 경로에 .env (REACT_APP_BASIC_SERVER_URL: http://localhost:7000) 설정