import { FormEvent, useState } from "react"
import Input from "../atoms/Input"

interface PropsForm {
    addCategorie: (categorie: string) => void

}


const Form = ({ addCategorie }: PropsForm) => {
    const [form, setform] = useState('')

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log('Hola desde el submit')
        if(form.trim().length < 1) return
        addCategorie(form)
        setform('')
    }

    return (
        <form onSubmit={onSubmit} aria-label="form-label">
            <Input form={form} setform={setform} />
        </form>
    )
}

export default Form
