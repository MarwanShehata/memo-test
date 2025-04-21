import { memo, useCallback, useState } from 'react'
import getRandomColor from '../utils/getRandomColor'
import styles from './NoMemo.module.css'

function MemoizeInnerRealPropsFixWithCallbackButWeAddedAnotherPropSoItBrokeSoAddMoreMemoization() {
	const outerColor = getRandomColor()

	const [outerCount, setOuterCount] = useState(0)

	const incrementOuter = (e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		setOuterCount(outerCount + 1)
	}
	const clickFunction = useCallback(() => {
		console.log('inner clicked, this is a function passed from outer to inner')
	}, [])
	const fooFunction = useCallback(() => {
		console.log(`foo function called`)
	}, [])
	return (
		<>
			<p>
				7. The one before was broken again? Don't worry, just add more complexity
				by adding a useCallback for that other prop
			</p>
			<p style={{ color: 'green' }}>Memoization not broken again :/</p>
			<div
				className={styles['basic-example']}
				style={{ backgroundColor: outerColor }}
				onClick={incrementOuter}
			>
				<p className={styles['basic-example__counter']}>Outer {outerCount}</p>

				<Inner
					passed={`correctly`}
					clickFunction={clickFunction}
					fooFunction={fooFunction}
				/>
			</div>
		</>
	)
}

export default MemoizeInnerRealPropsFixWithCallbackButWeAddedAnotherPropSoItBrokeSoAddMoreMemoization

const Inner = memo(
	({
		passed,
		clickFunction,
		fooFunction
	}: {
		passed: string
		clickFunction: () => void
		fooFunction: () => void
	}) => {
		const innerColor = getRandomColor()
		const [innerCount, setInnerCount] = useState(0)
		const incrementInner = (e: React.MouseEvent) => {
			e.preventDefault()
			e.stopPropagation()
			setInnerCount(innerCount + 1)
			clickFunction()
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
)
