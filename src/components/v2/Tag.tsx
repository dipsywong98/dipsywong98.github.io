import React from 'react'
import ghcolors from '../../lib/ghcolors'
import NextImage from 'next/image'
import './Tag.scss'
import { X } from 'lucide-react'

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
    <a className="tag bg-tag hover:bg-tag-hover" onClick={onClick} title={title}>
      <div className="flex items-center align-center justify-center">
        {_tag in ghcolors && (
          <div className="color rounded-full" style={{ backgroundColor: ghcolors[_tag] }} />
        )}
        <div>{_tag}</div>
        {removable && (
          <div className="cross">
            <X size='sm' />
          </div>
        )}
      </div>
    </a>
  )
}
