import { useParams } from "react-router-dom";

export default function UserProfile() {
  const { id } = useParams(); // gets the dynamic part of the URL
  return (
    <div>
      <h1>User Profile</h1>
      <p>Profile ID: {id}</p>
    </div>
  );
}
