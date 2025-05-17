import React, { useEffect } from 'react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import useAxios from '@/utils/useAxios'

type redirectTypes = {
  access_token: string
  refresh_token: string
}

type queryTypes = {
  query: string
  code: string
}

export const Route = createFileRoute('/redirect')({
  component: Redirect,
  validateSearch: (search: Record<string, unknown>): queryTypes => {
    return {
      query: search.query as string,
      code: search.code as string,
    }
  },
})

function Redirect() {
  const { code } = Route.useSearch()
  const code_verifier = localStorage.getItem('code_verifier') ?? ''
  const navigate = useNavigate()

  const { data, error, loading } = useAxios<redirectTypes, unknown>({
    url: `/auth/token-generator`,
    type: 'get',
    options: {
      params: {
        code,
        code_verifier,
      },
    },
  })

  useEffect(() => {
    if (!data) return

    const accessToken = data.access_token
    const refreshToken = data.refresh_token

    if (accessToken && refreshToken) {
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)
      localStorage.removeItem('code_verifier')
      navigate({ to: '/app' })
    }
  }, [data, navigate])

  if (loading) {
    return <p className="text-2xl text-black">redirecting...</p>
  }

  if (error) {
    return <p className="text-red-500">Error: {error.message}</p>
  }

  return null
}
