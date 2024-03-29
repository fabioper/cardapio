import { useMediaQuery } from 'usehooks-ts'

export function useSmallScreen() {
  return useMediaQuery('(max-width: 500px)')
}
