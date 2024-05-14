import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import sendgrid from '@sendgrid/mail'

export default function () {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    company: '',
    instagram: '',
  })

  sendgrid.setApiKey('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')

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleSubmit = () => {
    const options = {
      from: 'ak9585042@gmail.com', // Change to your verified sender
      to: 'joaojpmoreira25@gmail.com', // Change to your recipient
      subject: 'Novo contato! $$$$$$',
      text: `Name: ${formData.name}\nContact: ${formData.contact}\nCompany: ${formData.company}\nInstagram: ${formData.instagram}`,
      html: `<p>Name: ${formData.name}</p><p>Contact: ${formData.contact}</p><p>Company: ${formData.company}</p><p>Instagram: ${formData.instagram}</p>`,
    }
    
    sendgrid.send(options)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Agendar uma reunião</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Agende uma reunião</DialogTitle>
          <DialogDescription>
            Preencha o formulário a seguir para conhecermos melhor o seu negócio e darmos o primeiro passo para esta parceria de sucesso.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input
              id="name"
              placeholder="Seu nome"
              required={true}
              className="col-span-3"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="cel" className="text-right">
              Número
            </Label>
            <Input
              id="contact"
              placeholder="Seu número"
              type="tel"
              required={true}
              className="col-span-3"
              value={formData.contact}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="company" className="text-right">
              Empresa
            </Label>
            <Input
              id="company"
              placeholder="Nome da sua empresa"
              required={true}
              className="col-span-3"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="instagram" className="text-right">
              Instagram*
            </Label>
            <Input
              id="instagram"
              placeholder="Instagram da empresa"
              required={true}
              className="col-span-3"
              value={formData.instagram}
              onChange={handleChange}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>Agendar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
