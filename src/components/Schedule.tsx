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

export default function () {
	const [data, setData] = useState({
		name: '',
		contact: '',
		company: '',
		companySize: '2',
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

	const handleChangeSelect = (e) => {
		const selectedValue = e.target?.value
		
		setData((prevData) => ({
			...prevData,
			companySize: selectedValue,
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
					<Button className='hover:bg-slate-100 hover:border-[#1a73e8] focus:border-[#1a73e8] focus:border-[2px]' variant='default'>Agendar uma reunião</Button>
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
								required
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
								required
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
								required
								className='col-span-3'
								value={data.company}
								onChange={handleChange}
							/>
						</div>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='instagram' className='text-left'>
								Funcionários
							</Label>
							<select
								className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#64748b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 col-span-3'
								onChange={handleChangeSelect}
							>
								<option defaultValue=''>Selecione uma opção</option>
								<option value='2-9'>2 a 9</option>
								<option value='10-99'>10 a 99</option>
								<option value='100-299'>100 a 299</option>
								<option value='300+'>300 ou mais</option>
							</select>
							{/* <Select onValueChange={handleChangeSelect} defaultValue='2-9'>
								<SelectTrigger className='col-span-3'>
									<SelectValue placeholder='Selecione o número de funcionários' />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Quantidade</SelectLabel>
										<SelectItem value='2-9'>2 a 9</SelectItem>
										<SelectItem value='10-99'>10 a 99</SelectItem>
										<SelectItem value='100-299'>100 a 299</SelectItem>
										<SelectItem value='300+' >300 ou mais</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select> */}
						</div>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='instagram' className='text-left'>
								Instagram*
							</Label>
							<Input
								id='instagram'
								placeholder='Instagram da empresa'
								required
								className='col-span-3'
								value={data.instagram}
								onChange={handleChange}
							/>
						</div>
					</div>
					<DialogFooter>
						<Button
							className='hover:bg-slate-100 hover:border-[#1a73e8] focus:border-[#1a73e8] focus:border-[2px]'
							type='submit'
							onClick={handleSubmit}
						>
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
