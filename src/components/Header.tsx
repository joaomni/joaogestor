import letter_colors from '../data/letter_colors.json'
import Schedule from './Schedule'

const gestor = letter_colors

const Header = (number) => {
	return (
		<>
			<header className='w-full text-[14px] z-10 shadow-google fixed bg-[#F8F9FA] top-0'>
				<nav className='flex xl:justify-normal justify-between h-[64px] items-center py-2 pr-3 pl-6'>
					<a href='/' className='sm:text-2xl text-xl font-medium'>
						{/* {
						gestor.map((g) => (
							<span style={"color:" + g.color}>{g.letter}</span>
						))
					} */}
						<span className='text-[#5f6368]'>Gestor João</span>
					</a>

					<div className='xl:flex gap-x-9 text-base ml-9 grow h-full items-center xl:block hidden'>
						<a href='/'>Serviços</a>
						<a href='/sobre-joaopaulo'>Sobre</a>
						<a href=''>Resumo</a>
						<a href='https://www.linkedin.com/in/joaomni/' target='_blank'>
							Linkedin
						</a>
					</div>

					<div>
						<Schedule client:idle />

						<a
							href={number}
							target='_blank'
							className='h-full sm:text-base text-xs bg-[#1a73e8] border-[1px] rounded-[4px] min-w-24 min-h-12 max-w-96 tracking-[.5px] font-medium text-white py-3 px-7 sm:inline-flex hidden items-center justify-center ml-2'
						>
							Entre em contato
						</a>
					</div>
				</nav>
			</header>
		</>
	)
}

export default Header
