export const Profile = ({ headers }: { headers: string[] }) => {
  return (
    <div>
      {headers.map((header) => (  
        <h4>{header}</h4>
      ))}
      <img
        src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="Katherine Johnson"
      />
    </div>
  )
}
