# Railway

> [!WARNING]
> amvstrm's Website will be shutting down. Read more about the future of amvstrm [here](/the-future).

## Deploy button

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/qTzr6q?referralCode=SpsRaMStrmAffl)

## Manual deploy

### Prerequisites

- A Railway account with credits
- A GitHub account
- Git CLI installed on your local machine
- Node.js and npm installed on your local machine

### Step 1: Fork and Clone the Repository

1. Fork our repo by clicking on the "Fork" button on the top right corner of the repository page.
2. Clone the forked repository to your local machine using the Git CLI.

   ```bash
   git clone https://github.com/<your-username>/amvstrm.git
   ```

### Step 2: Install Dependencies (Optional)

1. Navigate to the cloned repository directory using the terminal.
2. Install the dependencies using npm.

   ```bash
   npm install
   ```

### Step 3: Set Environment Variables

Rename the .env.example to .env and then configure any thing for your liking.

```env
API_URL= <Your API URL or Our default API URL>
VERSION=v2 <Default version>

# OPTIONAL (For tracking & Commenting system)
DISQUS_ID=
USE_ANALYTICS=true
POSTHOG_PK=
POSTHOG_HOST=
```

### Step 4: Deploy to Railway

- Install the Railway CLI

Read more about it here: <https://railway.app/docs/cli>

- Login to your Railway account using the following command.

  ```bash
  railway login
  ```

- Navigate to the cloned repository directory using the terminal.
- Deploy the application to Vercel using the following command.

  ```bash
  railway up
  ```

- Follow the prompts to complete the deployment process.

Once the deployment is complete, you can access the application by visiting the URL provided by Vercel.

Congratulations! You have successfully deployed our application to the web...
