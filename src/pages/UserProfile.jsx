export default function UserProfile() {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="max-w-3xl mt-20 mx-auto px-6 pt-16 pb-20">

      {/* Page Header */}
      <h1 className="text-3xl font-semibold text-gray-900">My Profile</h1>
      <p className="text-gray-500 mt-2">
        Manage your account details and preferences.
      </p>

      {/* Profile Card */}
      <div className="mt-10 border border-gray-200 rounded-2xl p-6 bg-white space-y-6">

        {/* Username */}
        <div>
          <label className="text-sm text-gray-500">Username</label>
          <p className="text-lg font-medium text-gray-900 mt-1">
            {user?.username || "N/A"}
          </p>
        </div>

        {/* Role */}
        <div>
          <label className="text-sm text-gray-500">Role</label>
          <p className="text-lg font-medium text-gray-900 mt-1">
            {user?.role || "N/A"}
          </p>
        </div>

      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="
          w-full mt-8 py-3 text-white text-lg bg-red-600
          rounded-xl font-medium hover:bg-red-700 transition
        "
      >
        Logout
      </button>
    </div>
  );
}
