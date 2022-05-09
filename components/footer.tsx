import Image from 'next/image.js';
import Link from 'next/link';
import {HeartIcon} from '@heroicons/react/solid';
import github from '@/public/images/github.svg';
import discord from '@/public/images/discord.svg';

const Footer = () => (
	<footer className='flex-row items-center justify-center hidden w-full h-24 shadow sm:flex dark:bg-slate-900 sm:visible '>
		<div className='flex content-center justify-between w-full'>
			<div className='flex flex-col items-center justify-center mx-1 sm:mx-5'>
				<Link href='/sponsor'>
					<a>
						<div className='flex items-center content-center justify-between w-full px-3 cursor-pointer group'>
							<HeartIcon className='w-6 h-6  group-hover:text-pink-600' />
							<p className='ml-3 text-xl  cursor-pointer group-hover:text-pink-600'>
								Support
							</p>
						</div>
					</a>
				</Link>
			</div>
			<div className='flex flex-row mx-1 sm:mx-5 '>
				<Link href='https://github.com/chesspecker'>
					<a target='_blank'>
						<div className='flex items-center content-center justify-between w-full px-3 cursor-pointer'>
							<div className='hidden md:flex p-1 rounded-lg bg-sky-800 dark:bg-transparent items-center justify-center '>
								{/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
								<Image src={github} width={30} height={30} />
							</div>
							<p className='ml-3 text-xl  border-solid cursor-pointer'>
								Github
							</p>
						</div>
					</a>
				</Link>
				<Link href='https://discord.gg/qDftJZBBHa'>
					<a target='_blank'>
						<div className='flex items-center content-center justify-between w-full px-3 cursor-pointer'>
							<div className='hidden md:flex p-1 rounded-lg bg-sky-800 dark:bg-transparent items-center justify-center '>
								<Image
									/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
									src={discord}
									width={30}
									height={30}
									className='hidden md:block'
								/>
							</div>
							<p className='ml-3 text-xl  border-solid cursor-pointer'>
								Discord
							</p>
						</div>
					</a>
				</Link>
			</div>
		</div>
	</footer>
);

export default Footer;
