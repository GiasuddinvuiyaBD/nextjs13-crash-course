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

### ReposPage Output
Inside the repos page we have show our data to ui. by mapping all the data we show it to ui. When use click any item it will go to main page with dynamic routing system. 

### Custom Loading Page. 
for making a loading part. We have created a file call loading.js inside it we have desing our loading part and then inside the repos we have created a Promise inside of it we set 1 second. 

### Dynamic routes. 
For dynamic routes we make a file  inside the repos call [name] and inside of it i have create a page.jsx file. In this file i can added some design. when use click any item. Dynamically every item will come at this page. 

### param props

### Repo and RepoDir Component. 
1. Repo will store basic data like name, title, descript etc.
2. RepoDirs will be list of dirrectory.

For Repo: I have created a component inside the component folder call Repo.jsx. Inside the Repo.jsx we fetch data form.
```
    async function fetchRepo(name)
    {
        const respone = await fetch(`https://api.github.com/repos/giasuddin/${name}`)
        const repo = await respone.json(); 
        return repo;
    }
```

Inside the main repo componet we are resive fetchRepo. 
and then show it to ui. 

Number two 
RepoDirs 
Here i have taken data form diractories. 

Here have to practice it again for my better understanding. 


### Suspense Bundaries. 
```
    <Suspense fallback={<div>Loading directories....</div>}>
        <RepoDirs name={name} />
    </Suspense>
```
RepoDirs i wraped by Suspense inside the suspense i set message. it will show after 3 seconds. 





















