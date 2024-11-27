import { create } from 'zustand'
import { combine } from 'zustand/middleware'


type UserProps = {
  email: string,
  accessToken: string
}


const useStore = create(combine({
  user: null as UserProps | null,
}, (set) => ({
  setUser: (data: UserProps | null) => set({ user: data }),
})))


const useAuth = () => {
  const {
    setUser,
    user
  } = useStore();


  const islogged = () => {
    return !!user?.accessToken
  }

  const logout = () => {
    setUser(null);
    console.log('logout')
  }

  return {
    user,
    islogged,
    setUser,
    logout
  }
}

export default useAuth