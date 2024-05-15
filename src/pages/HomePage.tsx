import Schedule from '@/components/Schedule';

const HomePage = (number) => {
	return (
		<>
			<main className='w-full h-auto text-center mt-40 px-10 flex justify-center items-center'>
				<div>
					<div>
						<h2 className='font-bold sm:text-[80px] text-5xl text-[#1a73e8] leading-[1]'>
							Aumente as vendas
						</h2>
					</div>

					<div className='relative z-20'>
						<p className='sm:text-[80px] text-5xl text-[#202124] font-bold leading-[1] tracking-[-2.5px]'>
							com Anúncios Online
						</p>
					</div>

					<div className='-mt-10'>
						<div className='relative flex justify-center items-center mx-auto w-80 h-80 bg-[#d2e3fc] [clip-path:circle(50%)] pb-10'>
							<div className="relative w-full h-full bg-center bg-no-repeat bg-[url('https://lh3.googleusercontent.com/T1huE9epB2KD3ECsJ58CePSwl2UN0Cpo_8EMbyy-4UTX1riw7Kwy90o-ou__mgxG6_Vueu9TJyqhg_4q7MWGWZHlBDv5e219Knkj9Gw2O-5TtdXfwGM=w230-rw-v1')]"></div>
							<span className='absolute tracking-[0.3px] font-medium top-[243px] left-[84px] text-lg text-white'>
								Shopping
							</span>
							<span className='absolute text-[#4285f4] text-base tracking-[0.3px] font-medium top-[145px] left-[86px]'>
								Liquida calçados
							</span>
							<span className='absolute text-[#80868b] text-xs top-[175px] left-[86px]'>
								Confira as coleções
							</span>
							<span className='absolute text-[#80868b] text-[8px] top-[203px] left-[82px]'>
								exemplosdenegocios.com.br
							</span>
						</div>
					</div>
				</div>
			</main>

			<section className='flex justify-center flex-col mt-14 md:mx-40'>
				<p className='text-[#3c4043] text-center text-xl px-10'>
					Para todas as necessidades, como gestor de tráfego, possibilito que
					seus potenciais clientes encontrem sua empresa com facilidade através
					dos anúncios.
				</p>

				<div className='flex justify-center items-center gap-4 mt-12'>
					<a
						href={number}
						target='_blank'
						className='h-full sm:text-base text-xs bg-[#1a73e8] border-[1px] rounded-[4px] min-w-24 min-h-12 max-w-96 tracking-[.5px] font-medium text-white py-3 px-7 sm:inline-flex hidden items-center justify-center'
					>
						Entre em contato
					</a>
					<Schedule />
				</div>
			</section>
		</>
	);
};

export default HomePage
