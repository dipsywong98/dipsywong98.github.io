import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useWidgetValues } from "./WidgetContext"

export const WidgetResetButton = () => {
  const {resetAllValues} = useWidgetValues()
  return <Button onChange={resetAllValues}>Reset</Button>
}
