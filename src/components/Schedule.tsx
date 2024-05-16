import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RocketIcon } from '@radix-ui/react-icons'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

import api from '@/services/api'

export default function (className) {
	const [data, setData] = useState({
		name: '',
		contact: '',
		company: '',
		instagram: '',
	})
	const [isVisible, setIsVisible] = useState(false)
	const [open, setOpen] = useState(false)

	const onAnimationEnd = () => {
		setTimeout(() => {
			if (isVisible) setIsVisible(false)
		}, 3000)
	}

	const handleChange = (e) => {
		const { id, value } = e.target
		setData((prevData) => ({
			...prevData,
			[id]: value,
		}))
	}

	const handleSubmit = async () => {
		const res = await api.post('/sms', data)

		console.log(res.data)
		setOpen(false)
		setIsVisible(true)
	}

	return (
		<>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button variant='default'>Agendar uma reunião</Button>
				</DialogTrigger>
				<DialogContent className='sm:max-w-[425px]'>
					<DialogHeader>
						<DialogTitle>Agende uma reunião</DialogTitle>
						<DialogDescription>
							Preencha o formulário a seguir para conhecermos melhor o seu negócio e
							darmos o primeiro passo para esta parceria de sucesso.
						</DialogDescription>
					</DialogHeader>
					<div className='grid gap-4 py-4'>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='name' className='text-left'>
								Nome
							</Label>
							<Input
								id='name'
								placeholder='Seu nome'
								required={true}
								className='col-span-3'
								value={data.name}
								onChange={handleChange}
							/>
						</div>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='cel' className='text-left'>
								Número
							</Label>
							<Input
								id='contact'
								placeholder='Seu número de telefone'
								type='tel'
								required={true}
								className='col-span-3'
								value={data.contact}
								onChange={handleChange}
							/>
						</div>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='company' className='text-left'>
								Empresa
							</Label>
							<Input
								id='company'
								placeholder='Nome da sua empresa'
								required={true}
								className='col-span-3'
								value={data.company}
								onChange={handleChange}
							/>
						</div>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='instagram' className='text-left'>
								Funcionários
							</Label>
							<Select>
								<SelectTrigger className='col-span-3'>
									<SelectValue placeholder='Selecione o número de funcionários' />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Quantidade</SelectLabel>
										<SelectItem value='2 a 9'>2 a 9</SelectItem>
										<SelectItem value='10 a 99'>10 a 99</SelectItem>
										<SelectItem value='100 a 299'>100 a 299</SelectItem>
										<SelectItem value='300 ou mais'>300 ou mais</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='instagram' className='text-left'>
								Instagram*
							</Label>
							<Input
								id='instagram'
								placeholder='Instagram da empresa'
								required={true}
								className='col-span-3'
								value={data.instagram}
								onChange={handleChange}
							/>
						</div>
					</div>
					<DialogFooter>
						<Button type='submit' onClick={handleSubmit}>
							Agendar
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			{isVisible && (
				<Alert
					className={`${isVisible ? 'animate-fadeIn' : 'animate-fadeOut'}`}
					onAnimationEnd={onAnimationEnd}
				>
					<RocketIcon className='h-4 w-4' />
					<AlertTitle>Um passo à frente!</AlertTitle>
					<AlertDescription>
						Sua empresa está no caminho certo para o sucesso.
					</AlertDescription>
				</Alert>
			)}
		</>
	)
}
