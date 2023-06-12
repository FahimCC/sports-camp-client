/* eslint-disable react/no-unescaped-entities */
import { Autoplay } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
const Slider = () => {
	return (
		<div>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
				navigation={true}
				modules={[Autoplay]}
				className='mySwiper'
			>
				<SwiperSlide>
					<div
						className='max-w-full h-[400px] lg:h-[630px] bg-center bg-cover aspect-auto '
						style={{
							backgroundImage: `url('https://images.pexels.com/photos/9393464/pexels-photo-9393464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
						}}
					>
						<div className='flex flex-col items-center justify-center text-center h-full bg-black bg-opacity-50 '>
							<h2 className='clip text-3xl md:text-6xl mb-5 font-semibold'>
								Cricket
							</h2>
							<p className='text-second text-xs md:text-base max-w-2xl font-medium'>
								Cricket is a popular bat-and-ball sport played between two
								teams, each aiming to score runs by hitting a ball and defending
								their wicket, while the opposing team tries to get them out.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className='max-w-full h-[400px] lg:h-[630px] bg-center bg-cover aspect-auto '
						style={{
							backgroundImage: `url('https://images.pexels.com/photos/15874976/pexels-photo-15874976/free-photo-of-boys-posing-with-football-balls.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
						}}
					>
						<div className='flex flex-col items-center justify-center text-center h-full bg-black bg-opacity-50 '>
							<h2 className='clip text-3xl md:text-6xl mb-5 font-semibold'>
								FootBall
							</h2>
							<p className='text-second text-xs md:text-base max-w-2xl font-medium'>
								Football is a globally beloved sport played between two teams,
								where players use their feet to kick a ball and score goals in
								the opposing team's net, aiming to outscore their opponents.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className='max-w-full h-[400px] lg:h-[630px] bg-center bg-cover aspect-auto '
						style={{
							backgroundImage: `url('https://images.pexels.com/photos/8457973/pexels-photo-8457973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
						}}
					>
						<div className='flex flex-col items-center justify-center text-center h-full bg-black bg-opacity-50 '>
							<h2 className='clip text-3xl md:text-6xl mb-5 font-semibold'>
								Basket Ball
							</h2>
							<p className='text-second text-xs md:text-base max-w-2xl font-medium'>
								Basketball is a team sport played with a ball and two hoops.
								Players try to score points by shooting the ball into the
								opponent's hoop while defending their own, using dribbling,
								passing, and teamwork to advance and control the ball.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className='max-w-full h-[400px] lg:h-[630px] bg-center bg-cover aspect-auto '
						style={{
							backgroundImage: `url('https://images.pexels.com/photos/6504851/pexels-photo-6504851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
						}}
					>
						<div className='flex flex-col items-center justify-center text-center h-full bg-black bg-opacity-50 '>
							<h2 className='clip text-3xl md:text-6xl mb-5 font-semibold'>
								Long Jump
							</h2>
							<p className='text-second text-xs md:text-base max-w-2xl font-medium'>
								Long jump is an athletic event where participants sprint down a
								runway and then jump as far as possible into a sandpit. The
								distance covered from the takeoff point to the landing is
								measured to determine the winner.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className='max-w-full h-[400px] lg:h-[630px] bg-center bg-cover aspect-auto '
						style={{
							backgroundImage: `url('https://images.pexels.com/photos/5815672/pexels-photo-5815672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
						}}
					>
						<div className='flex flex-col items-center justify-center text-center h-full bg-black bg-opacity-50 '>
							<h2 className='clip text-3xl md:text-6xl mb-5 font-semibold'>
								Volley Ball
							</h2>
							<p className='text-second text-xs md:text-base max-w-2xl font-medium'>
								Volleyball is a team sport played with a ball over a net.
								Players aim to keep the ball in the air and send it over the
								net, trying to score points by making it touch the ground on the
								opponent's side.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className='max-w-full h-[400px] lg:h-[630px] bg-center bg-cover aspect-auto '
						style={{
							backgroundImage: `url('https://images.pexels.com/photos/1234953/pexels-photo-1234953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
						}}
					>
						<div className='flex flex-col items-center justify-center text-center h-full bg-black bg-opacity-50 '>
							<h2 className='clip text-3xl md:text-6xl mb-5 font-semibold'>
								Base Ball
							</h2>
							<p className='text-second text-xs md:text-base max-w-2xl font-medium'>
								Baseball is a sport played between two teams, where players use
								a bat to hit a ball thrown by the opposing team's pitcher. The
								goal is to score runs by running around a series of bases.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className='max-w-full h-[400px] lg:h-[630px] bg-center bg-cover aspect-auto '
						style={{
							backgroundImage: `url('https://images.pexels.com/photos/13894134/pexels-photo-13894134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
						}}
					>
						<div className='flex flex-col items-center justify-center text-center h-full bg-black bg-opacity-50 '>
							<h2 className='clip text-3xl md:text-6xl mb-5 font-semibold'>
								Cycling
							</h2>
							<p className='text-second text-xs md:text-base max-w-2xl font-medium'>
								Cycling is a sport and means of transportation that involves
								riding a bicycle. It encompasses various disciplines such as
								road cycling, mountain biking, and track cycling, where riders
								pedal to propel themselves forward.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className='max-w-full h-[400px] lg:h-[630px] bg-center bg-cover aspect-auto '
						style={{
							backgroundImage: `url('https://images.pexels.com/photos/8224422/pexels-photo-8224422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
						}}
					>
						<div className='flex flex-col items-center justify-center text-center h-full bg-black bg-opacity-50 '>
							<h2 className='clip text-3xl md:text-6xl mb-5 font-semibold'>
								Tennis
							</h2>
							<p className='text-second text-xs md:text-base max-w-2xl font-medium'>
								Tennis is a racket sport played between two players (singles) or
								two teams of two players (doubles). The objective is to hit a
								ball over a net and into the opponent's court, aiming to score
								points by making the ball unreturnable.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className='max-w-full h-[400px] lg:h-[630px] bg-top bg-cover aspect-auto '
						style={{
							backgroundImage: `url('https://images.pexels.com/photos/14605729/pexels-photo-14605729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
						}}
					>
						<div className='flex flex-col items-center justify-center text-center h-full bg-black bg-opacity-50 '>
							<h2 className='clip text-3xl md:text-6xl mb-5 font-semibold'>
								Badminton
							</h2>
							<p className='text-second text-xs md:text-base max-w-2xl font-medium'>
								Badminton is a racquet sport played with a shuttlecock. Players
								use racquets to hit the shuttlecock over a net, aiming to keep
								it in play and score points by making it land within the
								opponent's court. It can be played in singles or doubles.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className='max-w-full h-[400px] lg:h-[630px] bg-top bg-cover aspect-auto '
						style={{
							backgroundImage: `url('https://pbs.twimg.com/media/DJcXgU2XoAAL47u.jpg')`,
						}}
					>
						<div className='flex flex-col items-center justify-center text-center h-full bg-black bg-opacity-50 '>
							<h2 className='clip text-3xl md:text-6xl mb-5 font-semibold'>
								Kabaddi
							</h2>
							<p className='text-second text-xs md:text-base max-w-2xl font-medium'>
								Kabaddi is a contact team sport originating in South Asia. It
								involves two teams, where a "raider" tries to tag opponents and
								return to their side without being caught, while the opposing
								team defends and tries to stop the raider.
							</p>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Slider;
