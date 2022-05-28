import './index.css';
import App from './App';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {useState} from 'react';
import { ApolloClient, InMemoryCache,ApolloProvider } from '@apollo/client'

const APIURL = 'https://api.studio.thegraph.com/query//<SUBGRAPH_NAME>/'

const UNIV3_SUBGRAPH = "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3"


const client = new ApolloClient({
  uri: UNIV3_SUBGRAPH,
  cache: new InMemoryCache(),
})

export default function Wrapper(){
    return(
  <ApolloProvider client={client}>
        <div className='' > 
        <Navbar />
        <BrowserRouter>
        <Routes>
          {/* HOME PAGE */}
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          {/* ADD ADDITONAL ROUTES here ex swap page */}
          <Route path="/app" element={<App />} />
        </Routes>
      </BrowserRouter>
      </div>

  </ApolloProvider>


    );
}
