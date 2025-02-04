import { useParams } from "@remix-run/react"

function LetterData() {
  const {id, name}= useParams()
console.log(id, name);

  return (
    <div>LetterData : {id}{name}</div>
  )
}

export default LetterData