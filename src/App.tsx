import './App.css'
import MemoizeInnerNoProps from './components/MemoizeInnerNoProps'
import MemoizeInnerRealProps from './components/MemoizeInnerRealProps'
import MemoizeInnerRealPropsFixWithCallback from './components/MemoizeInnerRealPropsFixWithCallback'
import MemoizeInnerRealPropsFixWithCallbackButWeAddedAnotherProp from './components/MemoizeInnerRealPropsFixWithCallbackButWeAddedAnotherProp'
import MemoizeInnerRealPropsFixWithCallbackButWeAddedAnotherPropSoItBrokeSoAddMoreMemoization from './components/MemoizeInnerRealPropsFixWithCallbackButWeAddedAnotherPropSoItBrokeSoAddMoreMemoization'
import MemoizeInnerSimpleProps from './components/MemoizeInnerSimpleProps'
import NoMemo from './components/NoMemo'
import NoMemoButComposingComponentsTogether from './components/NoMemoButComposingComponentsTogether'

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
			<NoMemoButComposingComponentsTogether />
		</>
	)
}

export default App
