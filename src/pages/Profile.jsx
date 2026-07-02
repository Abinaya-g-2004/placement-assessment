import "./Profile.css";

function Profile() {
  const user = JSON.parse(localStorage.getItem("loggedUser"));

  // Debugging
  console.log("User Object:", user);
  console.log("Name:", user?.name);
  console.log("Email:", user?.email);

  return (
    <div className="profile">
      <div className="profile-card">
        <h1>My Profile</h1>

        {user ? (
          <>
            <h2>Name: {user.name}</h2>
            <h2>Email: {user.email}</h2>
          </>
        ) : (
          <h2 style={{ color: "red" }}>No user found. Please login again.</h2>
        )}
      </div>
    </div>
  );
}

export default Profile;