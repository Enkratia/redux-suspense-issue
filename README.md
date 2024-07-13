**COMMENTS**

1. initalize the project

```sh
npm i
```

2. launch the project

```sh
npm run dev
```

<br/>

\*\* Next.js/React's `Suspense` feature works properly with native react context, but doesn't work with `redux toolkit`.

\*\* Error in browser's console (F12): `app-index.js:33 Warning: Prop 'disabled' did not match. Server: "" Client: "false"`.

\*\* This error keeps button as diabled all the time.

\*\* First (client) component is inside of Layout, second (client) component is inside of server component. First (client) component is used for setting data, second (client) component is used to read data and disable button if needed.
