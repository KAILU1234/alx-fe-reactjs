import { useParams } from "react-router-dom";

export default function UserProfile() {
  const { id } = useParams(); // gets the dynamic part of the URL
  return (
    <div>
      <h1>User Profile</h1>
      <p>Profile ID: {id}</p>
export default function UserProfile(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2 style={{ color: 'blue' }}>{props.name}</h2>
      <p>
        Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
      </p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}
