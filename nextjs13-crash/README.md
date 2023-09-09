This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

###  PROJECT NODE START HERE. 

#### Setup & file structure. 
1. Inside the app folder we will do everything such as pages,component,api router handlers

2. Homepage and clean up. pages file is our main file. 

``
    rafce
    console.log('it means : arrow react function component export')
``

3. custom css description thake namate hobe. 


## Routing system next13
In next13 route work a little bit different. Suppose we want to create a about page route. For making about page route at first we have to create a folder and then we have to create a file calle index.js or index.jsx.
Every custom route we have to create folder name not a file.

> Note : We can't add class inside the link. Like <Link className={about.module.css}></Link>
> When we need to use any class for designing or any other thing in that time we need to use a tag. 

## Layout part
If i want to show something all out application. For this perpose we use layout file in nexjs13. 

## Matadata API.
Inside the matadata we can set global data like title,descript and api related data which will be globel. 

> Note : If we want change some special pages data or title,descript, api etc. For this we can matadata for the specific page. 



## next/front/google
I didn't use it. 

## Header Component. 
For showing header component all our pages we can call it on our layout page.


## RSC OR React Server Component. 

### Advantage of React Server Component.
1. Load faster don't have wait for javascript loading. 
2. Smaller Client bundle size
3. SEO Friendly
4. Access to resurce the cliend can't access.
5. Hide sensitive data to the cliend
6. More secure against XSS attracts.
7. improve developer experience.

// Just like with anything else there are also disadvantageses. 

- Not as interactive
- No component state. We can not use 'useState' hook
- No component lifecycle method. we can not use the 'useEffect' hook

### use clinet
'use clinet' 


### Fetching Data From a server component
Fetching data from a server component which is very easy. While we are fetching data form clinet componete we normaly use useEffect,useState. 



