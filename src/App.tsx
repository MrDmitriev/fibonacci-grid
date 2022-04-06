import AppWrapper from './components/Wrappers/AppWrapper';
import Header from './components/Header/Header';
import Content from './components/Wrappers/Content';
import FibonacciGrid from './components/FibonacciGrid/FibonacciGrid';

const App: React.FC = () => {
  return (
    <AppWrapper>
			<Header />
			<Content>
				<FibonacciGrid />
			</Content>
    </AppWrapper>
  );
}

export default App;


