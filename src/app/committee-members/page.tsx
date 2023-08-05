import {getCollection} from '../../firebase/firestore/getData'

export default async function CommitteeMembers() {

  const membersArr = await getCollection("members");
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>This is the committee members page</h1>

        {
          membersArr.map ( (member) => {
            return (
              <div>
                <span>{member.data.name}</span>
                <span>{member.data.title}</span>
                <span>{member.data.address}</span>
                <span>{member.data.email}</span>
              </div>
              
            )
          } )
        }

      </main>
  )
}