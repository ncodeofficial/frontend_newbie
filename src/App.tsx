import React from 'react';
import useEur from './hooks/useEur';
import EurInfo from './components/EurInfo';
import EurInput from './components/EurInput';
import LoadingSpinner from './components/common/LoadingSpinner';

export const App = () => {
  const [isReady, eurInfo, inputValue, krwValue, onChangeEurToKrw] = useEur();
  if (!isReady) return <LoadingSpinner />;
  return (
    <div className="App">
      <EurInfo eurInfo={eurInfo} />
      <hr />
      <EurInput onChangeEurToKrw={onChangeEurToKrw} inputValue={inputValue} krwValue={krwValue} />
    </div>
  );
};

export default App;
