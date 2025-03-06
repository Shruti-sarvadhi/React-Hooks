import { useDispatch, useSelector } from "react-redux";

/**
 * Custom hook for dispatching Redux actions.
 * This replaces useDispatch() to maintain consistency.
 */
export const useAppDispatch = () => useDispatch();

/**
 * Custom hook for selecting data from the Redux store.
 * This replaces useSelector() for better code readability.
 */
export const useAppSelector = useSelector;
