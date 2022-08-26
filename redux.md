# ===> REDUX <===

## 1 - Create a Store;

## 2 - Share the store through the app using Provider wrapper;

## 3 - Create state reducers that will handle the actions that changes states;

```jsx
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 };
    case "counter/decremented":
      return { value: state.value - 1 };
    default:
      return state;
  }
}
```

## 4 - Use dispatch to manipulate the state;

```jsx
store.dispatch({ type: "counter/incremented" });
// {value: 1}
store.dispatch({ type: "counter/incremented" });
// {value: 2}
store.dispatch({ type: "counter/decremented" });
// {value: 1}
```

## 5 - Use state selector to get the value of the state and subscribe to rerenders if this piece of state changes;

# ===> REDUX WITH TOOLKIT <===

## 1 - Create a Store - use typeof rootReducer or store.state as RootStateType and use typeof store.dispatch as AppDispatchType;

## 3 - Share the store through the app using Provider wrapper;

## 4 - Create Slices that will provide reducers and actions;

```jsx

const initialState = {
  count: 0;
}

const slice = createSlice({
  name: 'state name',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => state + action.payload,
  },
  extraReducers: {},
})

```

## 5 - Use useDispatch passing exported actions() to mutate the state;

## 6 - Async reducers should be added within extraReducers using builder.addCase;

```jsx

 extraReducers: (builder) => {
    builder.addCase(getRandomPokemon.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getRandomPokemon.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.pokemon = payload;
    });
  },
```
