import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

// import required modules
import { Autoplay, EffectCoverflow as EffectCoverFlow } from 'swiper';

const Photos = () => {
	return (
		<div className='my-36'>
			<div className='w-fit mx-auto mb-10'>
				<h1 className='text-2xl md:text-4xl clip font-semibold'>
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
				modules={[Autoplay, EffectCoverFlow]}
				className='mySwiper w-full py-12'
			>
				<SwiperSlide className='bg-center bg-cover max-w-lg aspect-auto'>
					<img
						className='block w-full h-[400px] '
						src='https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2015/04/04/Photos/cricket-knxG--621x414@LiveMint.jpg'
					/>
				</SwiperSlide>
				<SwiperSlide className='bg-center bg-cover max-w-lg aspect-auto'>
					<img
						className='block w-full h-[400px]'
						src='https://sambasoccerschools.com/wp-content/uploads/2020/11/follow-instructions-in-football-camp.jpg'
					/>
				</SwiperSlide>
				<SwiperSlide className='bg-center bg-cover max-w-lg aspect-auto'>
					<img
						className='block w-full h-[400px]'
						src='https://media.chatterblock.com/files/location_images/prairie-badminton-None-d7ed47.jpg'
					/>
				</SwiperSlide>
				<SwiperSlide className='bg-center bg-cover max-w-lg aspect-auto'>
					<img
						className='block w-full h-[400px]'
						src='https://mvztennis.com/wp-content/uploads/2017/09/kids-private-tennis-lesson-tennis-academy.jpg'
					/>
				</SwiperSlide>
				<SwiperSlide className='bg-center bg-cover max-w-lg aspect-auto'>
					<img
						className='block w-full h-[400px]'
						src='https://www.bendparksandrec.org/wp-content/uploads/2015/05/Shevlin-Park-and-Trail-Bike-Ride-e1525293222211.jpg'
					/>
				</SwiperSlide>
				<SwiperSlide className='bg-center bg-cover max-w-lg aspect-auto'>
					<img
						className='block w-full h-[400px]'
						src='https://i0.wp.com/blog.scoutingmagazine.org/wp-content/uploads/sites/2/2022/05/16652_CCRaymond0256-scaled.jpg?fit=2560%2C1707&ssl=1'
					/>
				</SwiperSlide>
				<SwiperSlide className='bg-center bg-cover max-w-lg aspect-auto'>
					<img
						className='block w-full h-[400px]'
						src='https://archive.deltacollege.edu/dept/publicinfo/prel/2014/images/DSC_0650_600.jpg'
					/>
				</SwiperSlide>
				<SwiperSlide className='bg-center bg-cover max-w-lg aspect-auto'>
					<img
						className='block w-full h-[400px]'
						src='https://www.jurasports.com/wp-content/uploads/2019/09/Day-1-Long-Jump.jpg'
					/>
				</SwiperSlide>
				<SwiperSlide className='bg-center bg-cover max-w-lg aspect-auto'>
					<img
						className='block w-full h-[400px]'
						src='https://img.kyodonews.net/english/public/images/posts/17123c28138571f374268e65a3588ef7/photo_l.jpg'
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Photos;
