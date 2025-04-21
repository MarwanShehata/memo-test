import { useState, useRef } from 'react'
import getRandomColor from '../utils/getRandomColor'
import styles from './BasicExample.module.css'

function BasicExample() {
	const outerColor = getRandomColor()
	const innerColor = getRandomColor()

	const [outerCount, setOuterCount] = useState(0)
	const [innerCount, setInnerCount] = useState(0)

	const incrementOuter = (e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		setOuterCount(outerCount + 1)
	}

	const incrementInner = (e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		setInnerCount(innerCount + 1)
	}

	return (
		<div
			className={styles['basic-example']}
			style={{ backgroundColor: outerColor }}
			onClick={incrementOuter}
		>
			<p className={styles['basic-example__counter']}>Outer {outerCount}</p>

			<div
				className={styles['basic-example__inner']}
				style={{ backgroundColor: innerColor }}
				onClick={incrementInner}
			>
				<p className={styles['basic-example__inner-counter']}>
					Inner {innerCount}
				</p>
			</div>
		</div>
	)
}

export default BasicExample
