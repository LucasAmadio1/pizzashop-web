import { api } from '@/lib/axios'

export async function singOut() {
  return api.post('/sign-out')
}
