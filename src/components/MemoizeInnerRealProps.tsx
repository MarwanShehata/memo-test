import { memo, useState } from 'react'
import getRandomColor from '../utils/getRandomColor'
import styles from './NoMemo.module.css'

function MemoizeInnerRealProps() {
	const outerColor = getRandomColor()

	const [outerCount, setOuterCount] = useState(0)

	const incrementOuter = (e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		setOuterCount(outerCount + 1)
	}

	return (
		<>
			<p>4. Memoize Inner with props passed like a simple string and a function</p>
			<p style={{ color: 'red' }}>Memoization broke</p>
			<div
				className={styles['basic-example']}
				style={{ backgroundColor: outerColor }}
				onClick={incrementOuter}
			>
				<p className={styles['basic-example__counter']}>Outer {outerCount}</p>

				<Inner
					passed={`correctly`}
					clickFunction={() => {
						console.log(
							'inner clicked, this is a function passed from outer to inner'
						)
					}}
				/>
			</div>
		</>
	)
}

export default MemoizeInnerRealProps

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
