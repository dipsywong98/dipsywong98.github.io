'use client'

const OldCalendarPage = () => {
  if (typeof window !== 'undefined') {
    window.location.href = "https://old-calendar.dipsy.me"
  }
  return 'redirecting...'
}

export default OldCalendarPage
