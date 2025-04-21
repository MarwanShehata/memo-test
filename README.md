# React Memo Demystified

A practical exploration of React's memoization patterns and component composition strategies for optimal performance. [Link](https://marwanshehata.gitlab.io/react-memo-test/): https://marwanshehata.gitlab.io/react-memo-test/

## About This Project

This repository contains a demonstration of different memoization approaches in React, showing common pitfalls and effective patterns. It accompanies a video discussion about React's component rendering optimization strategies.

## Key Concepts Explored

- Basic React rendering behavior without memoization
- Using `React.memo()` for component optimization
- How primitive vs non-primitive props affect memoization
- The role of `useCallback` in preserving memoization
- React's preferred component composition pattern
- The growing complexity of maintaining memoization as components evolve

## Demo Components

The project includes multiple examples that progressively demonstrate different memoization scenarios:

1. **NoMemo**: Baseline example without any memoization
2. **MemoizeInnerNoProps**: Simple memoized inner component with no props
3. **MemoizeInnerSimpleProps**: Memoized component with primitive props (strings)
4. **MemoizeInnerRealProps**: Memoized component with function props (and why it breaks)
5. **MemoizeInnerRealPropsFixWithCallback**: Using `useCallback` to preserve memoization
6. **MemoizeInnerRealPropsFixWithCallbackButWeAddedAnotherProp**: Showing how easy it is to break memoization again
7. **MemoizeInnerRealPropsFixWithCallbackButWeAddedAnotherPropSoItBrokeSoAddMoreMemoization**: Fixing with more `useCallback` hooks (and more complexity)
8. **NoMemoButComposingComponentsTogether**: React's preferred component composition pattern

## Key Takeaways

- Memoization with `React.memo()` only works if props don't change between renders
- Non-primitive props (functions, objects, arrays) are recreated on each render unless memoized
- Using `useCallback` and `useMemo` can preserve memoization but increases code complexity
- React's recommended approach is to leverage component composition (children pattern) rather than over-relying on memoization
- For more complex state management needs, consider state management libraries like Zustand

## Getting Started

1. Clone this repository
2. Install dependencies with `npm install` or `yarn`
3. Run the development server with `npm run dev` or `yarn dev`
4. Experiment with the different examples to see memoization in action

## Future Exploration

- The React compiler (still in beta) may help automate memoization optimizations
- Targeted state management with libraries like Zustand can provide more surgical updates

## Resources

For more information about React performance optimization:
- [React Memo Documentation](https://react.dev/reference/react/memo)
- [React useCallback Documentation](https://react.dev/reference/react/useCallback#skipping-re-rendering-of-components)

## Contributing

Contributions are welcome! Feel free to submit PRs with additional examples or clarifications.

## License

MIT
