import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { QueryClientProvider, QueryClient } from 'react-query';
import './styles/index.scss';

import App from './App';


const queryClient = new QueryClient();

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/octopus-prehire-test" element={<App />} />
					<Route path="/currency/detail/:currency" element={<App />} />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

