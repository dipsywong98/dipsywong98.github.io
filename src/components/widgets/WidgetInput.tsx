'use client'

import { useEffect } from "react"
import { Input } from "../ui/input"
import { useWidgetValues } from "./WidgetContext"

export const WidgetInput = ({name, ...props}) => {
  const { getValue, setValue } = useWidgetValues()
  return <Input value={getValue(name) ?? ''} onChange={({target}) => setValue(name, target.value)} placeholder={name} {...props} />
}
