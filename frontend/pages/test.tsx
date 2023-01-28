import { useSelector, useDispatch } from 'react-redux'
import { toggleMuted } from '../redux/features/mutedSlice'

export default function Home() {
    const muted = useSelector(state => state.muted.value)
    const dispatch = useDispatch()
  return (
    <div>
      {console.log(muted)}
      a
      <button onClick={() => dispatch(toggleMuted())} >sad</button>
      
    </div>
  )
}