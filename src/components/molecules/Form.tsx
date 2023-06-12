import { FormEvent, useState } from "react"
import Input from "../atoms/Input"

interface PropsForm {
    addCategorie: (categorie: string) => void

}


const Form = ({ addCategorie }: PropsForm) => {
    const [form, setform] = useState('')

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        if(form.trim().length < 1) return
        addCategorie(form)
        setform('')
    }

    return (
        <form onSubmit={onSubmit}>
            <Input form={form} setform={setform} />
        </form>
    )
}

export default Form
