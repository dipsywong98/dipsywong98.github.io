import React from 'react'
import ghcolors from '../../lib/ghcolors'
import NextImage from 'next/image'
import './Tag.scss'

interface Props {
  tag: string
  removable?: boolean
  onClick: () => void
}

export const Tag: React.FC<Props> = ({ tag, removable = false, onClick }) => {
  const _tag = tag
  const title = removable
    ? 'Toggle to remove this filter'
    : 'Toggle to add this filter'

  return (
    <a className="tag" onClick={onClick} title={title}>
      <div className="flex items-center align-center justify-center">
        {_tag in ghcolors && (
          <div className="color rounded-full" style={{ backgroundColor: ghcolors[_tag] }} />
        )}
        <div>{_tag}</div>
        {removable && (
          <div className="cross">
            <NextImage width={8} height={8} src="/svg/cross.svg" alt="cross" />
          </div>
        )}
      </div>
    </a>
  )
}
