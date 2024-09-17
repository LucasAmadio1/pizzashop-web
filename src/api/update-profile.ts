import { api } from '@/lib/axios'

interface UpdateProfilePrps {
  name: string
  description: string | null
}

export async function updateProfile({ name, description }: UpdateProfilePrps) {
  await api.put(`/profile`, { name, description })
}
