import { memo, useState } from 'react'
import getRandomColor from '../utils/getRandomColor'
import styles from './NoMemo.module.css'

function MemoizeInnerNoProps() {
	const outerColor = getRandomColor()

	const [outerCount, setOuterCount] = useState(0)

	const incrementOuter = (e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		setOuterCount(outerCount + 1)
	}

	return (
		<>
			<p>Memoize Inner with no props passed</p>
			<p style={{ color: 'green' }}>Memoization works here</p>
			<div
				className={styles['basic-example']}
				style={{ backgroundColor: outerColor }}
				onClick={incrementOuter}
			>
				<p className={styles['basic-example__counter']}>Outer {outerCount}</p>

				<Inner />
			</div>
		</>
	)
}

export default MemoizeInnerNoProps

const Inner = memo(() => {
	const innerColor = getRandomColor()
	const [innerCount, setInnerCount] = useState(0)
	const incrementInner = (e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		setInnerCount(innerCount + 1)
	}
	return (
		<div
			className={styles['basic-example__inner']}
			style={{ backgroundColor: innerColor }}
			onClick={incrementInner}
		>
			<p className={styles['basic-example__inner-counter']}>
				Inner {innerCount}
			</p>
		</div>
	)
})
