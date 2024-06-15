'use client'

import { useEffect } from "react"
import { Input } from "../ui/input"
import { useWidgetValues } from "./WidgetContext"

export const WidgetInput = ({name, defaultValue = '', ...props}) => {
  const { getValue, setValue } = useWidgetValues()
  useEffect(() => {
    setValue(name, defaultValue)
  }, [])
  return <Input value={getValue(name) ?? ''} onChange={({target}) => setValue(name, target.value)} placeholder={name} {...props} />
}
