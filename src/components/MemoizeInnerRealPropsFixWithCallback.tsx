import { memo, useCallback, useState } from 'react'
import getRandomColor from '../utils/getRandomColor'
import styles from './NoMemo.module.css'

function MemoizeInnerRealPropsFixWithCallback() {
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

	return (
		<>
			<p>
				Memoize Inner with props passed like a simple string and a function but
				the function is inside a useCallback
			</p>
			<p style={{ color: 'green' }}>Memoization not broken again</p>
			<div
				className={styles['basic-example']}
				style={{ backgroundColor: outerColor }}
				onClick={incrementOuter}
			>
				<p className={styles['basic-example__counter']}>Outer {outerCount}</p>

				<Inner passed={`correctly`} clickFunction={clickFunction} />
			</div>
		</>
	)
}

export default MemoizeInnerRealPropsFixWithCallback

const Inner = memo(
	({
		passed,
		clickFunction
	}: {
		passed: string
		clickFunction: () => void
	}) => {
		const innerColor = getRandomColor()
		const [innerCount, setInnerCount] = useState(0)
		const incrementInner = (e: React.MouseEvent) => {
			e.preventDefault()
			e.stopPropagation()
			setInnerCount(innerCount + 1)
			clickFunction()
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
