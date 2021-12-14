# React-Redux

> **store** = *big state, accessible from everywhere*
> 
> **action** = *describes what you want to do (func returning an object)*
> 
> **reducer** = *check action => modification (state; action)*
> 
> **dispatch** = *send to the reducer*



### Libraries: 

*import `React` from 'react';*

&nbsp;

import `{ createStore }` from 'redux';
```js
const store = createStore(reducer);
```
&nbsp;

*import `{ combineReducers }` from 'redux';*
```js
const allReducers = combineReducers({
    name1: valueReducer1,
    name2: valueReducer2
})
```
&nbsp;

*import `{ Provider }` from 'react-redux';* 
> connects store to the App
```js
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```
&nbsp;

*import `{ useSelector }` from 'react-redux';*  
> extracting data from store
```js
const counter = useSelector(state => state.counter);
```
&nbsp;

*import `{ useDispatch }` from 'react-redux'; *
> reference to dispatch actions function
```js
<button onClick={() => dispatch(increment())}>+</button>
```
