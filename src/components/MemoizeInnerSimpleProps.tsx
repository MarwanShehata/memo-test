import { memo, useState } from 'react'
import getRandomColor from '../utils/getRandomColor'
import styles from './NoMemo.module.css'

function MemoizeInnerSimpleProps() {
	const outerColor = getRandomColor()

	const [outerCount, setOuterCount] = useState(0)

	const incrementOuter = (e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		setOuterCount(outerCount + 1)
	}

	return (
		<>
			<p>3. Memoize Inner with props passed like a simple string</p>
			<p style={{ color: 'green' }}>Memoization works here too</p>
			<div
				className={styles['basic-example']}
				style={{ backgroundColor: outerColor }}
				onClick={incrementOuter}
			>
				<p className={styles['basic-example__counter']}>Outer {outerCount}</p>

				<Inner passed={`correctly`} />
			</div>
		</>
	)
}

export default MemoizeInnerSimpleProps

const Inner = memo(({ passed }: { passed: string }) => {
	const innerColor = getRandomColor()
	const [innerCount, setInnerCount] = useState(0)
	const incrementInner = (e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		setInnerCount(innerCount + 1)
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
})
