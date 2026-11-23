# TypeScript Session -- Setup Instructions

Before attending the session, please follow these steps to prepare your
environment and make sure you can run TypeScript code.

## 1. Install Visual Studio Code

Download VS Code from:

https://code.visualstudio.com/

Install it using the default settings.

## 2. Install Node.js

Download Node.js from:

https://nodejs.org/

Choose the **LTS version** and install it using the default settings.

## 3. Verify Your Installation

Open VS Code → **Terminal → New Terminal**.

Run these commands one by one:

``` bash
node -v
```

``` bash
npm -v
```

If both commands return version numbers, your installation is
successful.

## 4. Create Your First TypeScript Project

1.  Create a new folder named `typescript-session`.
2.  Open VS Code.
3.  Select **File → Open Folder** and open your folder.
4.  Open a new terminal inside VS Code.

Run the following commands one by one:

``` bash
npm init -y
```

``` bash
npm install -D typescript tsx
```

``` bash
npx tsc --init
```

## 5. Create Your First TypeScript File

1.  Create a new file inside your folder.
2.  Name it `hello.ts`.
3.  Write the following code:

``` typescript
let name: string = "Your Name";
let age: number = 20;

console.log(`Hello, ${name}!`);
console.log(`You are ${age} years old.`);
```

Replace `Your Name` with your actual name.

Save the file.

## 6. Run Your TypeScript Code

In the VS Code terminal, run:

``` bash
npx tsx hello.ts
```

You should see output similar to:

``` text
Hello, Your Name!
You are 20 years old.
```

If you see the output, you're ready for the session!

**Please complete these steps before attending the session so we can
focus on the content and hands-on exercises instead of installation
problems.**
