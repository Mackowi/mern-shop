import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PrivateRoute() {
  const { userInfo } = useSelector((state) => state.auth)

  // replace the past history
  return userInfo ? <Outlet /> : <Navigate to='login' replace/>
}
export default PrivateRoute
