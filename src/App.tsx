import './App.css'
import MemoizeInnerNoProps from './components/MemoizeInnerNoProps'
import MemoizeInnerRealProps from './components/MemoizeInnerRealProps'
import MemoizeInnerRealPropsFixWithCallback from './components/MemoizeInnerRealPropsFixWithCallback'
import MemoizeInnerRealPropsFixWithCallbackButWeAddedAnotherProp from './components/MemoizeInnerRealPropsFixWithCallbackButWeAddedAnotherProp'
import MemoizeInnerRealPropsFixWithCallbackButWeAddedAnotherPropSoItBrokeSoAddMoreMemoization from './components/MemoizeInnerRealPropsFixWithCallbackButWeAddedAnotherPropSoItBrokeSoAddMoreMemoization'
import MemoizeInnerSimpleProps from './components/MemoizeInnerSimpleProps'
import NoMemo from './components/NoMemo'

function App() {
	return (
		<>
			<NoMemo />
			<MemoizeInnerNoProps />
			<MemoizeInnerSimpleProps />
			<MemoizeInnerRealProps />
			<MemoizeInnerRealPropsFixWithCallback />
			<MemoizeInnerRealPropsFixWithCallbackButWeAddedAnotherProp />
			<MemoizeInnerRealPropsFixWithCallbackButWeAddedAnotherPropSoItBrokeSoAddMoreMemoization />
		</>
	)
}

export default App
