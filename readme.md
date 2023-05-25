# ThawornAp เว็บแอปพลิเคชันสำหรับแจ้งปัญหาในหอขนาดเล็ก
เป็นแอปพลิเคชันที่พัฒนาด้วย React-Javascript

## ขั้นตอนในการติดตั้ง
1. ติดตั้ง node version 14.18.1 ที่นี่ https://nodejs.org/en/blog/release/v14.18.1

2. ติดตั้ง Docker desktop ที่นี่ https://docs.docker.com/desktop/install/windows-install/

3. ติดตั้ง git ผ่าน Command Prompt หรือ Powershell
```
winget install --id Git.Git -e --source winget
```
4. ใช้คำสั่ง git clone เพื่อทำการคัดลอกโปรเจกต์
```
git clone https://github.com/Final-Project-Peerawit/ThawornAp-backend.git
```
5. ติดตั้ง node module ผ่านคำสั่ง
```
npm install
```
6. เปิด Docker desktop โดยเราจะใช้ Docker เป็น container จากนั้นใช้คำสั่งด้านล่างเพื่อรัน mySQL
```
docker-compose up -d
```

## วิธีใช้งาน
เมื่อทำการติดตั้งตามขั้นตอนทั้งหมดแล้ว สามารถ run ตามคำสั่งด้านล่างได้เลย
```
npm run dev
```
