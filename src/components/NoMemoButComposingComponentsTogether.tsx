import { useState } from 'react'
import getRandomColor from '../utils/getRandomColor'
import styles from './NoMemo.module.css'

function NoMemoButComposingComponentsTogether() {
	const fooFunction = () => {
		console.log(`foo function called`)
	}
	return (
		<>
			<Outer>
				<Inner passed={`correctly`} fooFunction={fooFunction} />
			</Outer>
		</>
	)
}

export default NoMemoButComposingComponentsTogether
const Outer = ({ children }: { children: React.ReactNode }) => {
	const outerColor = getRandomColor()

	const [outerCount, setOuterCount] = useState(0)

	const incrementOuter = (e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		setOuterCount(outerCount + 1)
	}

	return (
		<>
			<p>
				8. Composing components together without any memo or useCallback (React
				is very opinionated)
			</p>
			<p style={{ color: 'green' }}>Memoization works here</p>
			<div
				className={styles['basic-example']}
				style={{ backgroundColor: outerColor }}
				onClick={incrementOuter}
			>
				<p className={styles['basic-example__counter']}>Outer {outerCount}</p>

				{children}
			</div>
		</>
	)
}
const Inner = ({
	passed,
	fooFunction
}: {
	passed: string
	fooFunction: () => void
}) => {
	const innerColor = getRandomColor()
	const [innerCount, setInnerCount] = useState(0)
	const incrementInner = (e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		setInnerCount(innerCount + 1)
		fooFunction()
	}

	return (
		<>
			<p>Props Passed: `{passed}`</p>
			<div
				className={`${styles['basic-example__inner']}`}
				style={{ backgroundColor: innerColor }}
				onClick={incrementInner}
			>
				<p className={styles['basic-example__inner-counter']}>
					Inner {innerCount}
				</p>
			</div>
		</>
	)
}
