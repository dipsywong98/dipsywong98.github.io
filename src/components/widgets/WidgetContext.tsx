'use client'

import { createContext, useContext, useEffect, useReducer } from "react";
import { useDebounce, useDebouncedCallback } from "use-debounce";

type Values = Record<string, string>

const WidgetContext = createContext<{
  getValues(): Values,
  getDebouncedValues(): Values,
  getValue(name: string): string,
  getDebouncedValue(name: string): string,
  setValue(name: string, value: string): void,
  resetAllValues(): void,
  interpolate(raw: string): string
}>({
  getValues: () => ({}),
  getDebouncedValues: () => ({}),
  getValue: () => '',
  getDebouncedValue: () => '',
  setValue: () => { },
  resetAllValues: () => { },
  interpolate: (raw) => raw
})

enum ActionType {
  SET_VALUE = 'SET_VALUE',
  RESET_ALL_VALUES = 'RESET_ALL_VALUES'
}

type Action = {
  type: ActionType.SET_VALUE,
  payload: {
    valueName: string,
    value: string,
  }
} | {
  type: ActionType.RESET_ALL_VALUES
}

interface Props {
  children: React.ReactNode
  defaultValues?: Values
}

export const WidgetsRoot = (props: Props) => {
  const [state, dispatch] = useReducer((prev: Values, action: Action) => {
    switch (action.type) {
      case ActionType.SET_VALUE:
        return { ...prev, [action.payload.valueName]: action.payload.value }
      case ActionType.RESET_ALL_VALUES:
        return {}
    }
  }, props.defaultValues)
  const [debouncedState] = useDebounce(state, 300)
  const getValues = () => Object.freeze(state)
  const getDebouncedValues = () => Object.freeze(debouncedState)
  const getValue = (valueName: string) => state[valueName] ?? ''
  const getDebouncedValue = (valueName: string) => debouncedState[valueName] ?? ''
  const setValue = (valueName: string, value: string) => dispatch({ type: ActionType.SET_VALUE, payload: { valueName, value } })
  const resetAllValues = () => dispatch({ type: ActionType.RESET_ALL_VALUES })
  const interpolate = (raw: string): string => {
    return Object.entries(debouncedState).reduce((code, [name, value]) => {
      return code.replaceAll(`%[${name}]%`, value)
    }, raw)
  }
  const allProps = {
    ...props,
    value: {
      getValues,
      getValue,
      setValue,
      resetAllValues,
      interpolate,
      getDebouncedValues,
      getDebouncedValue,
    }
  }
  return (
    <WidgetContext.Provider {...allProps} />
  )
}

export const useWidgetValues = () => useContext(WidgetContext)

export const WidgetValue = ({name}) => {
  const {getValue} = useWidgetValues()
  return getValue(name)
}
