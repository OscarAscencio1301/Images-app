

interface PropsInput {
    form: string,
    setform: (value: string) => void
}

const Input = ({form, setform}: PropsInput) => {
  return (
    <input type="text" value={form} onChange={e => setform(e.target.value)} />
  )
}

export default Input
