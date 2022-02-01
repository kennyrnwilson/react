# Redux first app.

This shows how to add Redux to a very simple React component.

## Initial State
 Before I added Redux the application looked like this.

**Index.tsx**

```ts
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
    <App />,
      document.getElementById('root')
);
```

**App.tsx**
```ts
import { useState } from "react";

function App()
{
  console.log("App");
  const [count,setCount] = useState<number>(0);

  return (
    <div>
      <button onClick={e=>setCount(count+1)}>{count}</button>
    </div>
  )
}

export default App;
```

## Adding Redux Dependencies
The first thing we need to is add the npm dependencies for Redux.
Add node dependencies
```
npm install @reduxjs/toolkit
npm install redux
npm install @types/react-redux
npm install react-redux
npm install --save-dev redux-devtools
```

## Create Redux Store and Slice
First I added the file [ReduxStore.ts](./src/redux/ReduxStore.ts). In this file I create a slice and an intial value for that slice. I export the slice so I can use it elsewhere.

```ts
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    num: 3
}

export const numberSlice = createSlice({
    name: 'myfirstslice',
    initialState,
    reducers: {
        addToValue: (state, action: PayloadAction<number>) => {
            state.num = state.num + action.payload
        }
    }
});
```

Now to the same file I add a store that uses the slice. I export the store
```ts
export const myreduxstore = configureStore({
    reducer: numberSlice.reducer
});
```

## Using the store and slice
In our [index.tsx](./src/index.tsx) App.tsx we wrap the App in a Redux Provider and pass our store

```tsx
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { myreduxstore } from './redux/ReduxStore';

ReactDOM.render(
    <Provider store={myreduxstore}>
       <App />
    </Provider>
    ,
      document.getElementById('root')
);
```

Then inside our [App.tsx](./src/App.tsx) we can access and set the value in the store

```ts
import { useDispatch, useSelector } from "react-redux";
import { numberSlice } from "./redux/ReduxStore";

function App()
{
  const data = useSelector( (state:any) => state.num);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={e=> dispatch(numberSlice.actions.addToValue(4)) }>{data}</button>
    </div>
  )
}
```