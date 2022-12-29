import UserCard from './UserCard'

export default function UsersGrid() {
    return (
        <div className='bg-neutral-900 grid gap-1 grid-flow-col min-h-screen'>
            <UserCard />
        </div>
    )
}