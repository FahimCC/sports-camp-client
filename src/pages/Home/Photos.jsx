import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

// import required modules
import { Autoplay, EffectCoverflow } from 'swiper';

const Photos = () => {
	return (
		<div className='my-36'>
			<div className='w-fit mx-auto mb-10'>
				<h1 className='text-2xl md:text-4xl border-0 border-b-8 border-primary border-double clip font-semibold'>
					Summer Camp Photos
				</h1>
			</div>
			<Swiper
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={'auto'}
				autoplay={{
					delay: 1000,
					disableOnInteraction: false,
				}}
				loop={true}
				coverFlowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				pagination={true}
				modules={[Autoplay, EffectCoverflow]}
				className='mySwiper w-full py-12'
			>
				<SwiperSlide className='bg-center bg-cover max-w-lg aspect-auto'>
					<img
						className='block w-full'
						src='https://swiperjs.com/demos/images/nature-1.jpg'
					/>
				</SwiperSlide>
				<SwiperSlide className='bg-center bg-cover max-w-lg aspect-auto'>
					<img
						className='block w-full'
						src='https://swiperjs.com/demos/images/nature-1.jpg'
					/>
				</SwiperSlide>
				<SwiperSlide className='bg-center bg-cover max-w-lg aspect-auto'>
					<img
						className='block w-full'
						src='https://swiperjs.com/demos/images/nature-1.jpg'
					/>
				</SwiperSlide>
				<SwiperSlide className='bg-center bg-cover max-w-lg aspect-auto'>
					<img
						className='block w-full'
						src='https://swiperjs.com/demos/images/nature-1.jpg'
					/>
				</SwiperSlide>
				<SwiperSlide className='bg-center bg-cover max-w-lg aspect-auto'>
					<img
						className='block w-full'
						src='https://swiperjs.com/demos/images/nature-1.jpg'
					/>
				</SwiperSlide>
				<SwiperSlide className='bg-center bg-cover max-w-lg aspect-auto'>
					<img
						className='block w-full'
						src='https://swiperjs.com/demos/images/nature-1.jpg'
					/>
				</SwiperSlide>
				<SwiperSlide className='bg-center bg-cover max-w-lg aspect-auto'>
					<img
						className='block w-full'
						src='https://swiperjs.com/demos/images/nature-1.jpg'
					/>
				</SwiperSlide>
				<SwiperSlide className='bg-center bg-cover max-w-lg aspect-auto'>
					<img
						className='block w-full'
						src='https://swiperjs.com/demos/images/nature-1.jpg'
					/>
				</SwiperSlide>
				<SwiperSlide className='bg-center bg-cover max-w-lg aspect-auto'>
					<img
						className='block w-full'
						src='https://swiperjs.com/demos/images/nature-1.jpg'
					/>
				</SwiperSlide>
				<SwiperSlide className='bg-center bg-cover max-w-lg aspect-auto'>
					<img
						className='block w-full'
						src='https://swiperjs.com/demos/images/nature-1.jpg'
					/>
				</SwiperSlide>
				<SwiperSlide className='bg-center bg-cover max-w-lg aspect-auto'>
					<img
						className='block w-full'
						src='https://swiperjs.com/demos/images/nature-1.jpg'
					/>
				</SwiperSlide>
				<SwiperSlide className='bg-center bg-cover max-w-lg aspect-auto'>
					<img
						className='block w-full'
						src='https://swiperjs.com/demos/images/nature-1.jpg'
					/>
				</SwiperSlide>
				<SwiperSlide className='bg-center bg-cover max-w-lg aspect-auto'>
					<img
						className='block w-full'
						src='https://swiperjs.com/demos/images/nature-1.jpg'
					/>
				</SwiperSlide>
				<SwiperSlide className='bg-center bg-cover max-w-lg aspect-auto'>
					<img
						className='block w-full'
						src='https://swiperjs.com/demos/images/nature-1.jpg'
					/>
				</SwiperSlide>
				<SwiperSlide className='bg-center bg-cover max-w-lg aspect-auto'>
					<img
						className='block w-full'
						src='https://swiperjs.com/demos/images/nature-1.jpg'
					/>
				</SwiperSlide>
				<SwiperSlide className='bg-center bg-cover max-w-lg aspect-auto'>
					<img
						className='block w-full'
						src='https://swiperjs.com/demos/images/nature-1.jpg'
					/>
				</SwiperSlide>
				<SwiperSlide className='bg-center bg-cover max-w-lg aspect-auto'>
					<img
						className='block w-full'
						src='https://swiperjs.com/demos/images/nature-1.jpg'
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Photos;
