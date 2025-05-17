/**
 * @param (url, type, options)
 * @example:-> useApi<any>({url:"xyz.com",type:"get", options: {}})
 */

import { useEffect, useState } from 'react'

import axiosInstance from './axiosInstance'
import type { AxiosRequestConfig } from 'axios'

interface useAxiosOptions<TResponse, TBody> {
  url: string
  type: string
  options?: AxiosRequestConfig
  data?: TBody
  preventPrevFetch?: boolean
}

const useAxios = <TResponse, TBody>(
  props: useAxiosOptions<TResponse, TBody>,
) => {
  const { preventPrevFetch = false } = props
  const [data, setData] = useState<TResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchData = async () => {
    try {
      if (props.type === 'post') {
        const response = await axiosInstance.post(props.url, props.options)
        setData(response.data)
      } else if (props.type === 'get') {
        const response = await axiosInstance.get(props.url, props.options)
        setData(response.data)
      } else {
        setError(new Error('Invalid request type'))
      }
    } catch (err) {
      setError(err as Error | null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    console.log('calling')
    if (!preventPrevFetch) {
      fetchData()
    }
  }, [])
  return { data, loading, error, refetch: fetchData }
}
export default useAxios
