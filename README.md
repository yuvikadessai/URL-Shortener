# 🔗 URL Shortener

A simple **URL Shortener web application** built using **Node.js, Express, and MySQL**.  
This project allows users to enter a long URL and get a unique short link. When someone visits the short link, they are automatically redirected to the original URL.  

---

## 🚀 Features
- Generate short links for long URLs.  
- Store and manage links in a **MySQL database**.  
- Redirect users to the original URL when visiting the short link.  
- Clean and minimal frontend for quick testing.  

---

## 🛠️ Tech Stack
- **Backend**: Node.js, Express  
- **Database**: MySQL (using `mysql2` package)  
- **Frontend**: HTML, CSS  
- **Others**: ShortID (for generating unique short codes)  

---

## ⚡ How It Works
1. User enters a long URL into the form.  
2. App generates a short ID (e.g., `abc123`).  
3. Short ID + Original URL are stored in MySQL.  
4. Visiting `http://localhost:5000/abc123` redirects to the original URL.  

---

## 📂 Project Structure
