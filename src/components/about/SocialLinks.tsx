'use client'

import Link from 'next/link'
import { email } from '@/config/infoConfig'
import { CustomIcon } from '@/components/shared/CustomIcon'

export default function SocialLinks() {
  return (
    <div className="border-t ">
      <Link
        href={`https://github.com/5shine1/Portfolio`}
        target="_blank"
        className="text-md group ml-3 flex flex-row items-center justify-start font-medium transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <CustomIcon name="github" size={22} />
        <span className="ml-4">GitHub</span>
      </Link>
      <Link
        href={`mailto:${email}`}
        className="text-md group ml-3 flex flex-row items-center justify-start font-medium transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <CustomIcon name="email" size={22} />
        <span className="ml-4">{email}</span>
      </Link>
    </div>
  )
}
