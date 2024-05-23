import React, { useMemo, useRef, useState } from 'react'
import { Tag } from './Tag'
import './ChipInput.scss'

interface Props {
  tagGraph?: Record<string, Set<string>>
  availables: string[]
  value: string[]
  onChange: (value: string[]) => void
}

export const ChipInput = ({ availables, value: selectedTags, onChange, tagGraph }: Props): React.ReactNode => {
  const [input, setInput] = useState('')
  const [cursor, setCursor] = useState(0)
  const [active, setActive] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const itemsRef = useRef<HTMLDivElement>(null)

  const suggestions = useMemo((): string[] => {
    const unselected = availables.filter((a) => !selectedTags.includes(a))
    const compatibleUnselected = (
      tagGraph === undefined
        ? unselected
        : selectedTags
          .reduce((potentialTags, selectedTag) => (
            potentialTags.filter((potentialTag) => tagGraph[selectedTag]?.has(potentialTag))
          ), unselected)
    )
    if (input === '') {
      return compatibleUnselected
    } else {
      const regex = new RegExp(`^${input.toLowerCase()}`)
      return compatibleUnselected
        .filter((a) => a.toLowerCase().match(regex))
    }
  }, [availables, selectedTags, input, tagGraph])

  const onType = (): void => {
    if (input[input.length - 1] === ',') {
      trimAndMoveChip(input)
    }
  }

  const onChipClick = (chip: string): void => {
    onChange(selectedTags.filter((c) => c !== chip))
    if (inputRef.current !== null) {
      inputRef.current.focus()
    }
  }

  const onKey = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    switch (event.key) {
      case 'Tab':
      case 'Enter':
        event.preventDefault()
        if (suggestions.length > cursor) {
          trimAndMoveChip(suggestions[cursor])
        } else {
          trimAndMoveChip(input)
        }
        break
      case 'Backspace':
        if (input === '') {
          selectedTags.pop()
          onChange([...selectedTags])
        }
        break
      case 'ArrowUp':
        setCursor((prevCursor) => (prevCursor - 1 + suggestions.length) % suggestions.length)
        if (itemsRef.current != null) {
          itemsRef.current.scrollTop = Math.max(0, cursor - 3) * 30 // Assuming each item has a height of 30px
        }
        event.preventDefault()
        break
      case 'ArrowDown':
        setCursor((prevCursor) => (prevCursor + 1) % suggestions.length)
        if (itemsRef.current != null) {
          itemsRef.current.scrollTop = Math.max(0, cursor - 3) * 30 // Assuming each item has a height of 30px
        }
        event.preventDefault()
        break
      case 'Escape':
        if (inputRef.current != null) {
          inputRef.current.blur()
        }
        break
    }
  }

  const onBlur = (): void => {
    setActive(false)
  }

  const trimAndMoveChip = (newChip: string): void => {
    const trimmed = newChip.match(/^(.+)[\s,]*$/g)?.[0]
    if (trimmed !== undefined && !selectedTags.includes(trimmed)) {
      onChange([...selectedTags, trimmed])
    }
    setInput('')
    setCursor(0)
    if (inputRef.current != null) {
      inputRef.current.focus()
    }
  }

  const isShowingAuto = active && suggestions.length > 0

  return (
    <div className="input-root">
      <div className={`input-field-root ${isShowingAuto ? 'auto' : ''} ${active ? 'active' : ''} shadow-hover`}>
        {selectedTags.map((chip) => (
          <Tag
            key={chip}
            tag={chip}
            onClick={() => { onChipClick(chip) }}
            removable={true}
          />
        ))}
        <label className="input-field">
          <input
            onBlur={onBlur}
            onFocus={() => { setActive(true) }}
            onInput={onType}
            onKeyDown={onKey}
            ref={inputRef}
            value={input}
            onChange={(e) => { setInput(e.target.value) }}
          />
        </label>
      </div>
      <div className="autofill-root" style={{ display: isShowingAuto ? 'block' : 'none' }}>
        <div className="autofill-container" ref={itemsRef}>
          {suggestions.map((op, k) => (
            <div
              key={op}
              className={`autofill-item ${k === cursor ? 'active' : ''}`}
              onMouseDown={(event) => { event.preventDefault() }}
              onClick={() => { trimAndMoveChip(op) }}
            >
              {op}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
