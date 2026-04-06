
function ProfileCard({user, onToggleFollow, darkMode}) {
return (
    <div className={`card ${darkMode ? 'dark' : 'light'}`}>
        <img src={user.avatar} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.bio}</p>

        <button onClick={() => onToggleFollow(user.id)}
            style={{
            backgroundColor: user.isFollowed ? '#ff4d4d' : '#007bff', color: 'white'}}>
            {user.isFollowed ? "Unfollow" : "Follow"}
        </button>
    </div>
)
}

export default ProfileCard