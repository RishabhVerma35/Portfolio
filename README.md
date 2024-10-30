# React Website with Visitor Count using AWS S3, API Gateway, and DynamoDB

![Architect](https://github.com/user-attachments/assets/fcc1407f-1207-49c0-81ae-663ee752f829)

## Overview

This project is a **React** website I built and hosted on **AWS S3**. It includes a **visitor count system** that I implemented using **AWS API Gateway**, **Lambda**, and **DynamoDB**. The website counts and displays the number of visitors in real-time.

## Features

- **Frontend**: Built using React.
- **Hosting**: Website is hosted on **Amazon S3** with static site hosting enabled.
- **Visitor Count**: Utilizes **AWS DynamoDB** to track visitors, with **API Gateway** and **Lambda** to handle the backend requests.

## Project Setup

### 1. Frontend (React)

The frontend is built using React, and the following commands can be used to set it up locally:

```bash
# Clone the repository
git clone https://github.com/yourusername/your-repo.git

# Navigate to the project directory
cd your-repo

# Install dependencies
npm install

# Start the React app
npm start
```

### 2. Backend (Visitor Count System)

The visitor count system is built with AWS services:

- **API Gateway** is set up to handle HTTP requests.
- A **Lambda function** is triggered by API Gateway to access **DynamoDB** and update or retrieve the visitor count.
- **DynamoDB** stores the count and ensures data is scalable and reliable.

### Steps to Set Up

1. **AWS S3 Setup**: 
   - Upload the React build files to an S3 bucket.
   - Enable static website hosting in S3.
   
2. **API Gateway & Lambda**:
   - Set up an API Gateway that triggers a Lambda function on HTTP requests.
   - The Lambda function reads from and writes to DynamoDB to store and retrieve the visitor count.

3. **DynamoDB Table**:
   - Create a DynamoDB table with a primary key for storing visitor counts.

