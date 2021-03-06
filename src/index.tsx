import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { accountSlice } from "./state/accountSlice";

const client = new ApolloClient({
    uri: "https://graphql.anilist.co",
    cache: new InMemoryCache(),
});

const store = configureStore({
    reducer: accountSlice.reducer,
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>; // Infer the types from the store itself
export type AppDispatch = typeof store.dispatch;

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
