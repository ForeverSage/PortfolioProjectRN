import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { authenticate } from 'slices/app.slice'
import Main from './navigation'

const Routes = () => {
  const { checked, loggedIn } = useSelector((state) => state.app)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authenticate({ loggedIn: true, checked: true }))
  }, [])

  if (!checked) return <Text>Loading...</Text>
  return <Main />
}

export default Routes
