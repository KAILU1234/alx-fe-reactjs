function UserCard({ user }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition m-2 w-64">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h2 className="text-xl font-bold text-center mt-2">{user.login}</h2>
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 text-center block mt-2"
      >
        View Profile
      </a>
    </div>
  );
}

export default UserCard;
